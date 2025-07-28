import { useLocation, useNavigate } from 'react-router-dom';

export enum TransitEffect {
	BACK = -1,
	FORWARD = 1,
}

export function useTransit() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function transit(path: string | TransitEffect) {
		// dispatch(userAction.onLoadingUser()); // DEMO. NOT WORKING IN DEMO
		try {
			console.log(path)
	
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
