import { PLAYER_VOLUME_WIDTH } from '../../ui/player'

export const pxToVolume = (px: number) => {
	const raw = Math.round(px / (PLAYER_VOLUME_WIDTH / 100))
	return Math.max(0, Math.min(100, raw))
}
