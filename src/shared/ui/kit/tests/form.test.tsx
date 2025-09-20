import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useForm } from 'react-hook-form'

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	useFormField,
} from '../form'

const TestForm = ({
	onSubmit = jest.fn(),
}: {
	onSubmit?: (data: any) => void
}) => {
	const methods = useForm<{ name: string }>({ defaultValues: { name: '' } })
	return (
		<Form {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<input {...field} data-testid="input" />
							</FormControl>
							<FormDescription>Your full name</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<button type="submit">submit</button>
			</form>
		</Form>
	)
}

describe('Form components', () => {
	it('FormItem наличие и работоспособность', () => {
		render(<FormItem className="custom">item</FormItem>)
		const div = screen.getByText('item')
		expect(div).toHaveAttribute('data-slot', 'form-item')
		expect(div).toHaveClass('grid')
	})

	it('FormDescription наличие и работоспособность', () => {
		render(<TestForm />)
		expect(screen.getByText('Your full name')).toBeInTheDocument()
	})

	it('FormMessage не работоспособность при отсутствии ошибок', () => {
		render(<TestForm />)
		expect(
			screen.queryByRole('paragraph', { name: /error/i })
		).not.toBeInTheDocument()
	})

	it('snapshot полной формы', () => {
		const { container } = render(<TestForm />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
