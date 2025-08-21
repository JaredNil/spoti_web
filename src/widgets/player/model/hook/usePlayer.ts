import { useSelector } from 'react-redux'

import { useCurrentTrack } from 'app/providers/PlayerProvider'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { playerAction } from '../slice/playerSlice'
import { fetchTrackData } from '../service/fetchTrackData'
import {
	getIsActivePlayer,
	getIsLoadingTrack,
	getIsRunPlayer,
	getPlayerQueue,
	getPlayerTarget,
} from '../selector/playerSelector'

export function usePlayer() {
	const { playTrack, pauseTrack } = useCurrentTrack()

	const isRun = useSelector(getIsRunPlayer)
	const isLoadingTrack = useSelector(getIsLoadingTrack)
	const isActivePlayer = useSelector(getIsActivePlayer)
	const queue = useSelector(getPlayerQueue)
	const target = useSelector(getPlayerTarget)

	const dispatch = useAppDispatch()

	function start(trackesId: number[]) {
		if (!isActivePlayer) dispatch(playerAction.onActivePlayer())

		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(0))
		dispatch(fetchTrackData(trackesId[0]))
	}

	function play() {
		console.log('play')
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
		if (target !== null) {
			if (queue.length - 1 === target) {
				// idk what doing
			} else if (queue.length - 1 > target) {
				dispatch(playerAction.setIsRun(true))

				const nextTarget = target + 1
				dispatch(playerAction.setTarget(nextTarget))
				dispatch(fetchTrackData(queue[nextTarget]))
			}
		}
	}

	function prev() {
		if (target !== null && target !== 0) {
			dispatch(playerAction.setIsRun(true))

			const nextTarget = target - 1
			dispatch(playerAction.setTarget(nextTarget))
			dispatch(fetchTrackData(queue[nextTarget]))
		}
	}

	return { start, isRun, isLoadingTrack, next, play, pause, prev }
}
