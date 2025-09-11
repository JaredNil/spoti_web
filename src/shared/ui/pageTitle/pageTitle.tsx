export const Title = ({
	title,
	classname = '',
}: {
	title: string
	classname?: string
}) => {
	return (
		<h1
			className={`text-3xl font-semibold text-white 
			select-none pointer-events-none pb-2
			${classname}`}
		>
			{title}
		</h1>
	)
}
