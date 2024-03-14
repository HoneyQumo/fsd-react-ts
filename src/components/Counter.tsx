import { useState } from 'react'
import cls from './Counter.module.scss'


export const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(prevState => prevState + 1)
	}

	return (
		<div className={ cls.btn }>
			<div>{ count }</div>
			<button onClick={ increment }>INC</button>
		</div>
	)
}