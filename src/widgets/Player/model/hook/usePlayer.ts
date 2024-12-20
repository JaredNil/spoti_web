import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { playerAction } from "../slice/PlayerSlice";
import { fetchTrackData } from "../service/fetchTrackData";
import { getIsActivePlayer, getIsLoadingTrack, getIsRunPlayer, getTrack } from "../selector/PlayerSelector";
import { useCurrentTrack } from "app/providers/PlayerProvider";

export function usePlayer() {

	const isRun = useSelector(getIsRunPlayer)
	const isLoadingTrack = useSelector(getIsLoadingTrack)
	const isActivePlayer = useSelector(getIsActivePlayer)

	const { currentTrack, toggleTrack } = useCurrentTrack()
	
	const dispatch = useAppDispatch();

	const track = useSelector(getTrack)

	async function play(trackesId: number[]) {
		currentTrack?.load()
		currentTrack?.pause()

		toggleTrack(null)


        console.log('play hook running')
		console.log(trackesId)

		if(!isActivePlayer) dispatch(playerAction.onActivePlayer())

		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(0))
		await dispatch(fetchTrackData(trackesId[0]))

		if (track) toggleTrack(track)

		currentTrack?.load()
	}


	return {play , isRun, isLoadingTrack};
}
