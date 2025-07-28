// import { useEffect, useState } from 'react';

// // Testing error boundary
// const BugButton: React.FC = () => {
// 	const [error, setError] = useState(false);

// 	const bugHandler = (): void => {
// 		setError(true);
// 	};

// 	useEffect(() => {
// 		if (error) throw new Error();
// 	}, [error]);

// 	return <Button onClick={bugHandler}>Bug testing</Button>;
// };

// export default BugButton;
