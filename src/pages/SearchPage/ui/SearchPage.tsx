import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';
import { twMerge } from 'tailwind-merge';
import { userSongs } from 'app/App';
import SearchContent from 'features/Search/SearchContent';

const SearchPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div
			className="
        h-full
        w-full 
        overflow-hidden 
        overflow-y-auto 
        rounded-lg 
        bg-neutral-900
     	"
		>
			<Header className="w-full overflow-y-auto  rounded-lg ">
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Search</h1>
				</div>
			</Header>
			<SearchContent songs={userSongs} />
		</div>
	);
};

export default SearchPage;
