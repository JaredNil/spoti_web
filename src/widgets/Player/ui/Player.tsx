import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";

import { useCurrentTrack } from "app/providers/PlayerProvider";

import { getTrack } from "../model/selector/PlayerSelector";
import { Volume } from "./Volume";
import { PlayerLine } from "./PlayerLine";

export const Player: React.FC = () => {

	const [isPlay, setIsPlay] = useState(false)

	const playHandler = ()=>{
		setIsPlay(!isPlay)
	}

	// useEffect(()=>{
		// dispatch(fetchPlayerData) IN DEMO - NOT WORKING WITH SERVER
	// },[])

	const track = useSelector(getTrack)
	const { currentTrack, toggleTrack } = useCurrentTrack()

	useEffect(()=>{
		if(track) toggleTrack(track?.songLink)
	},[track])

	return (
		<div
			className="absolute left-0 bottom-0 z-50 h-14 w-full px-4
			flex justify-between items-center
			bg-black"
		>
			<div className="flex justify-start items-center w-[315px] ">
				<div className="aspect-square w-[40px] bg-white"></div>
				<div className="flex flex-col justify-around pl-3" >
					<div className="text-[14px]">{track?.title}</div>
					<div className="text-xs">{track?.author}</div>
				</div>
			</div>
			<div className="absolute left-[280px] -translate-x-1/2 top-0 h-full
				flex justify-between items-center
			">
					{/* <div className="queue bg-yellow-600 aspect-square w-8 flex justify-center items-start">q</div> */}
					<div className="w-4 h-5 ml-1 mr-1
						flex justify-center items-center 
						cursor-pointer bg-slate-900
						rotate-180"
					>
						<div className="relative flex justify-center items-center">
							<FaPlay fill="rgb(200 200 200)"
							className="text-black pointer-events-none"
							/>
							<svg className="absolute right-[-6px] scale-[1.4] scale-x-[1.6]" fill="#C8C8C8" stroke="#C8C8C8" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
						</div>
					</div>
					<div
						onClick={playHandler} 
						className="h-10 w-10
						flex justify-center items-center
						border-[1px] border-green-500 rounded-full border-opacity-70
						cursor-pointer"
					>
						<FaPlay size={25} fill="#48bb78"
						className={`pointer-events-none translate-x-[2px] origin-[5px]
							transition-transform
							${isPlay ? '':'scale-x-[0.1]'}`}
						/>
						<div className="absolute flex justify-between">
							<svg className={twMerge(`translate-x-[2.5px] scale-x-[3] transition-transform`, `${(isPlay) ? 'scale-y-0' : 'scale-y-[2.1]'}`)} fill="#48bb78" stroke="#48bb78" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
							<svg className={twMerge(`translate-x-[-2px] scale-x-[3] transition-transform`, `${(isPlay) ? 'scale-y-0' : 'scale-y-[2.1]'}`)} fill="#48bb78" stroke="#48bb78" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
						</div>
					</div>
					<div className="w-4 h-5 ml-1 mr-1
						flex justify-center items-center 
						cursor-pointer bg-slate-900"
					>
						<div className="relative flex justify-center items-center">
							<FaPlay fill="rgb(200 200 200)"
							className="text-black pointer-events-none"
							/>
							<svg className="absolute right-[-6px] scale-[1.4] scale-x-[1.6]" fill="#C8C8C8" stroke="#C8C8C8" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
						</div>
					</div>
					{/* <div className="repeat bg-yellow-600 aspect-square w-8 flex justify-center items-start">r</div> */}
			</div>
			<div className="flex-1 pr-3">
				<PlayerLine />
			</div>
			<Volume />
		</div>
	);
};
