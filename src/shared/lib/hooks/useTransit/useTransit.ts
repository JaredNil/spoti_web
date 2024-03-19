import { useUser } from 'app/providers/UserProvider';
import { To, useNavigate } from 'react-router-dom';
import { userAction } from 'entities/User';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';

export function useTransit() {
	const { toggleInit } = useUser();
	const navigate = useNavigate();
	const dippacth = useAppDispatch();

	console.log('useTransit');
	console.log('РАЗОБРАТЬСЯ С ТИПАМИ ДЛЯ ТРАНЗИТА');

	function transit(path: string) {
		dippacth(userAction.onLoadingUser());
		toggleInit(false);
		navigate(path);
		console.log('transit work');
	}

	return transit;
}

// export const useHover = (): UseHoverResult => {
// 	const [isHover, setIsHover] = useState(false);

// 	const onMouseEnter = useCallback(() => {
// 		setIsHover(true);
// 	}, []);
// 	const onMouseLeave = useCallback(() => {
// 		setIsHover(false);
// 	}, []);

// 	return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
// };
