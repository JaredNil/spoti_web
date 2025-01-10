import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useCurrentTrack } from "app/providers/PlayerProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import {  getPlayerLineData, getTrack, getVolumePlayer } from "../model/selector/PlayerSelector";
import { playerAction } from "../model/slice/PlayerSlice";


export const PlayerLine: React.FC = () => {

	const lineRef = useRef<HTMLDivElement>(null)
	
	const [line, setLine] = useState<number | undefined>(lineRef.current?.clientWidth) // width consist line in px

	// initialization
	useEffect(()=>setLine(lineRef?.current?.clientWidth))

	// LISTENER RESIZE WINDOW FOR OBSERVE CHANGE WIDTH LINE OF PLAYER
	useEffect(() => {
		window.addEventListener('resize', resizeTolalLine)
		return () => window.removeEventListener("resize", resizeTolalLine)
	}, [])
	const resizeTolalLine = () => setLine(lineRef.current?.clientWidth)

	const track = useSelector(getTrack)
	const { timer, duration, progress } = useSelector(getPlayerLineData)

	// TIMER LOGIC
	const [hourTimer, setHourTimer] = useState<string>('0')
	const [minTimer, setMinTimer] = useState<string>('0')
	const [secTimer, setSecTimer] = useState<string>('0')

	useEffect(()=>{
		const td = new Date(0, 0, 0, 0, 0, 0)
		td.setSeconds(timer)

		setHourTimer((td.getHours() <= 9) ? `0${td.getHours()}` : `${td.getHours()}`)
		setMinTimer((td.getMinutes() <= 9) ? `0${td.getMinutes()}` : `${td.getMinutes()}`)
		setSecTimer((td.getSeconds() <= 9) ? `0${td.getSeconds()}` : `${td.getSeconds()}`)
	}, [timer])

	// DURATION LOGIC
	const [hourDuration, setHourDuration] = useState<string>('0')
	const [minDuration, setMinDuration] = useState<string >('0')
	const [secDuration, setSecDuration] = useState<string>('0')

	useEffect(()=>{
		const td = new Date(0, 0, 0, 0, 0, 0)
		td.setSeconds(duration)

		setHourDuration((td.getHours() <= 9) ? `0${td.getHours()}` : `${td.getHours()}`)
		setMinDuration((td.getMinutes() <= 9) ? `0${td.getMinutes()}` : `${td.getMinutes()}`)
		setSecDuration((td.getSeconds() <= 9) ? `0${td.getSeconds()}` : `${td.getSeconds()}`)
	}, [timer])

    const dispatch = useAppDispatch();



	// Заполненность line от процентов прогресса трека
	const [completedLine, setCompletedLine] = useState<number>(
		progress/100*(line as number) || 0
	)

	const getCompletedLine = () => `${completedLine}px`

	useEffect(()=>{
		if(line) setCompletedLine(Math.floor(progress/100*line))
	}, [progress, line])

	// events for shifting and change player line progress
	const [isShifting, setIsShifting] = useState(false) // shifting line player right now for mouse move Events

	const progressClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
		if(track){
			setIsShifting(false)
		
			let newProgress = (line) ? Math.floor((
				event.pageX - Number(lineRef.current?.offsetLeft))/(line/100)
			) : 0
	
			if (newProgress > 100) newProgress = 100
			else if (newProgress < 0) newProgress = 0
			dispatch(playerAction.setProgress(newProgress))
		}		
	}

	const progressMouseDownHandle = () => setIsShifting(true)
	const progressMouseLeaveHandle = () => setIsShifting(false)
	const progressMouseUpHandle = () => setIsShifting(false)

	const progressMouseMoveHandle = (event: React.MouseEvent<HTMLDivElement>) => {
		if(track){
			if(line && isShifting 
				&& (event.pageX - Number(lineRef.current?.offsetLeft)) <= line
				&& (event.pageX - Number(lineRef.current?.offsetLeft)) >= 0
			)
				dispatch(playerAction.setProgress(
					Math.floor((event.pageX - Number(lineRef.current?.offsetLeft))/(line/100))
				))
		}
	}




	return (
		<div ref={lineRef}
				className={`h-[3px] bg-neutral-400/40 
				relative cursor-pointer group border-t-[10px] border-b-[10px] box-content border-black`}
				onClick={progressClickHandle}
				onMouseDown={progressMouseDownHandle}
				onMouseLeave={progressMouseLeaveHandle}
				onMouseUp={progressMouseUpHandle}
				onMouseMove={progressMouseMoveHandle}
			>
				<div className="absolute left-0 bottom-[-20px] text-[12px] text-neutral-400/40">
					{(Number(hourTimer)!=0) ? `${hourTimer}:`: ''}{minTimer}:{secTimer}
				</div>
				<div className="absolute right-0 bottom-[-20px] text-[12px] text-neutral-400/40">
					{(Number(hourDuration)!=0) ? `${hourDuration}:`: ''}{minDuration}:{secDuration}
				</div>
				<div style={{width: getCompletedLine()}} 
					className="h-full left-0 top-0 bg-neutral-400 relative"
				>
					<div className="w-2 h-2 bg-neutral-400
						absolute translate-x-[-3px] top-[50%] translate-y-[-50%]
						aspect-square border rounded-xl border-neutral-600
						opacity-0 transition-opacity duration-100
						group-hover:opacity-100
					"
					style={{left: getCompletedLine()}}
					>
					</div>
				</div>

			</div>
    ) 
};
