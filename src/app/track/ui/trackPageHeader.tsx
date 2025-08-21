export default function TrackPageHeader({ title }: { title: string }) {
	return (
		<h1 className="relative text-3xl font-semibold text-white select-none pb-2">
			{title}
		</h1>
	)
}
