import { Shield, User } from 'lucide-react'

export const Tabs = ({
	activeTab,
	setActiveTab,
}: {
	activeTab: string
	setActiveTab: (tab: string) => void
}) => {
	return (
		<div className="flex items-center justify-around pt-6">
			<nav className="flex justify-around w-1/2">
				<div
					onClick={() => setActiveTab('profile')}
					className={`py-4 px-2 grow rounded-t-lg
						font-medium transition-colors
						flex items-center justify-center tracking-wide
						text-white ${activeTab === 'profile' && 'bg-neutral-400/15'}`}
				>
					<User className="inline-block w-4 h-4 mr-2" />
					<span className="select-none">Профиль</span>
				</div>
				<div
					onClick={() => setActiveTab('auth')}
					className={`py-4 px-2 grow rounded-t-lg
						font-medium transition-colors
						flex items-center justify-center tracking-wide
						text-white ${activeTab === 'auth' && 'bg-neutral-400/15'}`}
				>
					<Shield className="inline-block w-4 h-4 mr-2" />
					Безопасность
				</div>
			</nav>
			<h2 className="text-white text-xl select-none">
				tabs account setting
			</h2>
		</div>
	)
}
