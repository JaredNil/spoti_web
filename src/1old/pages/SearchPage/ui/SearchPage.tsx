// const reducers: ReducerList = {
// 	searchpage: searchpageReducer,
// };

const SearchPage: React.FC = () => {
	// const onChange = (val: string) => {
	// 	setValue(val);
	// };

	return (
		// <DynamicModuleLoader reducers={reducers}>
		// {/* <Page> */}
		<>
			<div className="mb-2 flex flex-col gap-y-6">
				<h1 className="text-3xl font-semibold text-white">Search</h1>
			</div>
			{/* <SearchContent isLoadingPage songs={userSongs} /> */}
		</>
		// {/* </Page> */}
		// {/* </DynamicModuleLoader> */}
	);
};

export default SearchPage;
