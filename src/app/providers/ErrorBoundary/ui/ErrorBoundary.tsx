import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info);
	}

	render() {
		const { hasError }: ErrorBoundaryState = this.state;
		const { children }: ErrorBoundaryProps = this.props;

		if (hasError) {
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
