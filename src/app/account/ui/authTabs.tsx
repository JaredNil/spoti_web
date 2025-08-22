import { zodResolver } from '@hookform/resolvers/zod'
import {
	CheckCircle2,
	Chrome,
	Eye,
	EyeOff,
	Key,
	Mail,
	Phone,
	Trash2,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { PasswordFormData, passwordSchema } from '../model/validationSchemas'

import { Button } from '@/shared/ui/kit/button'

export const AuthTabs = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
	const [emailVerified, setEmailVerified] = useState(true)
	const [phoneVerified, setPhoneVerified] = useState(false)
	const [googleLinked, setGoogleLinked] = useState(true)

	const passwordForm = useForm<PasswordFormData>({
		resolver: zodResolver(passwordSchema),
	})

	const onPasswordSubmit = async (data: PasswordFormData) => {
		setIsLoading(true)
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500))
			toast.success('Пароль успешно изменен')
			passwordForm.reset()
		} catch {
			toast.error('Ошибка изменения пароля')
		} finally {
			setIsLoading(false)
		}
	}

	const handleSendCode = () => {
		toast.success('Код отправлен на телефон')
	}

	return (
		<div className="space-y-8 py-3">
			<h3 className="text-lg font-semibold text-white mb-4 flex items-center">
				<Key className="w-5 h-5 mr-2" /> Сменить пароль
			</h3>
			<form
				onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
				className="space-y-4"
			>
				<div>
					<label className="block font-medium text-white text-base mb-1 select-none">
						Текущий пароль
					</label>
					<div className="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							{...passwordForm.register('currentPassword')}
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2"
						>
							{showPassword ? (
								<EyeOff className="w-4 h-4 text-gray-500" />
							) : (
								<Eye className="w-4 h-4 text-gray-500" />
							)}
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block font-medium text-white text-base mb-1 select-none">
							Новый пароль
						</label>
						<input
							type="password"
							{...passwordForm.register('newPassword')}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<label className="block font-medium text-white text-base mb-1 select-none">
							Подтвердите пароль
						</label>
						<input
							type="password"
							{...passwordForm.register('confirmPassword')}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
				</div>
				{passwordForm.formState.errors.confirmPassword && (
					<p className="text-sm text-red-600">
						{passwordForm.formState.errors.confirmPassword.message}
					</p>
				)}
				<Button
					type="submit"
					disabled={isLoading}
					className="px-6 py-2 bg-emerald-800 text-white rounded-lg w-full
					hover:bg-emerald-800/70 disabled:opacity-50 transition-colors"
				>
					{isLoading ? 'Обновление...' : 'Обновить пароль'}
				</Button>
			</form>
			{/* Двухфакторная аутентификация */}
			<div className="border-t pt-8">
				<h3 className="text-lg font-semibold text-white mb-4 flex items-center">
					<CheckCircle2 className="w-5 h-5 mr-2" />
					Двухфакторная аутентификация
				</h3>
				<div className="bg-emerald-800 rounded-lg p-4 mb-4">
					<p className="text-sm text-white text-center tracking-wide">
						Добавьте дополнительный уровень безопасности к вашему
						аккаунту
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-white">
							Аппаратный токен / TOTP
						</p>
						<p className="text-xs text-white">
							{twoFactorEnabled ? 'Активно' : 'Отключено'}
						</p>
					</div>
					<button
						onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
						className={`relative inline-flex h-6 w-11 ring-emerald-800 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${twoFactorEnabled ? 'bg-emerald-800' : 'bg-gray-200'}`}
					>
						<span
							className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`}
						/>
					</button>
				</div>
			</div>
			<div className="border-t pt-8">
				<h3 className="text-lg font-semibold text-white mb-4">
					Способы входа
				</h3>
				<div className="flex items-center justify-between p-4 border rounded-lg mb-3">
					<div className="flex items-center">
						<Mail className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Email</p>
							<p
								className={`text-sm ${emailVerified ? 'text-green-600' : 'text-gray-500'}`}
							>
								{emailVerified
									? 'Подтверждено'
									: 'Не подтверждено'}
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						{!emailVerified && (
							<button
								onClick={() => {
									setEmailVerified(true)
									toast.success('Email подтвержден')
								}}
								className="text-sm text-indigo-600 hover:text-indigo-700"
							>
								Подтвердить
							</button>
						)}
						<button className=" text-red-600 text-lg hover:text-red-700">
							Удалить
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between p-4 border rounded-lg mb-3">
					<div className="flex items-center">
						<Phone className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Телефон</p>
							<p
								className={`text-sm ${phoneVerified ? 'text-green-600' : 'text-gray-500'}`}
							>
								{phoneVerified
									? 'Подтверждено'
									: 'Не подтверждено'}
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						{!phoneVerified && (
							<button
								onClick={handleSendCode}
								className="text-sm text-white hover:text-white/80"
							>
								Отправить код
							</button>
						)}
						<button className=" text-red-600 text-lg hover:text-red-700">
							Удалить
						</button>
					</div>
				</div>
				{/* Google */}
				<div className="flex items-center justify-between p-4 border rounded-lg">
					<div className="flex items-center">
						<Chrome className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Google</p>
							<p
								className={`text-sm ${googleLinked ? 'text-green-600' : 'text-gray-500'}`}
							>
								{googleLinked ? 'Подключено' : 'Не подключено'}
							</p>
						</div>
					</div>
					<button
						onClick={() => {
							setGoogleLinked(!googleLinked)
							toast.success(
								googleLinked
									? 'Google отключён'
									: 'Google подключён'
							)
						}}
						className={`text-lg ${googleLinked ? 'text-red-600 hover:text-red-700' : 'text-white hover:text-white/90'}`}
					>
						{googleLinked ? 'Отключить' : 'Подключить'}
					</button>
				</div>
			</div>
			{/* Дополнительные действия */}
			<div className="border-t pt-8">
				<h3 className="text-lg font-semibold text-white mb-4">
					Дополнительно
				</h3>
				<button className="flex items-center text-sm text-red-600 hover:text-red-700">
					<Trash2 className="w-4 h-4 mr-2" />
					Удалить аккаунт навсегда
				</button>
			</div>
		</div>
	)
}
