import { useEffect } from "react";
import { Volume } from "./Volume";

export const Player: React.FC = () => {

	useEffect(()=>{
		// dispatch(fetchPlayerData) IN DEMO - NOT WORKING WITH SERVER
	},[])
	
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
				</div>
				<div className="next bg-yellow-600 aspect-square w-8 flex justify-center items-start">n</div>
				<div className="repeat bg-yellow-600 aspect-square w-8 flex justify-center items-start">r</div>
			</div>
		</div>
	);
};
