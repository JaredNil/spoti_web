import { useUser } from 'app/providers/UserProvider';
import { To, useNavigate } from 'react-router-dom';

export function useTransit() {
	const { toggleInit } = useUser();
	const navigate = useNavigate();

	console.log('useTransit');
	console.log('РАЗОБРАТЬСЯ С ТИПАМИ ДЛЯ ТРАНЗИТА');

	function transit(path: string) {
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
