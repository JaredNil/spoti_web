/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { Header } from 'widgets/Header';

import Button from 'shared/ui/Button/Button';

import { FaAnglesDown } from 'react-icons/fa6';

const UploadPage: React.FC = () => {
	const { t } = useTranslation();
	const [dragEnter, setDragEnter] = useState(false);
	const [files, setFiles] = useState([]);

	// const fileUploadHandler = (event) => {
	// 	// const files = [...event.target.files];
	// 	// files.forEach((file) => dispatch(uploadFile(file, currentDir)));
	// };

	const dragEnterHandler = (event: React.DragEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		console.log('dragEnterHandler');
		setDragEnter(true);
	};

	const dragDragLeaveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		console.log('dragDragLeaveHandler');
		setDragEnter(false);
	};

	const dropHandler = (event: React.DragEvent<HTMLFormElement>) => {
		console.log('dropHandler');
		// let files = [...event.dataTransfer.files];
		// files.forEach((file) => dispatch(uploadFile(file, currentDir)));
		setDragEnter(false);
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
						onSubmit={(e) => e.preventDefault()}
						onDragEnterCapture={dragEnterHandler}
						onDragOver={dragEnterHandler}
						onDrop={dropHandler}
					>
						<input
							className="disk__upload-input hidden"
							multiple
							ref={inputRef}
							// onChange={(event) => fileUploadHandler(event)}
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
					<h3 className="mb-4 text-2xl font-semibold text-white">Added files</h3>
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
							'dsa'
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadPage;
