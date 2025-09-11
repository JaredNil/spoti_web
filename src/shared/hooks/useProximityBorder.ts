// import { useRef } from 'react'

// export const useProximityBorder = () => {
// 	const ref = useRef<HTMLDivElement>(null)
// 	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// 		if (!ref.current) return
// 		const r = ref.current.getBoundingClientRect()
// 		const x = (e.clientX - r.left) / r.width
// 		const y = (e.clientY - r.top) / r.height
// 		const d = Math.hypot(x - 0.5, y - 0.5) * 2 // 0 … ~1.4 → 0 … 1
// 		const dist = Math.min(d, 1)
// 		ref.current.style.setProperty('--x', String(x))
// 		ref.current.style.setProperty('--y', String(y))
// 		ref.current.style.setProperty('--d', String(dist))
// 	}
// 	const onMouseLeave = () => {
// 		if (!ref.current) return
// 		ref.current.style.setProperty('--d', '1') // убрать эффект
// 	}
// 	return { ref, onMouseMove, onMouseLeave }
// }
