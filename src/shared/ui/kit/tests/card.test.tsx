import { render, screen } from '@testing-library/react'

import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
} from '../card'

const getClasses = (el: HTMLElement) => el.className.split(' ')

describe('Card components', () => {
	it('Card работоспособный', () => {
		render(<Card>body</Card>)
		const card = screen.getByText('body')
		expect(card).toHaveAttribute('data-slot', 'card')
		expect(card).toHaveClass(
			'bg-card',
			'text-card-foreground',
			'flex',
			'flex-col'
		)
	})

	it('Card className работоспособный', () => {
		render(<Card className="custom-card">body</Card>)
		expect(screen.getByText('body')).toHaveClass('custom-card')
	})

	it('CardHeader работоспособный', () => {
		render(<CardHeader>header</CardHeader>)
		const h = screen.getByText('header')
		expect(h).toHaveAttribute('data-slot', 'card-header')
		expect(h).toHaveClass(
			'grid',
			'has-data-[slot=card-action]:grid-cols-[1fr_auto]'
		)
	})

	it('CardTitle работоспособный', () => {
		render(<CardTitle>title</CardTitle>)
		const t = screen.getByText('title')
		expect(t).toHaveAttribute('data-slot', 'card-title')
		expect(t).toHaveClass('leading-none', 'font-semibold')
	})

	it('CardDescription работоспособный', () => {
		render(<CardDescription>desc</CardDescription>)
		const d = screen.getByText('desc')
		expect(d).toHaveAttribute('data-slot', 'card-description')
		expect(d).toHaveClass('text-muted-foreground', 'text-sm')
	})

	it('CardAction работоспособный', () => {
		render(<CardAction>action</CardAction>)
		const a = screen.getByText('action')
		expect(a).toHaveAttribute('data-slot', 'card-action')
	})

	it('CardContent работоспособный', () => {
		render(<CardContent>content</CardContent>)
		const c = screen.getByText('content')
		expect(c).toHaveAttribute('data-slot', 'card-content')
	})

	it('CardFooter работоспособный', () => {
		render(<CardFooter>footer</CardFooter>)
		const f = screen.getByText('footer')
		expect(f).toHaveAttribute('data-slot', 'card-footer')
		expect(f).toHaveClass('flex', 'items-center', 'px-6')
	})

	it('Карточка работоспособна', () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Заголовок</CardTitle>
					<CardDescription>Описание</CardDescription>
					<CardAction>
						<button>✕</button>
					</CardAction>
				</CardHeader>
				<CardContent>Контент</CardContent>
				<CardFooter>Футер</CardFooter>
			</Card>
		)

		expect(screen.getByText('Заголовок')).toBeInTheDocument()
		expect(screen.getByText('Описание')).toBeInTheDocument()
		expect(screen.getByText('Контент')).toBeInTheDocument()
		expect(screen.getByText('Футер')).toBeInTheDocument()
		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
