export {
	playerAction,
	playerSlice,
	playerReducer,
} from './model/slice/playerSlice'

export { usePlayer } from './model/hook/usePlayer'
export { Player } from './ui/player'

export type { PlayerSchema } from './model/types/playerSchema'

export { PlayerClientSlot } from './model/ui/playerClientSlot'
export {
	getIsLoading,
	getIsActivePlayer,
	getVolumePlayer,
	getIsRunPlayer,
	getIsLoadingTrack,
	getTrack,
	getPlayerLineData,
	getPlayerQueue,
	getPlayerNativeQueue,
	getPlayerTarget,
} from './model/selector/playerSelector'
