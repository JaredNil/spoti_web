'use client'

import { useCallback } from "react";

// import { fetchCommonAlbums, fetchUserAlbums, 
	// getAlbumCommonData, getAlbumUserData } from "entities/Album";
// import { getUsername } from "entities/User";

// import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { WidgetLoader } from "@/shared/ui/widgetLoader";
import '@/shared/ui/widgetLoader/headerLoader.css'
import { LibraryCreation } from "./libraryCreation";

// import { LibraryItem } from "./LibraryItem";
// import { LibraryCreation } from "./LibraryCreation";
// import { AuthModal } from "features/Auth";


export const Library: React.FC = () => {

	// const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	// const isLoading = useSelector(getIsLoading)
	const isLoading = false
	// const username = useSelector(getUsername); // userState
	// const username = 'user'
	// const commonAlbums = useSelector(getAlbumCommonData) // albumState
	// const userAlbums = useSelector(getAlbumUserData) // albumState

	// const dispatch = useAppDispatch()

	const onShowAuthModal = useCallback(() => {
	// 	setIsOpenAuthModal(true);
	()=>{}
	}, []);

	// const onCloseAuthModal = useCallback(() => {
	// 	setIsOpenAuthModal(false);
	// }, []);


	// useEffect(() => {

	// 	if (username) {
	// 		dispatch(fetchCommonAlbums())
	// 		dispatch(fetchUserAlbums())
	// 	}
	// 	else dispatch(fetchCommonAlbums());

	// }, [dispatch, username])

	return (
		<>
			{
				isLoading && <div className="h-300px">
					<WidgetLoader />
				</div>
			}
			{
				!isLoading && (<div className="flex flex-col gap-y-1 px-5 py-4">
					<LibraryCreation onShowModal={onShowAuthModal}/>
					{/* {((username) ? userAlbums : commonAlbums).map((item) => (
						<LibraryItem album={item} key={item.id} />
					))} */}
			 </div>)
			}
		{/* {isOpenAuthModal && 
			<AuthModal isOpen={isOpenAuthModal} 
			onClose={() => onCloseAuthModal()} />
		} */}
		</>
	);
};
