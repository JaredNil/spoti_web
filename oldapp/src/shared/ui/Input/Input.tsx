import { InputHTMLAttributes, memo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
	const { className, value, onChange, type = 'text', placeholder, autofocus, readonly, ...otherProps } = props;
	const ref = useRef<HTMLInputElement>(null);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className="flex w-full">
			<div className="relative grow">
				<input
					className={twMerge(
						`
						flex w-full rounded-md border border-transparent
						bg-neutral-700 px-3 py-3 text-sm
						file:border-0 file:bg-transparent file:text-sm file:font-medium
						placeholder:text-neutral-400 focus:outline-none
						disabled:cursor-not-allowed disabled:opacity-50`,
						className
					)}
					placeholder={placeholder}
					type={type}
					ref={ref}
					value={value}
					onChange={onChangeHandler}
					readOnly={readonly}
					{...otherProps}
				/>
			</div>
		</div>
	);
	// return (
	// 	<input
	// 		type={type}
	// 		className={twMerge(
	// 			` flex  w-full  rounded-md  border border-transparent  bg-neutral-700 px-3  py-3  text-sm  file:border-0  file:bg-transparent  file:text-sm  file:font-medium   placeholder:text-neutral-400  focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50
	//     `,
	// 			disabled && 'opacity-75',
	// 			className
	// 		)}
	// 		disabled={disabled}
	// 		ref={ref}
	// 		{...props}
	// 	/>
	// );
});

Input.displayName = 'Input';
