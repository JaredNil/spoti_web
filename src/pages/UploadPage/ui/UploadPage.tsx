/* eslint-disable react/no-array-index-key */
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Upload } from 'features/Upload/Upload';
import { MdDone } from 'react-icons/md';
import Page from 'shared/ui/Page/Page';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { getIsDragEvent, getUploadingList } from '../model/selectors/uploadingSelectors/uploadingSelectors';
import { uploadAction, uploadReducer } from '../model/slices/uploadingSlice';

const reducers: ReducerList = {
	uploadpage: uploadReducer,
};

const UploadPage: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const isDragEvent = useSelector(getIsDragEvent);
	console.log(isDragEvent);

	const files = useSelector(getUploadingList) || [];

	const mouseHandler = () => {
		if (isDragEvent) {
			dispatch(uploadAction.disableDragEvent());
		}
	};
	console.log('UPLOADPAGE RENDER');

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page onMouseUp={mouseHandler} onMouseLeave={mouseHandler}>
				<div className="mb-7 flex  w-full flex-col  overflow-hidden">
					<h1 className="mb-2 text-3xl font-semibold text-white">Upload</h1>
				</div>

				<div
					className=" pointer-events-none mb-7  select-none pr-[0%] text-justify 
						leading-5 md:pr-[27%]
						"
				>
					Загружайте на сервер треки на платформу. Мы подгрузим необходимую метаинформацию по
					названию трека, чтобы можно было послушать трек с другого устройства.
				</div>

				<Upload />

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
										{file.progress === 100 ? (
											<MdDone
												size={
													40
												}
												fill="rgba(34, 197, 94, 1)"
											/>
										) : (
											<div className="select-none text-left">
												{
													file.progress
												}
												%
											</div>
										)}
									</div>
								))}
								<div
									className=" mt-4 w-full select-none text-center font-light
									tracking-wide text-neutral-400"
								>
									Треки добавлены в избранное.
								</div>
								<div
									className="w-full select-none text-center text-xs	 font-light
									tracking-wide text-neutral-400"
								>
									Если есть галочка успешно.
								</div>
							</div>
						)}
					</div>
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default UploadPage;
