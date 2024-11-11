import { useTranslation } from 'react-i18next';


import { SearchContent } from 'features/Search/SearchContent';

import Page from 'shared/ui/Page/Page';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { searchpageReducer } from '../model/slice/SearchpageSlice';
import { useSelector } from 'react-redux';
import { getIsLoadingPage } from '../model/selector/SearchpageSelector';

const reducers: ReducerList = {
	searchpage: searchpageReducer,
};

const SearchPage: React.FC = () => {
	const { t } = useTranslation();
	
	const isLoadingPage = useSelector(getIsLoadingPage);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page>
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Search</h1>
				</div>
				<SearchContent isLoadingPage={isLoadingPage}  />
			</Page>
		</DynamicModuleLoader>
	);
};

export default SearchPage;
