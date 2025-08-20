'use client'

// import { AuthModal } from 'features/Auth';
import { FC, useCallback } from 'react'

import { Button } from '@/shared/ui/kit/button'

interface BringAuthModalProps {
    isLoadingData: boolean
}

export const BringAuthModal: FC<BringAuthModalProps> = ({
    isLoadingData,
}: BringAuthModalProps) => {
    // const [isAuthModal, setIsAuthModal] = useState(false);

    const onShowAuthModal = useCallback(() => {
        // setIsAuthModal(true);
    }, [])

    const onCloseAuthModal = useCallback(() => {
        // setIsAuthModal(false);
    }, [])

    return (
        <>
            <Button
                onClick={() => onShowAuthModal}
                className="text-xl font-light tracking-wide text-white"
                disabled={isLoadingData}
            >
                Вход / Регистрация
            </Button>
            {/* {isAuthModal && <AuthModal isOpen={isAuthModal} onClose={() => onCloseAuthModal()} />} */}
        </>
    )
}
