'use client'
import { useState } from 'react'
import s from './style.module.css'

const MenuButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const toggleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsActive(!isActive)
		if(props?.onClick) {
			props.onClick(e)
		}
	}
	return (
		<button {...props} onClick={toggleButton}>
			<ul className={`group w-11 mr-4 self-center cursor-pointer ${isActive && s.active} ${props.className}`}>
				<li className="group-hover:bg-text transition w-full h-1 my-2 rounded-full bg-black"></li>
				<li className="group-hover:bg-text transition w-full h-1 my-2 rounded-full bg-black"></li>
				<li className="group-hover:bg-text transition w-full h-1 my-2 rounded-full bg-black"></li>
			</ul>
		</button>
	)
}

export default MenuButton