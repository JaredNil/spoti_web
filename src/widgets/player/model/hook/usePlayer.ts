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
import { Track, Trackes, TrackesId, TrackId } from '@/shared/api'
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

	async function loadTrack(trackId: TrackId) {
		const state = store.getState()
		const { data: cachedTrack } =
			trackApi.endpoints.fetchTrack.select(trackId)(state)

		let loadTrack: Trackes | null = null

		if (!cachedTrack)
			loadTrack = (await triggerFetchTrack(trackId).unwrap()) as Trackes

		const track = cachedTrack?.[0] ?? loadTrack?.[0] ?? null

		dispatch(playerAction.setIsRun(true))
		dispatch(playerAction.offLoadingTrack())
		dispatch(playerAction.setTrack(track))
	}

	function start(trackesId: TrackesId, target: number = 0) {
		if (!isActivePlayer) dispatch(playerAction.onActivePlayer())
		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(target))
		loadTrack(trackesId[target])
	}

	function play() {
		if (queue.length === 0) ze('play error, queue empty')
		else {
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
			loadTrack(queue[nextTarget])
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
