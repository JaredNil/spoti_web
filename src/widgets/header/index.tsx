"use client"

import { useCallback, useState } from 'react';
import { Button } from '@/shared/ui/kit/button';
import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { TbFileUpload } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

import { WidgetLoader } from '@/shared/ui/widgetLoader';

// import { AuthModal } from 'features/Auth/ui/AuthModal/AuthModal';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { TransitEffect, useTransit } from 'shared/lib/hooks/useTransit/useTransit';
// import { Button } from 'shared/ui/Button/Button';
// import { HeaderLoader } from 'shared/ui/HeaderLoader/HeaderLoader';
// import { logoutByServer } from 'entities/User/model/service/logoutByServer';
// import { getUsername } from '../../entities/User/model/selectors/getUsername/getUsername';
// import { getIsLoadingUser } from '../../entities/User/model/selectors/getIsLoadingUser/getIsLoadingUser';

interface HeaderProps {
	children?: React.ReactNode;
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className }: HeaderProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const routing = useRouter()

	// const dispatch = useAppDispatch();

	// const username = useAppSelector(getUsername);
	const username = 'user'
	// const isLoading = useAppSelector(getIsLoadingUser);
	const isLoading = false

	const onCloseModal = useCallback(() => {
		// setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		// setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		// dispatch(logoutByServer());
	}, []);

	return (
		<div
			className={twMerge(
				`absolute left-0 top-2 z-50 flex h-fit
				w-full rounded-lg bg-gradient-to-b from-emerald-800 p-6 select-none pointer-events-none`,
				className
			)}
		>
			<div className="mb-4 flex w-full items-center justify-between pointer-events-auto">
				<div className="hidden items-center gap-x-2 md:flex">
					<button
						onClick={() => routing.back()}
						type="button"
						className=" flex h-[35px] w-[35px] 
                        cursor-pointer items-center justify-center 
						rounded-full  bg-black 
						transition hover:opacity-75
                        "
					>
						<HiOutlineChevronLeft className="mr-[3px] text-white" size={23} />
					</button>
					<button
						onClick={() => routing.forward()}
						type="button"
						className={`flex h-[35px] w-[35px] 
                        cursor-pointer items-center justify-center 
						rounded-full  bg-black 
						transition hover:opacity-75
                        `}
					>
						<HiOutlineChevronRight className="ml-[2px] text-white" size={23} />
					</button>
				</div>
				<div className="flex items-center gap-x-2 md:hidden">
					<button
						onClick={() => routing.push('/')}
						type="button"
						className="flex cursor-pointer items-center justify-center 
						rounded-full bg-white p-2 transition 
						hover:opacity-75"
					>
						<HiHome className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => routing.push('search')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<BiSearch className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => routing.push('upload')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<TbFileUpload className="text-black" size={20} />
					</button>
				</div>

				<div className="relative flex items-center justify-between transition-all duration-300">
					<Button 
						onClick={() => routing.push('/account')} 
						className="transition-all duration-150 bg-white cursor-pointer rounded-full"
					>
						 <FaUserAlt fill='#000000' />
					</Button>
					<Button
						onClick={() => (username ? onLogout() : onShowModal())} // DEMO HANDLER
						className="ml-3 flex w-24 items-center justify-center px-6 py-2
						bg-white cursor-pointer rounded-full text-black
						"
					>
						{username ? 'Выйти' : 'Войти'}
					</Button>
					{/* {isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseModal()} />} */}
					<Button
						className={twMerge(
							`absolute pointer-events-none 
							flex w-full select-none
							items-center justify-center bg-transparent
							px-6 py-2 my-3 transition-all duration-300`,
							isLoading && 'pointer-events-auto cursor-wait bg-green-500'
						)}
					>
						<div className={twMerge(isLoading ? 'transition' : 'opacity-0', 
							'pointer-events-none select-none')}
						>
							<WidgetLoader />
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

/* 
        */