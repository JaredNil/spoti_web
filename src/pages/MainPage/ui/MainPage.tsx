import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';
import ListItem from 'shared/ui/ListItem/ListItem';
import PageContent from 'widgets/PageContent/PageContent';
import { twMerge } from 'tailwind-merge';
import { userSongs } from 'app/App';

const MainPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div
			className={twMerge(
				'FLEX',
				`
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      `
			)}
		>
			<Header>
				<div className="mb-2">
					<h1
						className="
            text-white 
              text-3xl 
              font-semibold
            "
					>
						Welcome back
					</h1>
					<div
						className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
					>
						<ListItem name="Liked Songs" image="/images/liked.png" href="liked" />
					</div>
				</div>
			</Header>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-2xl font-semibold">Newest songs</h1>
				</div>
				<PageContent songs={userSongs} />
			</div>
		</div>
	);
};

export default MainPage;
