import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import toastr from 'toastr';

import { useCurrentTrack } from "app/providers/PlayerProvider";
import { successUploadToastr } from "shared/config/toastr/toastr.config";
import { useTransit } from "shared/lib/hooks/useTransit/useTransit";

import { getIsRunPlayer, getTrack } from "../model/selector/PlayerSelector";
import { Volume } from "./Volume";
import { PlayerLine } from "./PlayerLine";
import { usePlayer } from "../model/hook/usePlayer";

export const Player: React.FC = () => {

	const { next, play, pause, prev } = usePlayer();

	const isRun = useSelector(getIsRunPlayer)

	const playHandler = () => (isRun) ? pause() : play()

	// useEffect(()=>{
		// dispatch(fetchPlayerData) IN DEMO - NOT WORKING WITHOUT SERVER
	// },[])

	const track = useSelector(getTrack)

	const { toggleTrack } = useCurrentTrack()

	const transit = useTransit();

	useEffect(()=>{
		if(track) toggleTrack(track?.songLink)
	},[track])

	return (
		<div
			className="absolute left-0 bottom-0 z-50 h-14 w-full px-2 
			flex justify-between items-center
			bg-black
			sm:px-4
			"
		>
			<div className="flex justify-start items-center w-[315px] ">
				<div className="aspect-square w-[40px] bg-white hidden cursor-pointer sm:block"
					onClick={()=>{toastr.info('Фича в разработке', 'Demo', successUploadToastr);}}
				>
					<img 
						src={track?.imageLink} alt="LOGOTYPE" 
						className="w-full h-full" 
						
					/>
				</div>
				<div className="flex flex-col justify-around pl-3" >
					<div className="text-[11px] text-ellipsis w-[130px] 
						whitespace-nowrap overflow-hidden select-none
						sm:w-[165px] sm:text-[14px]
						"
						title={track?.title}
						onClick={()=>{toastr.info('Фича в разработке', 'Demo', successUploadToastr);}}
						// onClick={() => {if(albumId!=null) transit(`playlist/${albumId}`)}}
					>
						<span className="cursor-pointer">{track?.title}</span>
					</div>
					<span className="text-[9px] w-[130px] text-ellipsis
						text-neutral-300 whitespace-nowrap overflow-hidden select-none
						sm:w-[165px] sm:text-[11px]" 
						title={track?.author}
						onClick={()=>{toastr.info('Фича в разработке', 'Demo', successUploadToastr);}}
					>
						<span className="cursor-pointer">{track?.author}</span>
					</span>
				</div>
			</div>
			<div className="absolute left-1/2 -translate-x-1/2 top-0 h-full
				flex justify-between items-center
				sm:left-[280px]
			">
					<div className="w-4 h-5 ml-1 mr-1
						flex justify-center items-center 
						cursor-pointer bg-slate-900
						rotate-180
						max-[420px]:hidden"
						onClick={() => prev()}
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
							${!isRun ? '':'scale-x-[0.1]'}`}
						/>
						<div className="absolute flex justify-between">
							<svg className={twMerge(`translate-x-[2.5px] scale-x-[3] transition-transform`, `${(!isRun) ? 'scale-y-0' : 'scale-y-[2.1]'}`)} fill="#48bb78" stroke="#48bb78" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
							<svg className={twMerge(`translate-x-[-2px] scale-x-[3] transition-transform`, `${(!isRun) ? 'scale-y-0' : 'scale-y-[2.1]'}`)} fill="#48bb78" stroke="#48bb78" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
						</div>
					</div>
					<div className="w-4 h-5 ml-1 mr-1
						flex justify-center items-center 
						cursor-pointer bg-slate-900
						max-[420px]:hidden"
						onClick={() => next()}
					>
						<div className="relative flex justify-center items-center">
							<FaPlay fill="rgb(200 200 200)"
							className="text-black pointer-events-none"
							/>
							<svg className="absolute right-[-6px] scale-[1.4] scale-x-[1.6]"
							fill="#C8C8C8" stroke="#C8C8C8" strokeWidth="2" viewBox="0 0 24 24" 
							strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" 
							xmlns="http://www.w3.org/2000/svg"><path d="M12 4l0 16"></path></svg>
						</div>
					</div>
			</div>
			<div className="flex-1 pr-3 hidden sm:block">
				<PlayerLine />
			</div>
			<Volume />
		</div>
	);
};
