/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef } from 'react';
import axios from 'axios';
import { Button } from 'shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import { FaAnglesDown } from 'react-icons/fa6';
import { uploadAction } from 'pages/UploadPage/model/slices/uploadingSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getIsDragEvent, getUploadingList } from 'pages/UploadPage/model/selectors/uploadingSelectors/uploadingSelectors';

export const Upload: React.FC = () => {
	const isDragEvent = useSelector(getIsDragEvent);
	const dispatch = useAppDispatch();
	const files = useSelector(getUploadingList) || [];

	const next = (audioB: File) => {
		const newItemId = files.length;
		dispatch(
			uploadAction.addNewUploading({
				id: newItemId,
				name: audioB?.name,
				progress: 0,
			})
		);

		if (audioB) {
			const formData = new FormData();
			formData.append('audio', audioB);
			const res = axios.post('http://localhost:5000/tracks', formData, {
				onUploadProgress: (progressEvent) => {
					if (progressEvent.total) {
						const percent = Number(
							((progressEvent.loaded / progressEvent.total) * 100).toFixed(2)
						);

						dispatch(
							uploadAction.updateProgressUploading({
								id: newItemId,
								progress: percent,
							})
						);
					}
				},
			});
			console.log(res);
			return res;
		}
		console.log('next execute, but no responce');
		return 'next execute, but no responce';
	};

	const dragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		dispatch(uploadAction.activeDragEvent());
	};

	const dropHandler = (event: React.DragEvent) => {
		event.preventDefault();
		event.stopPropagation();

		dispatch(uploadAction.disableDragEvent());

		const droppedFiles = event.dataTransfer.files;

		const newFiles: File[] = [];
		for (let i = 0; i < droppedFiles.length; i++) {
			newFiles.push(droppedFiles[i]);
		}
		// nextMv(newFiles);
		next(newFiles[0]);
	};

	const ref = useRef<HTMLInputElement | null>(null);
	const onChangeInputFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			let ob = event?.target?.files[0];
			next(ob);
		}
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
						multiple
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
