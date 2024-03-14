import './pages/styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



export const App = () => {
	const { theme, handlerToggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={ handlerToggleTheme }>toggle theme</button>

			<Link to='/'>Главная страница</Link>
			<Link to='/about'>О сайте</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/about" element={ <AboutPageLazy /> }/>
					<Route path="/" element={ <MainPageLazy /> }/>
				</Routes>
			</Suspense>
		</div>
	)
}