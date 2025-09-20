import { render, screen } from '@testing-library/react'

import AppWrapper from '.'

describe('AppWrapper', () => {
	it('рендерит children', () => {
		render(
			<AppWrapper>
				<span data-testid="child">Hello</span>
			</AppWrapper>
		)
		expect(screen.getByTestId('child')).toBeInTheDocument()
	})

	it('имеет самые важные классы', () => {
		const { container } = render(<AppWrapper>test</AppWrapper>)
		const div = container.firstChild as HTMLElement

		expect(div).toHaveClass(
			'fixed',
			'top-0',
			'left-0',
			'right-0',
			'bottom-0'
		)
		expect(div).toHaveClass('w-dvw', 'h-vh')
		expect(div).toHaveClass('flex', 'flex-col')
		expect(div).toHaveClass('bg-black', 'scheme-dark', 'text-white')
		expect(div).toHaveClass('font-main')
	})

	it('snapshot', () => {
		const { container } = render(<AppWrapper>snap</AppWrapper>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
