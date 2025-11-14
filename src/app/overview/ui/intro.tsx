import Link from 'next/link'

import Three from '@/widgets/three/three'

export function IntroOverview() {
	return (
		<article className="flex flex-col sm:flex-row items-center ">
			<div className="relative  max-w-[800px]">
				<h2 className="relative  text-3xl text-green-500 my-5">
					<span className="font-bold">Jarefy</span> - современное
					музыкальное web-приложение
				</h2>

				<div className="relative my-5 text-balance">
					построенное на базе Next.js 15 и React 19, которое
					предоставляет пользователям возможность прослушивания
					музыки, управления плейлистами и поиска треков. Приложение
					имеет интуитивно понятный интерфейс в стиле Spotify с темной
					темой и адаптивным дизайном.
				</div>
				<Link
					href={'https://spoti-web.vercel.app/'}
					className="relative font-bold text-xl text-green-500 "
				>
					Ссылка на деплой.
				</Link>
			</div>
			<div className="relative flex-1">
				<Three />
			</div>
		</article>
	)
}
