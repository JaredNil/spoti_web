export const formatDuration = (sec: number) => {
	const h = Math.floor(sec / 3600)
	const m = Math.floor((sec % 3600) / 60)
	const s = Math.floor(sec % 60)
	const pad = (n: number) => n.toString().padStart(2, '0')
	return h ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
}
