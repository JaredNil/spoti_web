import { Modal } from 'shared/ui/Modal';
import { Suspense, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';

interface AuthModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = memo((props: AuthModalProps) => {
	const { className, isOpen, onClose } = props;

	return (
		<Modal className={twMerge('w-full', className)} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback="">
				<AuthFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
});
