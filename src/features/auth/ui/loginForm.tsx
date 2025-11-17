'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginSchema, TypeLoginSchema } from '../model/schema'

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
import { useTranslation } from '@/shared/i18n'

export function LoginForm() {
	const { t } = useTranslation()
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const [isShowTwoFactor, setIsShowFactor] = useState(false)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// const { login, isLoadingLogin } = useLoginMutation(setIsShowFactor)
	const isLoadingLogin = false

	const onSubmit = (values: TypeLoginSchema) => {
		if (recaptchaValue) {
			toast.success('Handle вход в аккаунт')
			// login({ values, recaptcha: recaptchaValue })
		} else {
			toast.error(t('completeRecaptcha'))
		}
	}

	const errorMessage = () => {
		toast.error(t('loginViaGoogleYandex'), {
			description: t('featureInDevelopment'),
		})
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-2 space-y-2"
			>
				{isShowTwoFactor && (
					<FormField
						control={form.control}
						name="code"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Код</FormLabel>
								<FormControl>
									<Input
										placeholder="123456"
										disabled={isLoadingLogin}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				{!isShowTwoFactor && (
					<>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem onClick={errorMessage}>
									<FormLabel>{t('email')}</FormLabel>
									<FormControl>
										<Input
											autoComplete="address-level2 webauthn"
											placeholder="ivan@example.com"
											// disabled={isLoadingLogin}
											disabled={true}
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
									<div className="flex items-center justify-between">
										<FormLabel>{t('password')}</FormLabel>
										<Link
											href="/auth/reset"
											className="ml-auto inline-block text-sm underline"
										>
											Забыли пароль?
										</Link>
									</div>
									<FormControl>
										<Input
											placeholder="******"
											autoComplete="current-password"
											// disabled={isLoadingLogin}
											disabled={true}
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}
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
					// disabled={isLoadingLogin}
					disabled={true}
				>
					{t('loginToAccount')}
				</Button>
			</form>
		</Form>
	)
}
