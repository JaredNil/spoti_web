import { useCallback, useRef } from 'react'

type Callback<T extends unknown[]> = (...args: T) => void

export function useDebounce<T extends unknown[]>(
	fn: Callback<T>,
	delay: number
): Callback<T> & { cancel: () => void } {
	const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

	const debounced = useCallback(
		(...args: T) => {
			if (timeout.current) clearTimeout(timeout.current)
			timeout.current = setTimeout(() => {
				timeout.current = null
				fn(...args)
			}, delay)
		},
		[fn, delay]
	) as Callback<T> & { cancel: () => void }

	debounced.cancel = () => {
		if (timeout.current) {
			clearTimeout(timeout.current)
			timeout.current = null
		}
	}

	return debounced
}
