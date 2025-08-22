import * as z from 'zod'

export const profileSchema = z.object({
	avatar: z.string().optional(),
	firstName: z.string().min(2, 'Имя должно быть не менее 2 символов'),
	lastName: z.string().min(2, 'Фамилия должна быть не менее 2 символов'),
	email: z.string().email('Введите корректный email'),
	phone: z
		.string()
		.regex(/^\+?[0-9]{10,12}$/, 'Введите корректный номер телефона'),
	bio: z
		.string()
		.max(500, 'Описание не должно превышать 500 символов')
		.optional(),
})
export const passwordSchema = z
	.object({
		currentPassword: z
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов'),
		newPassword: z
			.string()
			.min(8, 'Новый пароль должен быть не менее 8 символов'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export type ProfileFormData = z.infer<typeof profileSchema>
export type PasswordFormData = z.infer<typeof passwordSchema>
