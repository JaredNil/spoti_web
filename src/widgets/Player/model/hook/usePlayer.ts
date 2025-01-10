import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { playerAction } from "../slice/PlayerSlice";
import { fetchTrackData } from "../service/fetchTrackData";
import { getIsActivePlayer, getIsLoadingTrack, getIsRunPlayer, getTrack } from "../selector/PlayerSelector";
import { useCurrentTrack } from "app/providers/PlayerProvider";
import uuid4 from "uuid4";

export function usePlayer() {

	const isRun = useSelector(getIsRunPlayer)
	const isLoadingTrack = useSelector(getIsLoadingTrack)
	const isActivePlayer = useSelector(getIsActivePlayer)

	
	const dispatch = useAppDispatch();


	async function play(trackesId: number[]) {

        console.log('play hook running', trackesId)

		if(!isActivePlayer) dispatch(playerAction.onActivePlayer())

		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(0))
		dispatch(fetchTrackData( trackesId[0]))
		// toggleTrack(track!.songLink)
	}


	return {play, isRun, isLoadingTrack};
}
