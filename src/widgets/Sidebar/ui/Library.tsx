import { useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchCommonAlbums, fetchUserAlbums, getAlbumCommonData, getAlbumUserData } from "entities/Album";
import { getUsername, userAction } from "entities/User";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HeaderLoader } from "shared/ui/HeaderLoader/HeaderLoader";

import { LibraryItem } from "./LibraryItem";
import { getIsLoading } from "../model/selector/SidebarSelector";


export const Library: React.FC = () => {

	const isLoading = useSelector(getIsLoading)
	const username = useSelector(getUsername); // userState
	const commonAlbums = useSelector(getAlbumCommonData) // albumState
	const userAlbums = useSelector(getAlbumUserData) // albumState

	const dispatch = useAppDispatch()

	useEffect(() => {

		if (username) {
			dispatch(fetchCommonAlbums())
			dispatch(fetchUserAlbums())
		}
		else dispatch(fetchCommonAlbums());

	}, [dispatch, username])

	console.log(commonAlbums)

	if (isLoading) return (
		<div className="h-300px">
			<HeaderLoader />
		</div>
	)
	else return (
		<div className="flex flex-col gap-y-4 px-5 py-4">

			<div className="flex hover:bg-neutral-400/10 transition-all">
				<div className="flex justify-center items-center
				aspect-square h-[34px] bg-gray-400">
					<div className="text-white text-3xl 
					ml-[1px] mb-[6px] pointer-events-none select-none">
						+
					</div>
				</div>
				<div className="flex justify-start items-center pl-2 w-full overflow-hidden">
					<div className="select-none text-neutral-300 text-ellipsis 
					whitespace-nowrap tracking-wide w-full overflow-hidden"
					>Создать плейлист</div>
				</div>
			</div>
			
			{((username) ? userAlbums : commonAlbums).map((item) => (
				<LibraryItem album={item}
				/>
			))}
		</div>
	);
};
