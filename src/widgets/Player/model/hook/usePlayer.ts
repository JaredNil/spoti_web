import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { playerAction } from "../slice/PlayerSlice";
import { fetchTrackData } from "../service/fetchTrackData";
import { getIsActivePlayer, getIsLoadingTrack, getIsRunPlayer, getTrack } from "../selector/PlayerSelector";

export function usePlayer() {

	let current = null

	const isRun = useSelector(getIsRunPlayer)
	const isLoadingTrack = useSelector(getIsLoadingTrack)
	const isActivePlayer = useSelector(getIsActivePlayer)
	
	const dispatch = useAppDispatch();

	const track = useSelector(getTrack)

	async function play(trackesId: number[]) {
        console.log('play hook running')
		console.log(trackesId)

		if(!isActivePlayer) dispatch(playerAction.onActivePlayer())

		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(0))
		await dispatch(fetchTrackData(trackesId[0]))

		current = new Audio(track?.songLink)
		current.play()
		console.log(current)

	}


	return {play , isRun, isLoadingTrack};
}
