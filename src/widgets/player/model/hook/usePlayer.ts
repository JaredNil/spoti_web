import { skipToken } from '@reduxjs/toolkit/query'
import { toast } from 'sonner'

import {
	getIsActivePlayer,
	getIsLoadingTrack,
	getIsRunPlayer,
	getPlayerQueue,
	getPlayerTarget,
} from '../selector/playerSelector'
import { playerAction } from '../slice/playerSlice'

import { useCurrentTrack } from '@/app/(providers)/playerProvider'
import { store } from '@/app/(providers)/storeProvider/ui/storeProvider'
import { useFetchTrackQuery, useLazyFetchTrackQuery } from '@/entities/track'
import { trackApi } from '@/entities/track/api/trackApi'
import { Track, Trackes, TrackesHash, TrackHash } from '@/shared/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { ze } from '@/shared/lib/log'

export function usePlayer() {
	const { playTrack, pauseTrack } = useCurrentTrack()

	const [triggerFetchTrack] = useLazyFetchTrackQuery()

	const isRun = useAppSelector(getIsRunPlayer)
	const isLoadingTrack = useAppSelector(getIsLoadingTrack)
	const isActivePlayer = useAppSelector(getIsActivePlayer)
	const queue = useAppSelector(getPlayerQueue)
	const target = useAppSelector(getPlayerTarget)

	const dispatch = useAppDispatch()

	async function loadTrack(trackHash: TrackHash, nextTrackHash?: TrackHash) {
		const state = store.getState()
		console.log(trackHash, nextTrackHash)
		// Проверяем кэш
		const { data: cachedTrack } =
			trackApi.endpoints.fetchTrack.select(trackHash)(state)
		const { data: cachedNextTrack } = trackApi.endpoints.fetchTrack.select(
			nextTrackHash ?? skipToken
		)(state)

		// Резервируем контейнеры для возможных запросов
		let loadTrack: Trackes | null = null
		let loadNextTrack: Trackes | null = null

		// Проверяем есть ли данные в кэше - если нет - запрашиваем
		if (!cachedTrack) {
			loadTrack = (await triggerFetchTrack(trackHash).unwrap()) as Trackes
		}
		if (!cachedNextTrack && nextTrackHash) {
			loadNextTrack = (await triggerFetchTrack(
				nextTrackHash
			).unwrap()) as Trackes
		}

		// Итоговое значение
		const track = cachedTrack?.[0] ?? loadTrack?.[0] ?? null
		const nextTrack = cachedNextTrack?.[0] ?? loadNextTrack?.[0] ?? null

		dispatch(playerAction.setIsRun(true))
		dispatch(playerAction.offLoadingTrack())
		dispatch(playerAction.setTrack(track))
		dispatch(playerAction.setNextTrack(nextTrack))
	}

	function start(trackesHash: TrackesHash, target: number = 0) {
		if (!isActivePlayer) dispatch(playerAction.onActivePlayer())
		dispatch(playerAction.setQueue(trackesHash))
		dispatch(playerAction.setTarget(target))
		loadTrack(trackesHash[target], trackesHash[target + 1])
	}

	function play() {
		if (queue.length === 0) {
			ze('play error, queue empty')
			toast.error('Нет треков в очереди плейлиста')
		} else {
			if (playTrack) {
				playTrack()
				dispatch(playerAction.setIsRun(true))
			} else console.warn('func playTrack not definition')
		}
	}

	function pause() {
		if (pauseTrack) {
			pauseTrack()
			dispatch(playerAction.setIsRun(false))
		} else console.warn('func pauseTrack not definition')
	}

	function next() {
		if (queue.length - 1 === Number(target)) {
			// idk what doing
		} else if (target !== undefined && queue.length - 1 > target) {
			dispatch(playerAction.setIsRun(true))

			const nextTarget = target + 1
			dispatch(playerAction.setTarget(nextTarget))
			loadTrack(queue[nextTarget], queue[nextTarget + 1])
		}
	}

	function prev() {
		if (target && target !== 0) {
			dispatch(playerAction.setIsRun(true))

			const nextTarget = target - 1
			dispatch(playerAction.setTarget(nextTarget))
			loadTrack(queue[nextTarget])
		}
	}

	return { start, isRun, isLoadingTrack, next, play, pause, prev }
}
