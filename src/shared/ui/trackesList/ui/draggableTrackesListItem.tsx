'use client'
import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
	isDragged: boolean
	style: React.CSSProperties
}

export const DraggableTrackesListItem: FC<Props> = ({
	children,
	isDragged,
	style,
}) => (
	<div
		className="relative select-none"
		style={{
			...style,
			zIndex: isDragged ? 999 : undefined,
			transition: isDragged ? undefined : 'transform 200ms ease',
		}}
	>
		{children}
	</div>
)
