import { createContext } from 'react'


export enum ThemeEnum {
	LIGHT='light',
	DARK = 'dark',
}

export interface IThemeContext {
	theme?: ThemeEnum,
	setTheme?: (value: ThemeEnum) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'