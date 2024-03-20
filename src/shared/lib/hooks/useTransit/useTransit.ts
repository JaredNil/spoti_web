import { useUser } from 'app/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { userAction } from 'entities/User';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export enum TransitEffect {
	BACK = -1,
	FORWARD = 1,
}

export function useTransit() {
	const { toggleInit } = useUser();
	const navigate = useNavigate();
	const dippacth = useAppDispatch();

	function transit(path: string | TransitEffect) {
		dippacth(userAction.onLoadingUser());
		toggleInit(false);

		if (typeof path === 'string') {
			navigate(path);
		} else if (path === TransitEffect.BACK) {
			navigate(-1);
		} else if (path === TransitEffect.FORWARD) {
			navigate(1);
		}
		throw new Error('Transit of useNavigate path not found');
	}

	return transit;
}
