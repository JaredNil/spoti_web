export { playerReducer } from './model/slice/playerSlice'

export { getVolumePlayer } from './model/selector/playerSelector'

export { playerAction } from './model/slice/playerSlice'

export {
	getIsActivePlayer,
	getIsLoading,
} from './model/selector/playerSelector'
export { usePlayer } from './model/hook/usePlayer'
export { Player } from './ui/player'

export type { PlayerSchema } from './model/types/playerSchema'

export { PlayerClientSlot } from './model/ui/playerClientSlot'
