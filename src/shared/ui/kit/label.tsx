'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/shared/lib/css'

const labelVariants = cva(
	'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
	{
		variants: {
			variant: {
				default: '',
				left: 'text-base mb-1 select-none',
			},
			size: {
				default: '',
				sm: '',
				lg: '',
				icon: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

function Label({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<'label'> &
	VariantProps<typeof labelVariants> & {
		asChild?: boolean
	}) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(labelVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Label }
