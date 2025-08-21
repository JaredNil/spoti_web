import { twMerge } from 'tailwind-merge'

import { GeneralProviders } from './(providers)'

import AppWrapper from '@/shared/ui/appwrapper'
import Page from '@/shared/ui/page'
import { Header } from '@/widgets/header'
import { PlayerClientSlot } from '@/widgets/player'
import { Sidebar } from '@/widgets/sidebar'

import '@/shared/css/index.css'

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru">
			<body>
				<AppWrapper>
					<GeneralProviders>
						<div
							className={twMerge(
								'flex overflow-x-auto h-full pb-12'
								// isActivePlayer ? 'h-full pb-12' : 'h-full'
							)}
						>
							<Sidebar />
							<main className="relative flex h-full w-full overflow-y-auto mx-1 py-2">
								<Header />
								<Page>{children}</Page>
							</main>
						</div>
						<PlayerClientSlot />
					</GeneralProviders>
				</AppWrapper>
			</body>
		</html>
	)
}
