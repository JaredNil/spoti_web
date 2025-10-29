import { Copy, ExternalLink } from 'lucide-react'

interface ContactButtonProps {
	icon: React.ReactNode
	label: string
	value: string
	onClick: () => void
	transit?: boolean
}

export function Contacts({
	icon,
	label,
	value,
	onClick,
	transit = false,
}: ContactButtonProps) {
	return (
		<div className="flex flex-col items-start p-2">
			<div className="flex justify-start items-center gap-1 mb-1">
				{icon}
				<span className="text-sm font-medium">{label}</span>
			</div>
			<div
				onClick={onClick}
				title="Клик для копирования"
				className="flex items-center px-2 py-1 gap-2
				cursor-pointer
				bg-white/10 backdrop-blur-sm 
				border border-white/20 rounded-md
				hover:bg-white/40 transition-colors"
			>
				<div className="text-xs text-nowrap">{value}</div>
				{transit ? (
					<ExternalLink className="w-3 h-3" />
				) : (
					<Copy className="w-3 h-3" />
				)}
			</div>
		</div>
	)
}
