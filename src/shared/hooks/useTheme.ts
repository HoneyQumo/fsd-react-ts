import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../config/theme/ThemeContext'
import { useContext } from 'react'


interface IUseThemeResult {
	handlerToggleTheme: () => void,
	theme: ThemeEnum
}

export function useTheme(): IUseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const handlerToggleTheme = () => {
		const newTheme = theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, handlerToggleTheme }
}