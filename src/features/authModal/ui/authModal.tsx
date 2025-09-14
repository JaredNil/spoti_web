'use client'

import { useCallback } from 'react'

import AuthForm from './authForm'

import { getIsVisibleModal } from '@/entities/meta'
import { metaAction } from '@/entities/meta'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import Modal from '@/shared/ui/modal/modal'

export type ModalKeys = 'auth'

export const AuthModal = ({ type = 'auth' }: { type?: ModalKeys }) => {
	const dispatch = useAppDispatch()
	const isVisibleModal = useAppSelector(getIsVisibleModal)

	const onCloseAuthModal = useCallback(() => {
		dispatch(metaAction.offVisibleModal())
	}, [dispatch])

	if (isVisibleModal)
		return (
			<Modal
				className={'w-full'}
				isOpen={isVisibleModal}
				onClose={() => dispatch(metaAction.offVisibleModal())}
			>
				{type === 'auth' && <AuthForm onSuccess={onCloseAuthModal} />}
			</Modal>
		)
}
