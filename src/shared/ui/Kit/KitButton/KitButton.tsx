import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './KitButton.module.scss'


export enum KitButtonThemeEnum {
	CLEAR = 'clear'
}

interface IKitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: KitButtonThemeEnum
}

export const KitButton: FC<IKitButtonProps> = (props) => {
	const {
		children,
		className,
		theme,
		...otherProps
	} = props

	return (
		<button
			className={ classNames(cls.KitButton, {}, [className, cls[theme]]) }
			{ ...otherProps }
		>
			{ children }
		</button>
	)
}