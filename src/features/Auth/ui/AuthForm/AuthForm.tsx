import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import toastr from 'toastr';

import { authAction, authReducer, getAuthIsLoading, getAuthIsValid, getAuthPassword, getAuthUsername } from 'features/Auth';

import { successUploadToastr } from 'shared/config/toastr/toastr.config';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { authByUsername, getUsername } from 'entities/User';
import { ValidateBlock } from '../ValidateBlock/ValidateBlock';

export interface AuthFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducerList = {
	auth: authReducer,
};

const AuthForm: React.FC<AuthFormProps> = memo((props: AuthFormProps) => {
	const { className, onSuccess } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const authUsername = useSelector(getAuthUsername);
	const authPassword = useSelector(getAuthPassword);
	const isLoading = useSelector(getAuthIsLoading);
	const isValid = useSelector(getAuthIsValid);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(authAction.setUserName(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(authAction.setPassword(value));
		},
		[dispatch]
	);

	const onDevAuth = () => {
		toastr.error(
			'Фича находится на стадии разработки. Но спасибо за бетатест. :3 :3 :3',
			`1d6. Критический провал`,
			successUploadToastr
		);
	};

	const onInfoAuth = () => {
		toastr.info('Заходи под общим аккаунтом', `Не парься`, successUploadToastr);
	};

	const onAuthFromServer = useCallback(async () => {
		console.log(authUsername, authPassword);
		const result = await dispatch(authByUsername({ authUsername, authPassword }));
		if (result.meta.requestStatus === 'fulfilled') onSuccess();
	}, [dispatch, authUsername, authPassword, onSuccess]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
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

						<span className="mx-2">{t('Войти по Github')}</span>
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

						<span className="mx-2">{t('Войти по Google')}</span>
					</Button>
				</div>
				<div className="select-none font-extralight">Введите имя пользователя</div>
				<Input
					autoFocus
					type="text"
					className="mb-2"
					placeholder={t('Sth nickname')}
					onChange={onChangeUsername}
					value={authUsername}
				/>
				<div className="select-none font-extralight">Введите имя пользователя</div>
				<Input
					type="text"
					className="mb-2"
					placeholder={t('Sth password')}
					onChange={onChangePassword}
					value={authPassword}
				/>
				<ValidateBlock />
				<Button
					className={twMerge(
						`ml-auto mt-[15px] text-xl
						text-neutral-900/80`
					)}
					onClick={onAuthFromServer}
					disabled={isLoading || isValid}
				>
					{t('Войти')}
				</Button>

				<Button
					className={twMerge(
						`ml-auto mt-[15px] text-xl
						text-neutral-900/80`
					)}
					onClick={onAuthFromServer}
				>
					{t('Войти в общий аккаунт [ADMIN]')}
				</Button>
				<h3
					className=" flex cursor-pointer select-none
					items-center justify-center pt-4 text-center text-xs font-semibold text-white"
				>
					<span onClick={onInfoAuth} className="px-2 text-neutral-400">
						Забыли пароль ?
					</span>
					<span onClick={onInfoAuth} className="px-2 text-neutral-400">
						Нет аккаунта ?
					</span>
					<span onClick={onInfoAuth} className="px-2 text-neutral-400">
						Вы Алексей ?
					</span>
				</h3>
			</div>
		</DynamicModuleLoader>
	);
});

export default AuthForm;
