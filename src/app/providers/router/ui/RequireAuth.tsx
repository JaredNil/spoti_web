import { StateSchema } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
	const username = useSelector<StateSchema>((state) => state.user.username);
	let location = useLocation();

	if (false) {
		return <Navigate to={RoutePath.intro} state={{ from: location }} replace />;
	}

	return children;
}
