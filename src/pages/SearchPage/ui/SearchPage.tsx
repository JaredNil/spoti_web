import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { userSongs } from 'app/App';

import { SearchContent } from 'features/Search/SearchContent';

import Page from 'shared/ui/Page/Page';

const SearchPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<Page>
			<div className="mb-2 flex flex-col gap-y-6">
				<h1 className="text-3xl font-semibold text-white">Search</h1>
			</div>
			<SearchContent songs={userSongs} />
		</Page>
	);
};

export default SearchPage;
