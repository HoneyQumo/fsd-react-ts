import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from 'shared/config/theme/ThemeContext'


const themeInitialValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<ThemeEnum>(themeInitialValue)

	const themeProviderProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])

	return (
		<ThemeContext.Provider value={ themeProviderProps }>
			{ children }
		</ThemeContext.Provider>
	)
}

export default ThemeProvider