import { lazy } from 'react'


// TODO: убрать setTimeout
export const MainPageLazy = lazy(() => new Promise((resolve) => {
	// @ts-ignore
	setTimeout(() => resolve(import('./MainPage')), 1500)
}))