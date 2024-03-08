import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';
import ListItem from 'shared/ui/ListItem/ListItem';
import PageContent from 'widgets/PageContent/PageContent';
import { twMerge } from 'tailwind-merge';
import { userSongs } from 'app/App';

const UploadPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div
			className={twMerge(
				'FLEX',
				`     h-full        w-full         overflow-hidden         																	overflow-y-auto         rounded-lg         bg-neutral-900
      `
			)}
		>
			<Header>
				<div className="mb-2">
					<h1
						className="
            text-3xl 
              font-semibold 
              text-white
            "
					>
						Welcome back
					</h1>
					<div
						className="
              mt-4 
              grid 
              grid-cols-1 
              gap-3 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4
            "
					>
						<ListItem name="Liked Songs" image="/images/liked.png" href="liked" />
					</div>
				</div>
			</Header>
			<div className="mb-7 mt-2 px-6">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-semibold text-white">Newest songs</h1>
				</div>
				<PageContent songs={userSongs} />
			</div>
		</div>
	);
};

export default UploadPage;
