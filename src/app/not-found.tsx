'use client'
import { permanentRedirect } from 'next/navigation'
export default function NotFoundApplication() {
	setTimeout(() => {
		permanentRedirect('/home')
	}, 5000)
	return (
		<div className="flex flex-col items-center justify-center h-full text-2xl select-none">
			<div className="flex items-center justify-center ">
				<span className="font-extrabold mr-6 text-3xl">ERROR</span>
				<div className="tracking-tighter">Page not found</div>
			</div>
			<div>
				<button
					className="bg-[#1DB954] text-white px-6 py-3 rounded-full mt-6
					pointer-events-auto cursor-pointer
					"
					onClick={() => permanentRedirect('/home')}
				>
					<span className="tracking-tighter">back to /home</span>
				</button>
			</div>
		</div>
	)
}
