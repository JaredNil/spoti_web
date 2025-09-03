'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { FC, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BringAuthModal } from './bringAuthModal'

export const BringAuth: FC = () => {
	const { status } = useSession()

	if (status === 'unauthenticated')
		return (
			<div
				className="my-6 flex items-center justify-center
				select-none rounded-xl text-xl font-light"
			>
				<Link
					href="/auth/login"
					className="bg-green-500 py-2 px-8 rounded-2xl text-lg
					cursor-pointer hover:bg-green-500/60 transition-colors"
				>
					Auth for creation playlists.
				</Link>
			</div>
		)
}
