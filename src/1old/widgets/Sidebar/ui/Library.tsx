// import { TbPlaylist } from 'react-icons/tb';
// import { AiOutlinePlus } from 'react-icons/ai';

// import MediaItem from 'shared/ui/MediaItem/MediaItem';
// import { Song } from 'app/App';
// // import useUploadModal from '@/hooks/useUploadModal';
// // import { useUser } from '@/hooks/useUser';
// // import useAuthModal from '@/hooks/useAuthModal';
// // import useSubscribeModal from '@/hooks/useSubscribeModal';
// // import useOnPlay from '@/hooks/useOnPlay';

// interface LibraryProps {
// 	songs: Song[];
// }

// export const Library: React.FC<LibraryProps> = ({ songs }: LibraryProps) => {
// 	// const { user, subscription } = useUser();
// 	// const uploadModal = useUploadModal();
// 	// const authModal = useAuthModal();
// 	// const subscribeModal = useSubscribeModal();

// 	// const onPlay = useOnPlay(songs);

// 	// const onClick = () => {
// 	// 	if (!user) {
// 	// 		return authModal.onOpen();
// 	// 	}

// 	// 	if (!subscription) {
// 	// 		return subscribeModal.onOpen();
// 	// 	}

// 	// 	return uploadModal.onOpen();
// 	// };

// 	return (
// 		<div className="flex flex-col">
// 			<div className="flex items-center justify-between px-5 pt-4">
// 				<div className="inline-flex items-center gap-x-2">
// 					<TbPlaylist className="text-neutral-400" size={26} />
// 					<p className="text-md font-medium text-neutral-400">Your Library</p>
// 				</div>
// 				<AiOutlinePlus
// 					// onClick={onClick}
// 					size={20}
// 					className="
//         	    cursor-pointer            text-neutral-400
//             transition
//             hover:text-white
//           "
// 				/>
// 			</div>
// 			<div className="mt-4 flex flex-col gap-y-2 px-3">
// 				{songs.map((item) => (
// 					<MediaItem
// 						// onClick={(id: string) => onPlay(id)}
// 						key={item.id}
// 						data={item}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };
