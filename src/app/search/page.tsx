// const reducers: ReducerList = {
// 	searchpage: searchpageReducer,
// };

import { SearchContent } from "@/components/searchpage";

const SearchPage: React.FC = () => {
	// const { t } = useTranslation();
	
	// const isLoadingPage = useSelector(getIsLoadingPage);

	return (
    <>
    	<div className="mb-2 flex flex-col gap-y-6">
				<h1 className="text-3xl font-semibold text-white">Search</h1>
			</div>
			<SearchContent isLoadingPage={true}  />
    </>
	);
};

export default SearchPage;
