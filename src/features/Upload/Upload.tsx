/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import Button from 'shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import { FaAnglesDown } from 'react-icons/fa6';
// import FileUpload from './FileUpload';

export const Upload: React.FC = () => {
	const [audio, setAudio] = useState(null);
	const [isDragEvent, setIsDragEvent] = useState(false);

	const next = (audioB: any) => {
		setAudio(audioB);
		console.log('next', audioB);
		if (audioB) {
			const formData = new FormData();
			formData.append('audio', audioB);
			axios.post('http://localhost:5000/tracks', formData, {
				onUploadProgress: (progressEvent) => {
					const totalLength = progressEvent.progress
						? progressEvent.total
						: progressEvent.event.getResponseHeader('content-length') ||
							progressEvent.event.getResponseHeader(
								'x-decompressed-content-length'
							);
					console.log('total', totalLength);
					if (totalLength) {
						let progress = Math.round((progressEvent.loaded * 100) / totalLength);
						console.log(progress);
						// dispatch(changeUploadFile(progress));
					}
				},
			});
		}
	};

	const dragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setIsDragEvent(true);
	};

	const dropHandler = (event: React.DragEvent) => {
		event.preventDefault();
		event.stopPropagation();

		console.log('dsad');

		setIsDragEvent(false);

		const droppedFiles = event.dataTransfer.files;

		const newFiles: File[] = [];
		for (let i = 0; i < droppedFiles.length; i++) {
			newFiles.push(droppedFiles[i]);
		}
		next(newFiles[0]);

		// dispatch(uploadingFile(droppedFiles));

		// newFiles.forEach((file) => {
		// 	dispatch(uploadingAction.addNewUploading(file.name));
		// });
	};

	const ref = useRef<HTMLInputElement | null>(null);
	const onChangeInputFile = (event: ChangeEvent<HTMLInputElement>) => {
		let ob = event.target.files[0];
		next(ob);
	};

	return (
		<div
			className=" flex flex-col items-start justify-start 
			border-b-2 border-neutral-400/5"
		>
			<h2 className=" text-2xl font-semibold text-white">Uploader feature</h2>
			<div
				className={twMerge(
					`relative flex w-full flex-col items-center rounded-3xl 
							border-2 border-transparent 
							py-8 transition`,
					isDragEvent && 'border-dashed border-green-500'
				)}
				onDragEnterCapture={dragEnterHandler}
				onDragOver={dragEnterHandler}
				onDrop={dropHandler}
			>
				<div onClick={() => ref?.current?.click()}>
					<input
						className="hidden"
						type="file"
						accept="audio/*"
						ref={ref}
						onChange={onChangeInputFile}
					/>
					<div>
						<div
							className={twMerge(
								`pointer-events-none mb-3 select-none text-center transition`,
								isDragEvent ? 'text-transparent' : ''
							)}
						>
							Выберите из фолдера или перетащите в этот блок
						</div>
						<Button
							className={twMerge(
								' text-lg font-normal tracking-wide text-white',
								isDragEvent
									? 'bg-transparent text-transparent'
									: 'w-full'
							)}
						>
							Выбрать треки
						</Button>
						<FaAnglesDown
							className={twMerge(
								` pointer-events-none absolute bottom-[25px] left-[42%] select-none`
							)}
							size={54}
							fill={
								isDragEvent
									? 'rgba(34, 197, 94, 1)'
									: 'rgba(34, 197, 94, 0)'
							}
							style={{
								animation: 'wiggle 2.6s ease-in-out infinite',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
