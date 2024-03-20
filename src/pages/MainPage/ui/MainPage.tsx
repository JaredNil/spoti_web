import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
	const navigate = useNavigate();
	console.log('main');

	return (
		<div className="mb-2">
			<h1 className="relative text-3xl font-semibold text-white">Welcome back</h1>
			<div onClick={() => navigate('/search')}>link</div>
		</div>
	);
};

export default MainPage;
