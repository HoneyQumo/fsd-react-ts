import cls from './ThemeSwitcher.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib'
import { useTheme } from 'shared/hooks'
import { ThemeEnum } from 'shared/config'
import { KitButton, KitButtonThemeEnum } from 'shared/ui'
import THEME_LIGHT from 'shared/assets/icons/theme-light.svg'
import THEME_DARK from 'shared/assets/icons/theme-dark.svg'


interface IThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
	const {
		className,
	} = props

	const { theme, handlerToggleTheme } = useTheme()

	return (
		<KitButton
			theme={ KitButtonThemeEnum.CLEAR }
			className={ classNames(cls.ThemeSwitcher, {}, [className]) }
			onClick={ handlerToggleTheme }
		>
			{
				theme === ThemeEnum.LIGHT
				? <THEME_LIGHT />
				: <THEME_DARK />
			}
		</KitButton>
	)
}