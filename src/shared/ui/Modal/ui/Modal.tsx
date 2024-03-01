import { ReactNode, useCallback, useEffect } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import Portal from 'shared/ui/old/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	className?: string;
	children?: ReactNode;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	const { isOpen, onClose, className, children } = props;

	const mods: Mods = {
		[cls.opened]: isOpen,
	};

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

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
