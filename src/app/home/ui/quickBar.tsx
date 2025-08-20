import Image from 'next/image'
import { FC } from 'react'

import { AlbumFlat, AlbumSceletonFlat } from '@/entities/album'

const quickBarList = [
    {
        name: 'Liked trackes',
        image: (
            <Image
                src="/homepage/liked-songs-640.png"
                height={64}
                width={64}
                alt="Liked trackes"
            />
        ),
        href: 'liked',
    },
    {
        name: 'Loaded trackes',
        image: (
            <Image
                src="/homepage/1235.png"
                height={64}
                width={64}
                alt="Loaded trackes"
            />
        ),
        href: '',
    },
]

export const QuickBar: FC = () => {
    return (
        <div
            className="mt-4 grid grid-cols-1 gap-3  
			sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
            {quickBarList.map((bar, index) => (
                <AlbumFlat
                    key={index}
                    name={bar.name}
                    image={bar.image}
                    href={bar.href}
                />
            ))}
        </div>
    )
}
