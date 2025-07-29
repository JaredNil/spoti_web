export const WidgetLoader: React.FC = () => {
	return (
		<div
			className={
			`flex h-full w-full 
			items-center justify-center  
			transition-all`}
		>
			<div className="lds-ring">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
