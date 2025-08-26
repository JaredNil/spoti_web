interface LibraryCreationProps {
	onShowModal?: () => void
}

export const LibraryCreation: React.FC<LibraryCreationProps> = ({
	onShowModal,
}: LibraryCreationProps) => {
	return (
		<div
			className="flex hover:bg-neutral-400/10 transition-all"
			onClick={onShowModal}
		>
			<div
				className="flex justify-center items-center
			aspect-square h-[34px] bg-gray-400"
			>
				<div
					className="text-white text-3xl 
				ml-[1px] mb-[6px] pointer-events-none select-none"
				>
					+
				</div>
			</div>
			<div className="flex justify-start items-center pl-2 w-full overflow-hidden">
				<div
					className="select-none text-neutral-300 text-ellipsis text-sm
				whitespace-nowrap tracking-wide w-full overflow-hidden"
				>
					Создать плейлист
				</div>
			</div>
		</div>
	)
}
