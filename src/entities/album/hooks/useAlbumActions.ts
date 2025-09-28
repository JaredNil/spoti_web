'use client'
import { skipToken } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
	albumApi,
	useAddTrackMutation,
	useCreateAlbumMutation,
	useDeleteAlbumMutation,
	useFetchAlbumsByUserQuery,
	useRemoveTrackMutation,
} from '../api/albumApi'

import { RootState } from '@/app/(providers)/storeProvider/config/store'
import { useUserActions } from '@/entities/user'
import { useFetchUserQuery } from '@/entities/user/api/userApi'
import { Album, Track, TrackesHash } from '@/shared/api'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { shortHash } from '@/shared/lib/hash'
import { ze } from '@/shared/lib/log'
import {
	getPlayerNativeQueue,
	getPlayerQueue,
	playerAction,
} from '@/widgets/player'

export const useAlbumActions = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const [isUpdating, setIsUpdating] = useState(false)

	const { addUserAlbumsHash, deleteUserAlbumsHash } = useUserActions()
	const { data: session } = useSession()
	const email = session?.user?.email
	const { refetch: refetchUserData } = useFetchUserQuery(email ?? skipToken)
	const { refetch: refetchAlbums } = useFetchAlbumsByUserQuery(
		email ?? skipToken,
		{
			skip: !email,
		}
	)

	const [createAlbumMutation] = useCreateAlbumMutation()
	const [deleteAlbumMutation] = useDeleteAlbumMutation()

	const actualizeUser = async () => {
		const { data } = await refetchUserData()

		if (!data) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		return data
	}

	const createAlbum = async () => {
		setIsUpdating(true)
		const userData = await actualizeUser()
		const hash = shortHash()
		const newAlbum: Album = {
			author: session?.user?.name || 'Unknowing album',
			hash: hash,
			title: `${hash} album`,
			trackesHash: [],
			creationDate: new Date().toDateString(),
			description: 'Unknowing album description',
			imagePath: '',
		}
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		await createAlbumMutation(newAlbum).unwrap()
		await addUserAlbumsHash(hash, userData)
		toast.success('Album created')
		refetchUserData()
		refetchAlbums()
		setIsUpdating(false)
	}

	const deleteAlbum = async (hash: string) => {
		setIsUpdating(true)
		const userData = await actualizeUser()
		if (!userData) {
			ze('Данные пользователя не определены для обновления')
			return
		}
		await deleteAlbumMutation(hash).unwrap()
		await deleteUserAlbumsHash(hash, userData)
		toast.success('Album delete')
		refetchUserData()
		refetchAlbums()
		setIsUpdating(false)
		router.push('/home')
	}

	const [add, { isLoading: isUpdatingAdd }] = useAddTrackMutation()
	const [remove, { isLoading: isUpdatingDel }] = useRemoveTrackMutation()

	const addTrack = (track: Track, albumId: string) => {
		add({ albumHash: albumId, trackHash: track.hash as string })
	}

	const deleteTrack = (track: Track, albumId: string) => {
		remove({ albumHash: albumId, trackHash: track.hash as string })
	}

	const reorderTrackes = useCallback(
		async (albumHash: string, sourceIdx: number, destIdx: number) => {
			if (sourceIdx === destIdx) return

			// dispatch(
			// 	albumApi.util.updateQueryData(
			// 		'fetchAlbum',
			// 		albumHash,
			// 		(draft) => {
			// 			const [moved] = draft.trackesHash.splice(sourceIdx, 1)
			// 			draft.trackesHash.splice(destIdx, 0, moved)
			// 		}
			// 	)
			// )

			// const queueNative: TrackesHash = dispatch((_, getState) =>
			// 	getPlayerNativeQueue(getState())
			// )
			// const isCurrentAlbum =
			// 	queueNative.length > 0 &&
			// 	dispatch((_, getState) =>
			// 		albumApi.endpoints.fetchAlbum.select(albumHash)(getState())
			// 	).data?.trackesHash === queueNative

			// if (isCurrentAlbum) {
			// 	const newNativeQueue = [...queueNative]
			// 	const [moved] = newNativeQueue.splice(sourceIdx, 1)
			// 	newNativeQueue.splice(destIdx, 0, moved)

			// 	dispatch(playerAction.setNative(newNativeQueue))
			// }

			// await dispatch(
			// 	albumApi.endpoints.updateTrackOrder.initiate({
			// 		albumHash,
			// 		trackesHash: dispatch((_, getState) =>
			// 			albumApi.endpoints.fetchAlbum.select(albumHash)(
			// 				getState()
			// 			)
			// 		).data!.trackesHash,
			// 	})
			// )
		},
		[dispatch]
	)

	return {
		createAlbum,
		deleteAlbum,
		isUpdating,
		addTrack,
		deleteTrack,
		isUpdatingTrack: isUpdatingAdd || isUpdatingDel,
		// Перемещение треков в оригинальном массиве очереди
		reorderTrackes,
	}
}
