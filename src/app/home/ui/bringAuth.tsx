import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { BringAuthModal } from './bringAuthModal'

interface BringAuthProps {
    isLoadingData: boolean
}

export const BringAuth: FC<BringAuthProps> = ({
    isLoadingData,
}: BringAuthProps) => {
    return (
        <>
            <span
                className={twMerge(
                    `mt-5 inline-block
					h-full select-none rounded-lg 
					pr-4 text-2xl `,
                    isLoadingData &&
                        'sceletonHeader text-transparent transition-all duration-500'
                )}
            >
                <span className={twMerge(isLoadingData && 'text-transparent')}>
                    Пользовательские плейлисты
                </span>
            </span>

            <span
                className={twMerge(
                    `mb-4 mt-4 
					flex h-full select-none 
                    justify-center rounded-lg pr-4 text-xl font-light`,
                    isLoadingData &&
                        ' sceletonHeader text-transparent transition-all duration-500'
                )}
            >
                <span className={twMerge(isLoadingData && 'text-transparent')}>
                    Войдите для создания плейлистов.
                </span>
            </span>

            <BringAuthModal isLoadingData={isLoadingData} />
        </>
    )
}
