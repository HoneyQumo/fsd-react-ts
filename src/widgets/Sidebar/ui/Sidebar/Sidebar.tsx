import cls from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'


interface ISidebarProps {
	className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
	const {
		className,
	} = props

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}

	return (
		<div className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className]) }>
			<button onClick={ onToggle }>toggle</button>
			<div className={ cls.switchers }>
				<ThemeSwitcher />
			{/*	LangSwitcher */}
			</div>
		</div>
	)
}