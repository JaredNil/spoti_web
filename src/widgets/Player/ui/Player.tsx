import { useEffect, useRef } from "react";
import { Volume } from "./Volume";
import { usePlayer } from "../model/hook/usePlayer";
import { useSelector } from "react-redux";
import { getIsRunPlayer, getTrack } from "../model/selector/PlayerSelector";
import { FaPlay } from "react-icons/fa";
import { useCurrentTrack } from "app/providers/PlayerProvider";

export const Player: React.FC = () => {

	useEffect(()=>{
		// dispatch(fetchPlayerData) IN DEMO - NOT WORKING WITH SERVER
	},[])

	const track = useSelector(getTrack)
	const { currentTrack, toggleTrack } = useCurrentTrack()

	useEffect(()=>{
		if(track) toggleTrack(track?.songLink)
	},[track])

	// const track = useSelector(getTrack)
	// const isRun = useSelector(getIsRunPlayer)
// 

	// useEffect(() => {
	// 	if(isRun) {
	// 	}
	// 	else {}
	// }, [track, isRun])

	return (
		<div
			className="absolute left-0 bottom-0 z-50 h-14 w-full px-4
			flex justify-between items-center
			bg-black"
		>
			<div className="flex justify-start items-center">
				<div className="aspect-square w-[40px] bg-white"></div>
				<div className="flex flex-col justify-around pl-3" >
					<div className="text-[14px]">Track</div>
					<div className="text-xs">Author</div>
				</div>
			</div>
			<Volume />
			<div className="absolute left-1/2 -translate-x-1/2 top-0 h-full
				flex justify-between items-center w-[190px]
			">
				<div className="queue bg-yellow-600 aspect-square w-8 flex justify-center items-start">q</div>
				<div className="previous bg-yellow-600 aspect-square w-8 flex justify-center items-start">p</div>
				<div className="play h-8 w-8 flex justify-center items-start
					border-[1.5px] border-neutral-400 rounded-full border-opacity-100
					cursor-pointer"
				>
					<FaPlay fill="rgb(200 200 200)"
					 className="text-black pointer-events-none 
					 translate-y-[6px] translate-x-[1px]"
					/>
				</div>
				<div className="next bg-yellow-600 aspect-square w-8 flex justify-center items-start">n</div>
				<div className="repeat bg-yellow-600 aspect-square w-8 flex justify-center items-start">r</div>
			</div>
		</div>
	);
};
