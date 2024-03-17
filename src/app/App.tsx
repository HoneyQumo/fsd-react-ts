import './styles/index.scss'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'shared/hooks'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={ classNames('app', {}, [theme]) }>
			<Suspense fallback=''>
				<Navbar />
				<div className="app__wrapper">
					<Sidebar />
					<div className="app__content">
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	)
}