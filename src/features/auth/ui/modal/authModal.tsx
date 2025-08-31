'use client'

import { useCallback } from 'react'

import AuthForm from './authForm'

import { userAction } from '@/entities/user'
import { getIsVisibleModal } from '@/entities/user/model/selectors/getIsVisibleModal'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import Modal from '@/shared/ui/modal/modal'

export type ModalKeys = 'auth'

export const AuthModal = ({ type = 'auth' }: { type?: ModalKeys }) => {
	const dispatch = useAppDispatch()
	const isVisibleModal = useAppSelector(getIsVisibleModal)

	const onCloseAuthModal = useCallback(() => {
		dispatch(userAction.offVisibleModal())
	}, [dispatch])

	if (isVisibleModal)
		return (
			<Modal
				className={'w-full'}
				isOpen={isVisibleModal}
				onClose={() => dispatch(userAction.offVisibleModal())}
			>
				{type === 'auth' && <AuthForm onSuccess={onCloseAuthModal} />}
			</Modal>
		)
}
