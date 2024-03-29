import { ReactNode, memo, useCallback, useEffect, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import Portal from 'shared/ui/old/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	className?: string;
	children?: ReactNode;
}

const Modal: React.FC<ModalProps> = memo((props: ModalProps) => {
	const { isOpen, onClose, className, children } = props;

	const { theme } = useTheme();

	const closeHandler = useCallback(() => {
		if (onClose) onClose();
	}, [onClose]);

	const onContentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' && onClose) onClose();
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onClose, onKeyDown]);

	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAnimate(true);
		}, 20);
	}, []);

	return (
		<Portal>
			<div
				className={twMerge(
					`pointer-events-none fixed inset-0 z-50 
					w-full opacity-30 transition duration-150`,
					isOpen && ' pointer-events-auto z-50',
					animate && 'opacity-100',
					[className, theme]
				)}
			>
				<div
					className={twMerge(
						`flex h-full w-full items-center justify-center
						bg-neutral-900/0 transition duration-100`,
						animate && 'bg-neutral-900/70'
					)}
					onClick={closeHandler}
				>
					<div
						className={twMerge(
							`scale-50 
							rounded-xl bg-modalBg px-5 pb-5 pt-2 transition duration-300`,
							'w-[90%] max-w-[540px] sm:w-[60%]',
							animate && 'scale-100'
						)}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
});

export default Modal;
