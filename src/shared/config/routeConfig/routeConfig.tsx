import { RouteProps } from 'react-router-dom'
import { AboutPageLazy } from 'pages/AboutPage'
import { MainPageLazy } from 'pages/MainPage'


export enum AppRoutesEnum {
	MAIN = 'main',
	ABOUT = 'about'
}

export const RoutePath: Record<AppRoutesEnum, string> = {
	[AppRoutesEnum.MAIN]: '/',
	[AppRoutesEnum.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
	[AppRoutesEnum.MAIN]: {
		path: RoutePath.main,
		element: <MainPageLazy/>
	},
	[AppRoutesEnum.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageLazy />
	}
}