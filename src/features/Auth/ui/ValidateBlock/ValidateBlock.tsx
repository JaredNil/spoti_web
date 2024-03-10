import { useSelector } from 'react-redux';

import { authAction, getAuthIsValid, getAuthPassword, getAuthUsername } from 'features/Auth';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ValidateBlockProps {}

export const ValidateBlock: React.FC<ValidateBlockProps> = (props: ValidateBlockProps) => {
	const dispatch = useAppDispatch();

	const [minLogin, setMinLogin] = useState<boolean>(false);

	const username = useSelector(getAuthUsername);
	const password = useSelector(getAuthPassword);

	const isValid = useSelector(getAuthIsValid);

	useEffect(() => {
		let commonValid = true;
		if (username.match(/^.{6,}$/)) {
			commonValid = false;
			setMinLogin(false);
		} else setMinLogin(true);

		dispatch(authAction.setVaild(commonValid));
	}, [username, dispatch]);

	return (
		<div className="flex w-full flex-wrap transition-opacity">
			<span
				className={twMerge(
					` m-2 h-[1px] overflow-hidden
                    rounded-xl bg-red-500 px-3 py-[2px]
                    opacity-0
                    transition-opacity`,
					minLogin && 'h-auto opacity-100'
				)}
			>
				Минимальная длина логина 6 символов.
			</span>
		</div>
	);
};
