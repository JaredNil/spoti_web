import { StateSchema } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import toastr from 'toastr';

export function RequireAuth({ children }: { children: JSX.Element }) {
	let username = useSelector<StateSchema>((state) => state.user.username);
	let location = useLocation();

	console.log('RequireAuth exe');
	// if (false) {
	// 	console.log('HERE');
	// 	return <Navigate to={RoutePath.intro} state={{ from: location }} replace />;
	// }

	return children;
}
