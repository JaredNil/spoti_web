import { useNavigate } from 'react-router-dom';

const SearchPage: React.FC = () => {
	const navigate = useNavigate();
	console.log('search');
	return (
		<div className="mb-2 flex flex-col gap-y-6">
			<h1 className="text-3xl font-semibold text-white">Search</h1>
			<div onClick={() => navigate('/')}>link</div>
		</div>
	);
};

export default SearchPage;
