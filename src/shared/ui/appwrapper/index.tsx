import localFont from 'next/font/local'

const SegoeUI = localFont({ src: '../../font/SegoeSemibold.woff2' })

export default function AppWrapper({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0 w-dvw h-vh
            flex flex-col
            bg-black scheme-dark text-white
            font-main font-bold ${SegoeUI.className}`}
		>
			{children}
		</div>
	)
}
