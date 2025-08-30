import { memo, useCallback } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { twMerge } from 'tailwind-merge'

import { ValidateBlock } from './validationBlock'
import {
	getAuthIsValid,
	getAuthPassword,
	getAuthUsername,
} from '../model/authSelector'
import { authAction, authReducer } from '../model/authSlice'

import {
	DynamicModuleLoader,
	ReducerList,
} from '@/app/(providers)/storeProvider'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui/kit/button'
import { Input } from '@/shared/ui/kit/input'

export interface AuthFormProps {
	className?: string
	onSuccess: () => void
}

const initialReducers: ReducerList = {
	auth: authReducer,
}

const AuthForm: React.FC<AuthFormProps> = memo((props: AuthFormProps) => {
	const { className, onSuccess } = props
	const dispatch = useAppDispatch()

	const authUsername = useAppSelector(getAuthUsername)
	const authPassword = useAppSelector(getAuthPassword)
	const isLoading = false
	const isValid = useAppSelector(getAuthIsValid)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(authAction.setUserName(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(authAction.setPassword(value))
		},
		[dispatch]
	)

	const onDevAuth = () => {
		// toaster.error(
		// 	'В DEMO режиме без сервера данная функция не работает',
		// 	`1d6. Критический провал`,
		// 	successUploadToastr
		// )
	}
	const onDevInputLogin = () => {
		// toastr.success(
		// 	'Проще зайдите под ОБЩИМ АККАУНТОМ',
		// 	`Сервер сейчас не работает`,
		// 	successUploadToastr
		// )
	}

	const onInfoAuth = () => {
		// toastr.info(
		// 	'Это DEMO с выключенным сервером. Заходи под ОБЩИМ АККАУНТОМ',
		// 	`Не парься`,
		// 	successUploadToastr
		// )
	}

	// const onAuthFromServer = useCallback(async () => {
	// const result = await dispatch(
	// authByUsername({ authUsername, authPassword })
	// )
	// if (result.meta.requestStatus === 'fulfilled') onSuccess()
	// }, [dispatch, authUsername, authPassword, onSuccess])

	// const onAuthDemoFromServer = useCallback(async () => {
	// 	const result = await dispatch(
	// 		authByUsername({ authUsername: 'Demo', authPassword: 'Demo' })
	// 	)
	// 	if (result.meta.requestStatus === 'fulfilled') onSuccess()
	// }, [dispatch, authUsername, authPassword, onSuccess])

	return (
		<DynamicModuleLoader
			reducers={initialReducers}
			removeAfterUnmount={false}
		>
			<div className="flex flex-col">
				<h2
					className=" mb-5 mt-2 select-none text-center 
					text-3xl font-semibold text-white"
				>
					Авторизация
				</h2>
				<div className="flex pb-3">
					<Button
						className={twMerge(
							`mx-2 ml-auto flex
							h-10 items-center justify-center bg-zinc-300
							text-base font-normal text-black
							`
						)}
						onClick={onDevAuth}
					>
						<FaGithub size={20} />

						<span className="mx-2">{'Войти по Github'}</span>
					</Button>
					<Button
						className={twMerge(
							`mx-2 ml-auto flex
							h-10 items-center justify-center bg-zinc-300
							text-base font-normal text-black`
						)}
						onClick={onDevAuth}
					>
						<FcGoogle size={20} />

						<span className="mx-2">{'Войти по Google'}</span>
					</Button>
				</div>
				{/* <div className="select-none font-extralight">
					Введите имя пользователя
				</div>
				<Input
					autoFocus
					type="text"
					className="mb-2"
					// placeholder={t('Sth nickname')}
					// onChange={onChangeUsername}
					value={authUsername}
					onClick={onDevInputLogin} // DEMO EVENT
				/>
				<div className="select-none font-extralight">
					Введите имя пользователя
				</div>
				<Input
					type="text"
					className="mb-2"
					placeholder={'Sth password'}
					// onChange={onChangePassword}
					value={authPassword}
				/> */}
				<ValidateBlock />
				<Button
					className={twMerge(
						`ml-auto mt-[15px] text-xl
						text-neutral-900/80`
					)}
					// onClick={onAuthFromServer}
					disabled={isLoading || isValid}
				>
					Войти
				</Button>

				<Button
					className={twMerge(
						`ml-auto mt-[15px] text-xl
						text-neutral-900/80`
					)}
					// onClick={onAuthDemoFromServer}
				>
					'Войти в общий аккаунт [ADMIN]
				</Button>
				<h3
					className=" flex cursor-pointer select-none
					items-center justify-center pt-4 text-center text-xs font-semibold text-white"
				>
					<span
						onClick={onInfoAuth}
						className="px-2 text-neutral-400"
					>
						Забыли пароль ?
					</span>
					<span
						onClick={onInfoAuth}
						className="px-2 text-neutral-400"
					>
						Нет аккаунта ?
					</span>
					<span
						onClick={onInfoAuth}
						className="px-2 text-neutral-400"
					>
						Вы Алексей ?
					</span>
				</h3>
			</div>
		</DynamicModuleLoader>
	)
})

export default AuthForm
