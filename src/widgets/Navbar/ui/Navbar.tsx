import cls from './Navbar.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib'
import { KitLink, KitLinkThemeEnum } from 'shared/ui'


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
				<KitLink theme={ KitLinkThemeEnum.SECONDARY } to="/">Главная страница</KitLink>
				<KitLink theme={ KitLinkThemeEnum.SECONDARY } to="/about">О сайте</KitLink>
			</div>
		</div>
	)
}