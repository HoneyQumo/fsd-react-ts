import cls from './LangSwitcher.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { KitButton, KitButtonThemeEnum } from 'shared/ui'
import RUS_FLAG from 'shared/assets/icons/rus-flag_20x20.png'
import ENG_FLAG from 'shared/assets/icons/eng-flag_20x20.png'


interface ILangSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
	const {
		className,
	} = props

	const [t, i18n] = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<KitButton
			theme={ KitButtonThemeEnum.CLEAR }
			className={ classNames(cls.LangSwitcher, {}, [className]) }
			onClick={ toggle }
		>
			{ i18n.language === 'ru'
				? <img src={ RUS_FLAG } alt="RUS" />
				: <img src={ ENG_FLAG } alt="ENG" />
			}
		</KitButton>
	)
}