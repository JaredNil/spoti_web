import { permanentRedirect } from 'next/navigation'

import { useErrorRedirect } from '@/shared/hooks/useErrorRedirect'

const errorText = {
	404: {
		title: 'Album data not found',
		info: 'Вас перебросит на главную страницу через 2 секунды...',
	},
	429: {
		title: 'Album data not available',
		info: 'Исчерпан лимит запросов на хранилище данных. Попробуйте зайти завтра. Вас перебросит на главную страницу через 2 секунды...',
	},
	400: {
		title: 'Album data unexpected error',
		info: 'Вас перебросит на главную страницу через 2 секунды...',
	},
}

export const CoverError = ({
	code = 400,
	delayRedirect,
}: {
	code: keyof typeof errorText
	delayRedirect?: number
}) => {
	const { onRedirect } = useErrorRedirect()
	onRedirect(delayRedirect)
	return (
		<div
			className="flex flex-col items-center justify-around
			max-w-[700px] h-[40vh] relative"
		>
			<h2
				className="text-2xl font-bold select-none 
				sm:text-5xl sm:flex sm:items-center"
			>
				{errorText[code].title}
			</h2>
			<h3 className=" text-sm sm:text-xl w-full  select-none ">
				{errorText[code].info}
			</h3>
			<button
				className="bg-[#1DB954] text-white px-6 py-3  rounded-full 
				pointer-events-auto cursor-pointer"
				onClick={() => permanentRedirect('/home')}
			>
				<span className="tracking-tighter">back to /home</span>
			</button>
		</div>
	)
}
