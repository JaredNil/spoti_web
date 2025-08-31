import { zodResolver } from '@hookform/resolvers/zod'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	PasswordFormData,
	passwordSchema,
	ProfileFormData,
	profileSchema,
} from '../model/validationSchemas'

export const ProfileTabs = () => {
	const [isLoading, setIsLoading] = useState(false)

	const profileForm = useForm<ProfileFormData>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			firstName: 'Алексей',
			lastName: 'Иванов',
			email: 'alexey@example.com',
			phone: '+79261234567',
			bio: 'Разработчик приложений',
			avatar: '/avatar.jpg',
		},
	})

	const onProfileSubmit = async (data: ProfileFormData) => {
		setIsLoading(true)
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500))
			toast.success('Профиль успешно обновлен')
		} catch {
			toast.error('Ошибка обновления профиля')
		} finally {
			setIsLoading(false)
		}
	}

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

	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = (event) => {
				profileForm.setValue('avatar', event.target?.result as string)
			}
			reader.readAsDataURL(file)
			toast.success('Аватар загружен')
		}
	}

	return (
		<form
			onSubmit={profileForm.handleSubmit(onProfileSubmit)}
			className="space-y-6"
		>
			<div className="text-center">
				<div className="relative inline-block mt-6">
					<Image
						src={'/content/cover/album-placeholder.webp'}
						width={100}
						height={100}
						alt="Avatar"
						className="aspect-square rounded-full select-none"
					/>
					<label
						htmlFor="avatar-input"
						className="absolute bottom-0 right-0 bg-emerald-800 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors"
					>
						<Camera className="w-4 h-4" />
						<input
							id="avatar-input"
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleAvatarChange}
						/>
					</label>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label className="block font-medium text-white text-base mb-1 select-none">
						Имя
					</label>
					<input
						{...profileForm.register('firstName')}
						className="w-full px-3 py-2 border border-emerald-800 rounded-lg   focus:border-emerald-800"
					/>
					{profileForm.formState.errors.firstName && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.firstName.message}
						</p>
					)}
				</div>
				<div>
					<label className="block font-medium text-white text-base mb-1 select-none">
						Фамилия
					</label>
					<input
						{...profileForm.register('lastName')}
						className="w-full px-3 py-2 border border-emerald-800 rounded-lg   focus:border-emerald-800"
					/>
					{profileForm.formState.errors.lastName && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.lastName.message}
						</p>
					)}
				</div>
				<div>
					<label className="block font-medium text-white text-base mb-1 select-none">
						Email
					</label>
					<input
						type="email"
						{...profileForm.register('email')}
						className="w-full px-3 py-2 border border-emerald-800 rounded-lg   focus:border-emerald-800"
					/>
					{profileForm.formState.errors.email && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.email.message}
						</p>
					)}
				</div>
				<div>
					<label className="block font-medium text-white text-base mb-1 select-none">
						Телефон
					</label>
					<input
						type="tel"
						{...profileForm.register('phone')}
						className="w-full px-3 py-2 border border-emerald-800 rounded-lg   focus:border-emerald-800"
					/>
					{profileForm.formState.errors.phone && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.phone.message}
						</p>
					)}
				</div>
			</div>
			<div>
				<label className="block font-medium text-white text-base mb-1 select-none">
					О себе
				</label>
				<textarea
					{...profileForm.register('bio')}
					rows={3}
					className="w-full px-3 py-2 border border-emerald-800 rounded-lg   focus:border-emerald-800"
				/>
				{profileForm.formState.errors.bio && (
					<p className="mt-1 text-sm text-red-600">
						{profileForm.formState.errors.bio.message}
					</p>
				)}
			</div>
			<div className="pt-4">
				<button
					type="submit"
					disabled={isLoading}
					className="w-full  px-6 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 disabled:opacity-50 transition-colors"
				>
					{isLoading ? 'Сохранение...' : 'Сохранить изменения'}
				</button>
			</div>
		</form>
	)
}
