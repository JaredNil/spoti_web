import { zodResolver } from '@hookform/resolvers/zod'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { ProfileFormData, profileSchema } from '../model/validationSchemas'

import {
	useCreateUserMutation,
	useFetchUserQuery,
} from '@/entities/user/api/userApi'
import { Button } from '@/shared/ui/kit/button'
import { Label } from '@/shared/ui/kit/label'
export const ProfileTabs = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { status, data: session } = useSession()
	const email = session?.user?.email

	/* ------------ RTK: получаем / создаём ------------ */
	const {
		data: user,
		isLoading: isLoadingUser,
		error,
		refetch,
	} = useFetchUserQuery(email!, { skip: !email })

	const [createUser, { isLoading: isCreating }] = useCreateUserMutation()

	/* ------------ react-hook-form + Zod ------------ */
	const form = useForm<ProfileFormData>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: email ?? '',
			phone: '',
			bio: '',
			avatar: '',
		},
	})

	/* ------------ Подмена defaultValues после загрузки ------------ */
	useEffect(() => {
		if (!user) return
		form.reset({
			firstName: user.firstname ?? '',
			lastName: user.lastname ?? '',
			email: user.email,
			phone: user.phone ?? '',
			avatar: user.imageHash ?? '',
		})
	}, [user, form])

	/* ------------ Создание профиля, если 404 ------------ */
	// useEffect(() => {
	// 	if (!email || user || !error) return
	// 	if ('status' in error && error.status === 404) {
	// 		;(async () => {
	// 			try {
	// 				// await createUser({
	// 				// 	email,
	// 				// 	firstname: session.user?.name?.split(' ')[0] ?? '',
	// 				// 	lastname: session.user?.name?.split(' ')[1] ?? '',
	// 				// 	imageHash: session.user?.image ?? '',
	// 				// 	phone: '',
	// 				// 	'2fa': false,
	// 				// 	trackesId: [],
	// 				// 	createdAt: new Date().toISOString(),
	// 				// }).unwrap()
	// 				// toast.success('Профиль создан')
	// 				refetch()
	// 			} catch (e: any) {
	// 				toast.error('Ошибка создания профиля: ' + e.message)
	// 			}
	// 		})()
	// 	}
	// }, [email, user, error, createUser, refetch, session])

	/* ------------ Отправка обновления ------------ */
	const onProfileSubmit = async (data: ProfileFormData) => {
		if (!email) return
		setIsLoading(true)
		try {
			// await updateUser({ email, ...data }) // ваша мутация PATCH /user/:email
			toast.success('Профиль обновлён')
		} catch {
			toast.error('Ошибка обновления профиля')
		} finally {
			setIsLoading(false)
		}
	}

	/* ------------ Загрузка аватара ------------ */
	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		const reader = new FileReader()
		reader.onload = (ev) =>
			form.setValue('avatar', ev.target?.result as string)
		reader.readAsDataURL(file)
		toast.success('Аватар загружен')
	}

	/* ------------ Скелетон / заглушка ------------ */
	if (isLoadingUser || isCreating)
		return <p className="p-4">Загрузка профиля...</p>
	if (!user) return <p className="p-4">Профиль не найден</p>

	/* ------------ Форма ------------ */
	return (
		<form
			onSubmit={form.handleSubmit(onProfileSubmit)}
			className="space-y-6"
		>
			{/* Аватар */}
			<div className="text-center">
				<div className="relative inline-block mt-6">
					<Image
						src={
							form.watch('avatar') ||
							'/content/cover/album-placeholder.webp'
						}
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

			{/* Поля */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<Label variant="left">Имя</Label>
					<input
						{...form.register('firstName')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg focus:border-green-500"
					/>
					{form.formState.errors.firstName && (
						<p className="mt-1 text-sm text-red-600">
							{form.formState.errors.firstName.message}
						</p>
					)}
				</div>

				<div>
					<Label variant="left">Фамилия</Label>
					<input
						{...form.register('lastName')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg focus:border-green-500"
					/>
					{form.formState.errors.lastName && (
						<p className="mt-1 text-sm text-red-600">
							{form.formState.errors.lastName.message}
						</p>
					)}
				</div>

				<div>
					<Label variant="left">Email</Label>
					<input
						type="email"
						{...form.register('email')}
						disabled
						className="w-full px-3 py-2 border border-green-500 rounded-lg focus:border-green-500 disabled:opacity-60"
					/>
					{form.formState.errors.email && (
						<p className="mt-1 text-sm text-red-600">
							{form.formState.errors.email.message}
						</p>
					)}
				</div>

				<div>
					<Label variant="left">Телефон</Label>
					<input
						type="tel"
						{...form.register('phone')}
						className="w-full px-3 py-2 border border-green-500 rounded-lg focus:border-green-500"
					/>
					{form.formState.errors.phone && (
						<p className="mt-1 text-sm text-red-600">
							{form.formState.errors.phone.message}
						</p>
					)}
				</div>
			</div>

			<div>
				<Label variant="left">О себе</Label>
				<textarea
					{...form.register('bio')}
					rows={3}
					className="w-full px-3 py-2 border border-green-500 rounded-lg focus:border-green-500"
				/>
				{form.formState.errors.bio && (
					<p className="mt-1 text-sm text-red-600">
						{form.formState.errors.bio.message}
					</p>
				)}
			</div>

			<Button variant="submit" disabled={isLoading} className="mt-4">
				{isLoading ? 'Сохранение...' : 'Сохранить изменения'}
			</Button>
		</form>
	)
}
