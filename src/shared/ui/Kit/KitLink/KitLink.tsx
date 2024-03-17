import { FC } from 'react'
import { classNames } from 'shared/lib'
import { Link, LinkProps } from 'react-router-dom'
import cls from './KitLink.module.scss'


export enum KitLinkThemeEnum {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface IKitLinkProps extends LinkProps {
	className?: string
	theme?: KitLinkThemeEnum
}

export const KitLink: FC<IKitLinkProps> = (props) => {
	const {
		to,
		className,
		children,
		theme = KitLinkThemeEnum.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={ to }
			className={ classNames(cls.KitLink, {}, [className, cls[theme]]) }
			{ ...otherProps }
		>
			{ children }
		</Link>
	)
}