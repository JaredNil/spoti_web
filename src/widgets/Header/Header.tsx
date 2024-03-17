/* eslint-disable @typescript-eslint/no-shadow */
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { TbFileUpload } from 'react-icons/tb';

import { getUserAuthData, getUserInited } from 'entities/User';

import { AuthModal } from 'features/Auth';

import { Button } from 'shared/ui/Button/Button';

interface HeaderProps {
	children?: React.ReactNode;
	className?: string;
}

export const Header: React.FC<HeaderProps> = memo(({ children, className }: HeaderProps) => {
	// const player = usePlayer();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const navigate = useNavigate();

	const user = useSelector(getUserAuthData);
	const isinit = useSelector(getUserInited);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6', className)}>
			<div className="mb-4 flex w-full items-center justify-between">
				<div className="hidden items-center gap-x-2 md:flex">
					<button
						onClick={() => navigate(-1)}
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
						onClick={() => navigate(1)}
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
						onClick={() => navigate('/')}
						type="button"
						className="flex cursor-pointer items-center justify-center 
						rounded-full bg-white p-2 transition 
						hover:opacity-75"
					>
						<HiHome className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => navigate('/search')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<BiSearch className="text-black" size={20} />
					</button>
					<button
						type="button"
						onClick={() => navigate('/upload')}
						className="flex cursor-pointer items-center justify-center 
						rounded-full  bg-white p-2 transition 
						hover:opacity-75"
					>
						<TbFileUpload className="text-black" size={20} />
					</button>
				</div>

				<div className="flex items-center justify-between gap-x-4">
					{user ? (
						<div className="flex items-center gap-x-4">
							<Button
								// onClick={getState}
								className="bg-white px-6 py-2"
							>
								Logout
							</Button>
							<Button
								// onClick={() => router.push('/account')}
								className="bg-white"
							>
								<FaUserAlt />
							</Button>
						</div>
					) : (
						<div>
							<Button
								onClick={() => onShowModal()}
								className="bg-white px-6 py-2"
							>
								Войти
							</Button>
							{isAuthModal && (
								<AuthModal
									isOpen={isAuthModal}
									onClose={() => onCloseModal()}
								/>
							)}
						</div>
					)}
				</div>
			</div>
			{children}
		</div>
	);
});
