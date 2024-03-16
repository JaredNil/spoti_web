// import { getUserAuthData } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
	const username = useSelector<StateSchema>((state) => state.user.username);
	console.log(username);
	let location = useLocation();

	if (!username) {
		return <Navigate to={RoutePath.intro} state={{ from: location }} replace />;
	}

	return children;
}
