'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from './authWrapper'
import {
	ResetPasswordSchema,
	TypeResetPasswordSchema,
} from '../model/type/authSchema'

import { Button } from '@/shared/ui/kit/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/kit/form'
import { Input } from '@/shared/ui/kit/input'

export function ResetPasswordForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeResetPasswordSchema>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			email: '',
		},
	})

	// const { reset, isLoadingReset } = useResetPasswordMutation()
	const isLoadingReset = false

	const onSubmit = (values: TypeResetPasswordSchema) => {
		if (recaptchaValue) {
			toast.success('Фича пока не реализована')
			// reset({ values, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите reCAPTCHA')
		}
	}

	return (
		<AuthWrapper
			heading="Сброс пароля"
			description="Для сброса пароля введите свою почту"
			backButtonLabel="Войти в аккаунт"
			backButtonHref="/auth/login"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="grid gap-2 space-y-2"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Почта</FormLabel>
								<FormControl>
									<Input
										placeholder="ivan@example.com"
										disabled={isLoadingReset}
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-center">
						{/* <ReCAPTCHA
							sitekey={
								process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
							}
							onChange={setRecaptchaValue}
						/> */}
					</div>
					<Button
						type="submit"
						disabled={isLoadingReset}
						className="bg-emerald-500 cursor-pointer"
					>
						Сбросить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
