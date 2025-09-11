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
import { FaYandex } from 'react-icons/fa'
import { toast } from 'sonner'

import { PasswordFormData, passwordSchema } from '../model/validationSchemas'

import { Button } from '@/shared/ui/kit/button'
import { Label } from '@/shared/ui/kit/label'

export const AuthTabs = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
	const [emailVerified, setEmailVerified] = useState(true)
	const [phoneVerified, setPhoneVerified] = useState(false)
	const [googleLinked, setGoogleLinked] = useState(true)
	const [yandexLinked, setYandexLinked] = useState(true)

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
		toast.success('Код не отправлен на телефон', {
			description: 'Фича еще не реализована',
		})
	}
	const handleDeletePhone = () => {
		toast.success('Вы не можете удалить ТО чего НЕТ', {
			description: 'Фича еще не реализована',
		})
	}
	const deleteAccount = () => {
		toast.success('Вы не можете удалить аккаунт', {
			description: 'Я еще не реализовал его хранение, а вы уже удаляете',
		})
	}

	const googleHandle = () => {
		setGoogleLinked(!googleLinked)
		toast.success(googleLinked ? 'Google отключён' : 'Google подключён', {
			description: 'Но фичу я эту еще не реализовал, 😂🤣😂🤣',
		})
	}

	const yandexHandle = () => {
		setYandexLinked(!yandexLinked)
		toast.success(yandexLinked ? 'Yandex отключён' : 'Yandex подключён', {
			description: 'Но фичу я эту еще не реализовал, 😂🤣😂🤣',
		})
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
					<Label variant="left">Текущий пароль</Label>
					<div className="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							{...passwordForm.register('currentPassword')}
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
						/>
						<Button
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-3 top-1/2 -translate-y-1/2"
						>
							{showPassword ? (
								<EyeOff className="w-4 h-4 text-gray-500" />
							) : (
								<Eye className="w-4 h-4 text-gray-500" />
							)}
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<Label variant="left">Новый пароль</Label>
						<input
							type="password"
							{...passwordForm.register('newPassword')}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
						/>
					</div>
					<div>
						<Label variant="left">Подтвердите пароль</Label>
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
				<Button variant={'submit'} disabled={isLoading}>
					{isLoading ? 'Обновление...' : 'Обновить пароль'}
				</Button>
			</form>
			{/* Двухфакторка, когда-нибудь добавим */}
			<div className="relative border-t pt-8 ">
				<h3 className="text-lg font-semibold text-white mb-2 flex items-center">
					<CheckCircle2 className="w-5 h-5 mr-2" />
					Двухфакторная аутентификация
				</h3>
				<Button variant={'submit'} className="p-2 mb-2">
					<p className="text-wrap">
						Добавьте дополнительный уровень безопасности к вашему
						аккаунту
					</p>
				</Button>
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
						className={`relative inline-flex h-6 w-11 ring-green-500 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${twoFactorEnabled ? 'bg-green-500' : 'bg-gray-200'}`}
					>
						<span
							className={`inline-block h-4 w-4 transform rounded-full
								 bg-white transition-transform 
								 ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`}
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
							<p>Email</p>
							<p
								className={`text-sm 
									${emailVerified ? 'text-green-600' : 'text-gray-500'}`}
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
						<Button variant="danger" onClick={handleDeletePhone}>
							Удалить
						</Button>
					</div>
				</div>
				<div
					className="flex flex-col sm:flex-row items-start sm:items-center justify-between
					border rounded-lg 
					p-4 gap-y-2 mb-3"
				>
					<div className="flex items-center">
						<Phone className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Телефон</p>
							<p
								className={`text-sm text-nowrap ${phoneVerified ? 'text-green-600' : 'text-gray-500'}`}
							>
								{phoneVerified
									? 'Подтверждено'
									: 'Не подтверждено'}
							</p>
						</div>
					</div>
					<div className="w-full flex justify-around sm:justify-end items-center">
						{!phoneVerified && (
							<Button variant="default" onClick={handleSendCode}>
								Отправить код
							</Button>
						)}
						<Button variant="danger" onClick={handleDeletePhone}>
							Удалить
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-between p-4 border rounded-lg">
					<div className="flex items-center">
						<Chrome className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Google</p>
							<p
								className={`text-[10px] ${googleLinked ? 'text-green-600' : 'text-gray-500'}`}
							>
								{googleLinked ? 'Подключено' : 'Не подключено'}
							</p>
						</div>
					</div>
					<Button
						variant="danger"
						className="text-[12px]"
						onClick={() => googleHandle()}
					>
						{googleLinked ? 'Отключить' : 'Подключить'}
					</Button>
				</div>
				<div className="flex items-center justify-between mt-4 p-4 border rounded-lg">
					<div className="flex items-center">
						<FaYandex className="w-5 h-5 text-gray-400 mr-3" />
						<div>
							<p className="font-medium text-white">Yandex</p>
							<p
								className={`text-[10px] 
								${yandexLinked ? 'text-green-600' : 'text-gray-500'}`}
							>
								{yandexLinked ? 'Подключено' : 'Не подключено'}
							</p>
						</div>
					</div>
					<Button
						variant="danger"
						className="text-[12px]"
						onClick={() => yandexHandle()}
					>
						{yandexLinked ? 'Отключить' : 'Подключить'}
					</Button>
				</div>
			</div>
			{/* Дополнительные действия */}
			<div className="border-t pt-8">
				<h3 className="text-lg font-semibold text-white mb-4">
					Дополнительно
				</h3>
				<Button
					variant="danger"
					className="w-full"
					onClick={() => deleteAccount()}
				>
					<Trash2 className="w-4 h-4 mr-2" />
					Удалить аккаунт навсегда
				</Button>
			</div>
		</div>
	)
}
