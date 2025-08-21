'use client'

import { useAppSelector } from '@/shared/hooks'
import { getIsActivePlayer, Player } from '@/widgets/player'

export function PlayerClientSlot() {
	const isActivePlayer = useAppSelector(getIsActivePlayer)

	return <>{isActivePlayer && <Player />}</>
}
