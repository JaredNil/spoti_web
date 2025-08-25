'use client'
import { useState } from 'react'

// import { Trackes } from '@/entities/track';
import { Input } from '@/shared/ui/kit/input'

interface SearchContentProps {
	isLoadingPage: boolean
}

export const SearchContent: React.FC = () => {
	const [trackes, setTrackes] = useState<[]>([])

	if (trackes.length === 0) {
		return (
			<div
				className="
          flex 
          w-full
          flex-col 
          gap-y-2 
          text-neutral-400
        "
			>
				No songs found.
			</div>
		)
	}

	return <div className="flez"></div>
}
