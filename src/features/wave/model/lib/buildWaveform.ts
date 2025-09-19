import { extractPeaks } from './extractPeaks'

const cache: Record<string, number[]> = {}

export const buildWaveform = async (src: string, bars = 180) => {
	if (cache[src]) return cache[src]
	const peaks = await extractPeaks(src, bars)
	cache[src] = peaks
	return peaks
}
