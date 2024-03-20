/* eslint-disable @typescript-eslint/no-shadow */
import { memo, useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { TbFileUpload } from 'react-icons/tb';
import { TiInfoLarge } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

import { AuthModal } from 'features/Auth/ui/AuthModal/AuthModal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TransitEffect, useTransit } from 'shared/lib/hooks/useTransit/useTransit';
import { Button } from 'shared/ui/Button/Button';
import { HeaderLoader } from 'shared/ui/HeaderLoader/HeaderLoader';
import { logoutByServer } from 'entities/User/model/service/logoutByServer';
import { getUsername } from '../../entities/User/model/selectors/getUsername/getUsername';
import { getIsLoadingUser } from '../../entities/User/model/selectors/getIsLoadingUser/getIsLoadingUser';

interface HeaderProps {
	children?: React.ReactNode;
	className?: string;
}

export const Header: React.FC<HeaderProps> = memo(({ children, className }: HeaderProps) => {
	// const player = usePlayer();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const dispatch = useAppDispatch();

	const transit = useTransit();

	const username = useSelector(getUsername);
	const isLoading = useSelector(getIsLoadingUser);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(logoutByServer());
	}, [dispatch]);

	return (
		<header
			className={twMerge(
				`absolute left-0 top-2 flex h-fit w-full
				rounded-lg bg-gradient-to-b from-emerald-800 p-6 `,
				className
			)}
		>
			<div className="mb-4 flex w-full items-center justify-between">
				<div className="hidden items-center gap-x-2 md:flex">
					<button
						onClick={() => transit(TransitEffect.BACK)}
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
						onClick={() => transit(TransitEffect.FORWARD)}
						type="button"
						className=" flex h-[35px] w-[35px] 
                        cursor-pointer items-center justify-center 
						rounded-full  bg-black 
						transition hover:opacity-75
                        "
					>
						<HiOutlineChevronRight className="ml-[2px] text-white" size={23} />
					</button>
				</div>
				<div className="flex items-center gap-x-2 md:hidden">
					<button
						onClick={() => transit('/')}
						type="button"
						className="flex cursor-pointer items-center justify-center 
						rounded-full bg-white p-2 transition 
						hover:opacity-75"
					>
						<HiHome className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => transit('/search')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<BiSearch className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => transit('/upload')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<TbFileUpload className="text-black" size={20} />
					</button>
				</div>

				<div className="relative flex items-center justify-between transition-all duration-300">
					<Button
						onClick={() => {
							transit(!username ? '/intro' : '/account');

							// if (!username) transit('/intro');
							// else transit('/account');
						}}
						className={twMerge('bg-white transition-all duration-150')}
					>
						{!username ? <TiInfoLarge /> : <FaUserAlt />}
					</Button>
					<Button
						onClick={() => (username ? onLogout() : onShowModal())}
						className="ml-3 flex w-24 items-center justify-center bg-white px-6 py-2"
					>
						{username ? 'Выйти' : 'Войти'}
					</Button>
					{isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseModal()} />}
					<Button
						className={twMerge(
							`hover:opacity-1 pointer-events-none absolute z-30
							flex h-full w-full select-none
							items-center justify-center bg-transparent
							px-6 py-2 transition-all duration-300`,

							isLoading && 'pointer-events-auto cursor-wait bg-green-500'
						)}
					>
						<HeaderLoader className={isLoading ? 'transition ' : 'opacity-0'} />
					</Button>
				</div>
			</div>
		</header>
	);
});
