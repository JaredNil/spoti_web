import { Modal } from 'shared/ui/Modal';
import { Suspense, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TrackWindowAsync } from './TrackView/TrackWindow.async';

interface TrackModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const TrackModal: React.FC<TrackModalProps> = memo((props: TrackModalProps) => {
	const { className, isOpen, onClose } = props;

	return (
		<Modal className={twMerge('w-full', className)} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback="">
				<TrackWindowAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
});
