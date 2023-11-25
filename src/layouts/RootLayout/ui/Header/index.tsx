'use client'
import { Block, Logo, Star } from '@/lib/Icons'
import Link from 'next/link'
import s from './style.module.css'
import { MenuButton } from './ui'
import { useContext, useState } from 'react'
import { ModalsContext, UserContext } from '@/hooks'
import { ProfileImg } from '@/components'

const Header = () => {
	const { updateModals } = useContext(ModalsContext)
	const { user: { isLoggedIn } } = useContext(UserContext)
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	const openLogin = () => {
		updateModals({ login: true })
	}

	return (
		<header className="h-header w-full fixed z-50 t-0 bg-[white]">
			<nav className="container h-full grid grid-cols-header grid-rows-auto">
				<MenuButton className="col-span-1 xl:hidden" onClick={toggleMenu} />
				<Link href="/" className="col-start-2 col-end-2 hover:fill-gray-dark/[0.9] fill-gray-dark transition">
					<div className="h-full relative flex items-center">
						<Logo />
					</div>
				</Link>
				<div className={`xl:col-start-3 xl:row-start-1 xl:static xl:top-0 xl:bg-transparent bg-white col-start-1 col-end-5 row-start-2 w-full py-3 transition absolute top-header left-0 ${isMenuActive ? s.show : s.hide}`}>
					<ul className="xl:p-0 xl:flex h-full container block justify-center items-center gap-8">
						<li className="xl:py-0 py-3">
							<a href="/#participate" className="hover:text-gray-light transition">Ինչպե՞ս մասնակցել</a>
						</li>
						<li className="xl:py-0 py-3">
							<a href="/#questions" className="hover:text-gray-light transition">Հարցեր եւ պատասխաններ</a>
						</li>
					</ul>
				</div>
				{
					isLoggedIn ? 
					(
						<Link href="/profile" className="col-start-4 col-end-4 row-start-1 flex items-center gap-2">
							<ProfileImg />
							<Star className="fill-text w-3 h-3" />
							<span>0</span>
						</Link>
					) : 
					(
						<button className="col-start-4 col-end-4 row-start-1 flex items-center gap-1 stroke-text hover:stroke-gray-light hover:text-gray-light transition" onClick={openLogin}>
							<Block />
							<span>Մուտք</span>
						</button>
					)
				}
				
			</nav>
		</header>
	)
}

export default Header