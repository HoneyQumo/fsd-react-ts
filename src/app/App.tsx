import './styles/index.scss'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'shared/hooks'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'


export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className="app__wrapper">
				<Sidebar />
				<div className="app__content">
					<AppRouter />
				</div>
			</div>
		</div>
	)
}