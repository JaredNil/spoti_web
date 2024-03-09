/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { Header } from 'widgets/Header';

import Button from 'shared/ui/Button/Button';

import { FaAnglesDown } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Upload } from 'features/Upload/Upload';
import { getUploadingList } from '../model/selectors/uploadingSelectors/uploadingSelectors';
import { uploadingFile } from '../model/services/fetchUploading/fetchUploading';

const UploadPage: React.FC = () => {
	const { t } = useTranslation();
	const [dragEnter, setDragEnter] = useState(false);
	// const [files, setFiles] = useState<File[]>([]);
	const files = useSelector(getUploadingList);

	const dispatch = useAppDispatch();

	const dragEnterHandler = (event: React.DragEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(true);
	};

	const dragDragLeaveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(false);
	};

	const dropHandler = (event: React.DragEvent) => {
		event.preventDefault();
		event.stopPropagation();

		setDragEnter(false);

		const droppedFiles = event.dataTransfer.files;

		// const newFiles: File[] = [];
		// for (let i = 0; i < droppedFiles.length; i++) {
		// 	newFiles.push(droppedFiles[i]);
		// }

		// dispatch(uploadingFile(droppedFiles));

		// newFiles.forEach((file) => {
		// 	dispatch(uploadingAction.addNewUploading(file.name));
		// });
	};

	const fileUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const addedFiles = event.target.files;
		if (!addedFiles) throw new Error('no file in fileUploadHandler');

		// newFiles.forEach((file) => {
		// 	dispatch(uploadingAction.addNewUploading(file.name));
		// });
		dispatch(uploadingFile(addedFiles));
	};

	const inputRef = useRef<null | HTMLInputElement>(null);
	const onButtonClick = () => {
		inputRef.current?.click();
	};

	return (
		<div
			className="h-full w-full overflow-y-auto  rounded-lg bg-neutral-900"
			onMouseUp={() => setDragEnter(false)}
			onMouseLeave={dragDragLeaveHandler}
		>
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-white">Upload</h1>
				</div>
			</Header>

			<div className="mb-7 flex  w-full flex-col  overflow-hidden px-6">
				<div
					className=" pointer-events-none mb-7  select-none pr-[0%] text-justify 
						leading-5 md:pr-[27%]
						"
				>
					Загружайте на сервер треки на платформу. Мы подгрузим необходимую метаинформацию по
					названию трека, чтобы можно было послушать трек с другого устройства.
				</div>
				<div className=" flex flex-col items-start justify-start border-b-2 border-neutral-400/5">
					<h2 className=" text-2xl font-semibold text-white">Uploader feature</h2>

					<form
						className={twMerge(
							`relative flex w-full flex-col items-center rounded-3xl 
							border-2 border-transparent 
							py-8 transition`,
							dragEnter && 'border-dashed border-green-500'
						)}
						// onSubmit={(e) => e.preventDefault()}
						// onDragEnterCapture={dragEnterHandler}
						// onDragOver={dragEnterHandler}
						// onDrop={dropHandler}
					>
						<input
							className="disk__upload-input hidden"
							multiple
							ref={inputRef}
							onChange={fileUploadHandler}
							id="upload-btn"
							type="file"
						/>
						<label className="mt-1 w-[86%] " htmlFor="upload-btn">
							<div
								className={twMerge(
									`pointer-events-none mb-3 select-none text-center transition`,
									dragEnter ? 'text-transparent' : ''
								)}
							>
								Выберите из фолдера или перетащите в этот блок
							</div>
							<Button
								onClick={onButtonClick}
								className={twMerge(
									' text-lg font-normal tracking-wide text-white',
									dragEnter
										? 'bg-transparent text-transparent'
										: 'w-full'
								)}
							>
								Выбрать треки
							</Button>
						</label>
						<FaAnglesDown
							className={twMerge(
								` pointer-events-none absolute bottom-[15px] select-none`
							)}
							size={54}
							fill={dragEnter ? 'rgba(34, 197, 94, 1)' : 'rgba(34, 197, 94, 0)'}
							style={{ animation: 'wiggle 2.6s ease-in-out infinite' }}
						/>
					</form>
				</div>
				<div className="relative mt-2 ">
					<h3 className="mb-1 text-2xl font-semibold text-white">Added files</h3>
					<div className="relative flex max-h-[53vh] w-full flex-col ">
						{files.length === 0 ? (
							<div
								className="relative mt-2 flex h-[30vh]
								items-center justify-center 
								overflow-y-auto text-center "
							>
								<div
									className="select-none font-light
									tracking-wide text-neutral-400 "
								>
									Нет добавленных файлов
								</div>
							</div>
						) : (
							<div
								className="mt-1 flex flex-col
								items-start justify-center 
								overflow-y-auto text-center "
							>
								{files.map((file, index: number) => (
									<div
										key={file.name + index}
										className="my-1 flex h-12 w-[60%] min-w-[240px] 
										select-none items-center rounded-2xl bg-neutral-400/5 px-3
										transition hover:bg-neutral-400/10"
									>
										<div className="select-none">
											{index + 1}
										</div>
										<div className="mx-3 h-[32px] w-[32px] bg-white" />
										<div className="grow select-none text-left">
											{file.name}
										</div>
										{file.progress}
									</div>
								))}
							</div>
						)}
					</div>
				</div>

				<Upload />
			</div>
		</div>
	);
};

export default UploadPage;
