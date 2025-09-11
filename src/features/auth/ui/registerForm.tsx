'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { AuthWrapper } from './authWrapper'
import { RegisterSchema, TypeRegisterSchema } from '../model/schema'

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

export function RegisterForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	})

	// const { register, isLoadingRegister } = useRegisterMutation()
	const isLoadingRegister = false

	const onSubmit = (values: TypeRegisterSchema) => {
		if (recaptchaValue) {
			toast.success('Входи через Google / Yandex')
			// register({ values, recaptcha: recaptchaValue })
		} else {
			toast.error('Пожалуйста, завершите reCAPTCHA')
		}
	}

	const errorMessage = () => {
		toast.error('Входи через Google / Yandex', {
			description: 'Фича еще в разработке',
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-2 space-y-2"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem onClick={errorMessage}>
							<FormLabel>Имя</FormLabel>
							<FormControl>
								<Input
									placeholder="Иван"
									autoComplete="username"
									// disabled={isLoadingRegister}
									disabled={true}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem onClick={errorMessage}>
							<FormLabel>Почта</FormLabel>
							<FormControl>
								<Input
									placeholder="ivan@example.com"
									// disabled={isLoadingRegister}
									disabled={true}
									autoComplete="email"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem onClick={errorMessage}>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input
									placeholder="******"
									autoComplete="new-password"
									// disabled={isLoadingRegister}
									disabled={true}
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="passwordRepeat"
					render={({ field }) => (
						<FormItem onClick={errorMessage}>
							<FormLabel>Повторите пароль</FormLabel>
							<FormControl>
								<Input
									placeholder="******"
									autoComplete="current-password"
									// disabled={isLoadingRegister}
									disabled={true}
									type="password"
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
					className="bg-emerald-500 cursor-pointer"
					// disabled={isLoadingRegister}
					disabled={true}
				>
					Создать аккаунт
				</Button>
			</form>
		</Form>
	)
}
