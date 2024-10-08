import { useUser } from 'app/providers/UserProvider';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { userAction } from 'entities/User/model/slice/userSlice';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export enum TransitEffect {
	BACK = -1,
	FORWARD = 1,
}

export function useTransit() {
	const { toggleInit } = useUser();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	function transit(path: string | TransitEffect) {
		// dispatch(userAction.onLoadingUser()); // DEMO. NOT WORKING IN DEMO
		try {
			console.log(path)
			toggleInit(false);
	
			if (path === pathname) {
				return;
			}
	
			if (path === TransitEffect.BACK) {
				navigate(-1);
			} else if (path === TransitEffect.FORWARD) {
				navigate(1);
			}
			navigate(path as string);
		} catch (_) {
			// Переписать для ErrorBoundary
			throw new Error('Transit of useNavigate path not found');
		}
	}

	return transit;
}
