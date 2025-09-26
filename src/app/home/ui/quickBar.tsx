'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { FC } from 'react'

import { AlbumFlat } from '@/entities/album'
import { useFetchUserQuery } from '@/entities/user/api/userApi'

export const QuickBar: FC = () => {
	const { data } = useSession()
	const email = data?.user?.email
	const { data: userData, isLoading: isLoading } = useFetchUserQuery(
		email ?? skipToken
	)
	return (
		<div
			className="mt-4 grid grid-cols-1 gap-3  
			sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
			select-none"
		>
			<AlbumFlat
				key={0}
				name={'Liked trackes'}
				image={
					<Image
						src="/homepage/liked-songs-640.png"
						height={64}
						width={64}
						alt="Liked trackes"
					/>
				}
				href={'/playlist/liked'}
				isLoading={isLoading}
				trackesHash={userData?.likedHash}
			/>
			<AlbumFlat
				key={1}
				name={'Loaded trackes'}
				image={
					<Image
						src="/homepage/1235.png"
						height={64}
						width={64}
						alt="Loaded trackes"
					/>
				}
				href={'/playlist/load'}
				isLoading={isLoading}
				trackesHash={userData?.trackesHash}
			/>
		</div>
	)
}
