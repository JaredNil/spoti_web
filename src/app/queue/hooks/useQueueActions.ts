import { useCallback } from 'react'

import { Track, TrackesHash } from '@/shared/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { getPlayerTarget, playerAction } from '@/widgets/player'

export const useQueueActions = () => {
	const dispatch = useAppDispatch()
	const currentTarget = useAppSelector(getPlayerTarget)

	const updateQueueOrder = useCallback(
		(
			newOrder: number[],
			tracks: Track[],
			draggedIndex: number,
			targetIndex: number
		) => {
			if (!tracks) return

			// Создаем новый порядок треков на основе перестановки
			const newTrackesHash: TrackesHash = newOrder.map(
				(index) => tracks[index].hash
			)

			// Обновляем только queue в store
			dispatch(playerAction.updateQueueOrder(newTrackesHash))

			// Обновляем позицию текущего трека если необходимо
			if (currentTarget !== undefined) {
				// Если перетаскиваемый трек заменяет текущий трек
				if (targetIndex === currentTarget) {
					// Перетаскиваемый трек становится текущим
					dispatch(playerAction.setTarget(targetIndex))
				} else {
					// Находим новую позицию текущего трека после перестановки
					const oldTargetIndex = currentTarget
					const newTargetIndex = newOrder.indexOf(oldTargetIndex)

					if (
						newTargetIndex !== -1 &&
						newTargetIndex !== currentTarget
					) {
						dispatch(playerAction.setTarget(newTargetIndex))
					}
				}
			}
		},
		[dispatch, currentTarget]
	)

	return {
		updateQueueOrder,
	}
}
