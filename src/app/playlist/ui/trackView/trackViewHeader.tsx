import { ReactNode } from 'react'

import { DropdownTitle } from '../dropdownTitle'

export const TrackViewHeader = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex items-center">
			<div className="h-full aspect-square">{children}</div>
			<DropdownTitle />
		</div>
	)
}
