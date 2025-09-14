import { zodResolver } from '@hookform/resolvers/zod'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	PasswordFormData,
	passwordSchema,
	ProfileFormData,
	profileSchema,
} from '../model/validationSchemas'

import { Button } from '@/shared/ui/kit/button'
import { Label } from '@/shared/ui/kit/label'

export const ProfileTabs = () => {
	const [isLoading, setIsLoading] = useState(false)

	const { data } = useSession()
	console.log(data)

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

	const onPasswordSubmit = async (data: PasswordFormData) => {}

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
						className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors"
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
					<Label variant="left">Имя</Label>
					<input
						{...profileForm.register('firstName')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg   focus:border-green-500"
					/>
					{profileForm.formState.errors.firstName && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.firstName.message}
						</p>
					)}
				</div>
				<div>
					<Label variant="left">Фамилия</Label>
					<input
						{...profileForm.register('lastName')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg   focus:border-green-500"
					/>
					{profileForm.formState.errors.lastName && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.lastName.message}
						</p>
					)}
				</div>
				<div>
					<Label variant="left">Email</Label>
					<input
						type="email"
						{...profileForm.register('email')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg   focus:border-green-500"
					/>
					{profileForm.formState.errors.email && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.email.message}
						</p>
					)}
				</div>
				<div>
					<Label variant="left">Телефон</Label>
					<input
						type="tel"
						{...profileForm.register('phone')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg   focus:border-green-500"
					/>
					{profileForm.formState.errors.phone && (
						<p className="mt-1 text-sm text-red-600">
							{profileForm.formState.errors.phone.message}
						</p>
					)}
				</div>
			</div>
			<div>
				<Label variant="left">О себе</Label>
				<textarea
					{...profileForm.register('bio')}
					rows={3}
					className="w-full px-3 py-2 border rounded-lg
					border-green-500 focus:border-green-500"
				/>
				{profileForm.formState.errors.bio && (
					<p className="mt-1 text-sm text-red-600">
						{profileForm.formState.errors.bio.message}
					</p>
				)}
			</div>
			<Button variant="submit" disabled={isLoading} className="mt-4">
				{isLoading ? 'Сохранение...' : 'Сохранить изменения'}
			</Button>
		</form>
	)
}
