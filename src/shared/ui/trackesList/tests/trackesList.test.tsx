import { render, screen } from '@testing-library/react'

import { TrackesList } from '../trackesList'
import { TrackesListItem } from '../ui/trackesListItem'

import type { Track, Trackes, TrackesId } from '@/shared/api'

describe('TrackesList предача списка треков. ', () => {
	it('показывает текст «В плейлисте отсутствуют треки» при пустом массиве', () => {
		render(
			<TrackesList
				trackes={[]}
				isLoadingTrackes={false}
				isCompact={false}
			/>
		)
		expect(
			screen.getByText(/В плейлисте отсутствуют треки/i)
		).toBeInTheDocument()
	})

	it('показывает тот же текст при undefined', () => {
		render(<TrackesList isLoadingTrackes={false} isCompact={false} />)
		expect(
			screen.getByText(/В плейлисте отсутствуют треки/i)
		).toBeInTheDocument()
	})
})
