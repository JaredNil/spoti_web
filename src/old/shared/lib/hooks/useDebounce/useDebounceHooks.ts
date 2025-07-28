import { useEffect, useState } from 'react';

export const useDebounceMouseMove = (value: void, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const t = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(t);
		};
	}, [value, delay]);
	return debouncedValue;
};

export function debounceResize(func: () => void) {
	let timer: number;
	return function (event: Event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func, 2000, event);
	};
}
