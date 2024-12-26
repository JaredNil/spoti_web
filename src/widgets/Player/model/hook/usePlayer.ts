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

	const { currentTrack, toggleTrack } = useCurrentTrack()
	
	const dispatch = useAppDispatch();

	const track = useSelector(getTrack)

	async function play(trackesId: number[]) {

        console.log('play hook running')
		console.log(trackesId)

		if(!isActivePlayer) dispatch(playerAction.onActivePlayer())

		const hash = uuid4()
		console.log(hash)
		dispatch(playerAction.setHash(hash))

		dispatch(playerAction.setQueue(trackesId))
		dispatch(playerAction.setTarget(0))
		dispatch(fetchTrackData({trackesId: trackesId[0], hash: hash}))
		// toggleTrack(track!.songLink)
	}


	return {play, isRun, isLoadingTrack};
}
