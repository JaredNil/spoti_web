export const extractPeaks = async (
	url: string,
	length = 180
): Promise<number[]> => {
	const res = await fetch(url)

	const buf = await res.arrayBuffer()
	console.log('buf', buf)
	const audioCtx = new (window.AudioContext ||
		(window as any).webkitAudioContext)()
	const audioBuffer = await audioCtx.decodeAudioData(buf.slice(0))
	const channel = audioBuffer.getChannelData(0)
	const step = Math.floor(channel.length / length)
	const peaks: number[] = []
	for (let i = 0; i < length; i++) {
		let max = 0
		for (let j = 0; j < step; j++) {
			const v = Math.abs(channel[i * step + j])
			if (v > max) max = v
		}
		peaks.push(max)
	}
	await audioCtx.close()
	return peaks
}
