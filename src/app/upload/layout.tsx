import { ReactNode } from 'react'

import { createMeta } from '@/shared/const/metadata'
import { Title } from '@/shared/ui/pageTitle/pageTitle'

export const metadata = createMeta({ title: 'Upload' })

const UploadPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Title title="Upload page" />
			{children}
		</>
	)
}

export default UploadPageLayout
