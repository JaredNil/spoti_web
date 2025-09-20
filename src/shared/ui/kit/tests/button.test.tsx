import { Slot } from '@radix-ui/react-slot'
import { render, screen } from '@testing-library/react'

import { Button, buttonVariants } from '../button'

describe('Button', () => {
	const variants = [
		'danger',
		'submit',
		'ghost',
		'link',
		'default',
		'destructive',
		'outline',
		'secondary',
	] as const

	const classes = (
		variant: Parameters<typeof buttonVariants>[0]['variant']
	) => buttonVariants({ variant }).split(' ')

	describe('Проверка реализаций кнопок по важным классам', () => {
		it('variant danger', () => {
			const { container } = render(
				<Button variant="danger">danger</Button>
			)
			const applied = classes('danger')
			applied.forEach((cls) =>
				expect(container.firstChild).toHaveClass(cls)
			)
		})

		it('variant ghost', () => {
			const { container } = render(<Button variant="ghost">ghost</Button>)
			const applied = classes('ghost')
			applied.forEach((cls) =>
				expect(container.firstChild).toHaveClass(cls)
			)
		})

		it('variant link', () => {
			const { container } = render(<Button variant="link">link</Button>)
			const applied = classes('link')
			applied.forEach((cls) =>
				expect(container.firstChild).toHaveClass(cls)
			)
		})
	})

	it('render слота кнопки', () => {
		render(
			<Button asChild>
				<a href="/">link</a>
			</Button>
		)
		const link = screen.getByRole('link')
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('data-slot', 'button')
	})

	it('className функционирует', () => {
		const { container } = render(
			<Button className="custom-class">btn</Button>
		)
		const btn = container.firstChild as HTMLElement
		expect(btn).toHaveClass('custom-class')
	})

	it('компонент имеет data-slot="button"', () => {
		render(<Button>slot</Button>)
		expect(screen.getByRole('button')).toHaveAttribute(
			'data-slot',
			'button'
		)
	})
})
