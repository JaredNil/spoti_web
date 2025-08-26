import {
	getIsActivePlayer,
	getIsLoadingTrack,
	getIsRunPlayer,
	getPlayerQueue,
	getPlayerTarget,
} from '../selector/playerSelector'
import { fetchTrackData } from '../service/fetchTrackData'
import { playerAction } from '../slice/playerSlice'

import { useCurrentTrack } from '@/app/(providers)/playerProvider'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'

export function usePlayer() {
	const { playTrack, pauseTrack } = useCurrentTrack()

	const isRun = useAppSelector(getIsRunPlayer)
	const isLoadingTrack = useAppSelector(getIsLoadingTrack)
	const isActivePlayer = useAppSelector(getIsActivePlayer)
	const queue = useAppSelector(getPlayerQueue)
	const target = useAppSelector(getPlayerTarget)

	const dispatch = useAppDispatch()

	function start(trackesId: number[], target: number = 0) {
		if (!isActivePlayer) dispatch(playerAction.onActivePlayer())
		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(target))
		dispatch(fetchTrackData(trackesId[target]))
	}

	function play() {
		if (queue.length === 0) {
			start([1, 2, 3, 4, 5, 6]) // as like Liked trackes, in future put in from backend
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
		if (queue.length - 1 === target) {
			// idk what doing
		} else if (target !== undefined && queue.length - 1 > target) {
			dispatch(playerAction.setIsRun(true))

			const nextTarget = target + 1
			dispatch(playerAction.setTarget(nextTarget))
			dispatch(fetchTrackData(queue[nextTarget]))
		}
	}

	function prev() {
		if (target && target !== 0) {
			dispatch(playerAction.setIsRun(true))

			const nextTarget = target - 1
			dispatch(playerAction.setTarget(nextTarget))
			dispatch(fetchTrackData(queue[nextTarget]))
		}
	}

	return { start, isRun, isLoadingTrack, next, play, pause, prev }
}
