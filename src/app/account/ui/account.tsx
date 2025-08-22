'use client'

import { useState } from 'react'

import { AuthTabs } from './authTabs'
import { ProfileTabs } from './profileTabs'
import { Tabs } from './tabs'

const Account: React.FC = () => {
	const [activeTab, setActiveTab] = useState('profile')

	return (
		<div className="w-full">
			<div className="bg-neutral-400/5 rounded-md shadow-lg pb-5">
				<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<div className="bg-neutral-400/15 mx-5 pb-3 px-3 rounded-b-xl">
					{activeTab === 'profile' && <ProfileTabs />}
					{activeTab === 'auth' && <AuthTabs />}
				</div>
			</div>
		</div>
	)
}

export default Account
