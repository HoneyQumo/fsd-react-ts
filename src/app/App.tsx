import './styles/index.scss'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'shared/hooks'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'


export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	)
}