'use client'

import { ReactNode, Suspense, useCallback, useState } from 'react'

import AuthForm from '@/features/auth/ui/authForm'
import Modal from '@/shared/ui/modal/modal'

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onShowAuthModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onCloseAuthModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	return (
		<>
			{children}
			{/* <Modal
				className={'w-full'}
				isOpen={isAuthModal}
				onClose={onCloseAuthModal}
			>
				<Suspense fallback="">
					<AuthForm onSuccess={onCloseAuthModal} />
				</Suspense>
			</Modal> */}
		</>
	)
}

export default ModalProvider
