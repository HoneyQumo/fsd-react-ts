import { FC } from 'react'
import { classNames } from 'shared/lib'
import { AppLinkThemeEnum, KitLink } from 'shared/ui/Kit/KitLink/KitLink'
import cls from './Navbar.module.scss'


interface INavbarProps {
	className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
	const {
		className,
	} = props

	return (
		<div className={ classNames(cls.Navbar, {}, [className]) }>
			<div className={ cls.logo }></div>
			<div className={ cls.links }>
				<KitLink theme={ AppLinkThemeEnum.SECONDARY } to="/">Главная страница</KitLink>
				<KitLink theme={ AppLinkThemeEnum.SECONDARY } to="/about">О сайте</KitLink>
			</div>
		</div>
	)
}