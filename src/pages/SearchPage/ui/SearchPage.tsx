import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { userSongs } from 'app/App';

import { SearchContent } from 'features/Search/SearchContent';

import Page from 'shared/ui/Page/Page';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { searchpageReducer } from '../model/slice/searchpageSlice';

const reducers: ReducerList = {
	searchpage: searchpageReducer,
};

const SearchPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	useEffect(() => {
		console.log('SEARCHPAGE RENDER');
	}, []);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page>
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Search</h1>
				</div>
				<SearchContent isLoadingPage songs={userSongs} />
			</Page>
		</DynamicModuleLoader>
	);
};

export default SearchPage;
