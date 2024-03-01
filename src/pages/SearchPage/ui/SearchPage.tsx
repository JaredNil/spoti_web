import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from 'widgets/Header';
import ListItem from 'shared/ui/ListItem/ListItem';
import PageContent from 'widgets/PageContent/PageContent';
import { twMerge } from 'tailwind-merge';
import { userSongs } from 'app/App';
import SearchInput from 'features/Search/SearchInput';
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
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
		>
			<Header className="from-bg-neutral-900">
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-white text-3xl font-semibold">Search</h1>
					<SearchInput />
				</div>
			</Header>
			<SearchContent songs={userSongs} />
		</div>
	);
};

export default SearchPage;
