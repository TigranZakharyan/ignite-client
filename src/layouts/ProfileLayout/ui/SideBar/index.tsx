'use client'
import { logout } from '@/api'
import { ProfileImg } from '@/components'
import { UserContext } from '@/hooks'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useContext } from 'react'

const SideBar = () => {
	const { deleteUser } = useContext(UserContext)

	const handleLogout = async () => {
		try {
			await logout()
			redirect('/')
			deleteUser()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<section className="md:w-[290px] my-5">
			<div className="bg-white rounded-md shadow">
				<div className="pl-6 pt-6 pr-6 mb-8">
					<ProfileImg large />
					<h4 className="my-3 text-xl">Michael Jackson</h4>
				</div>
				<nav>
					<ul>
						<li className="px-6 py-4 border-t-[1px] border-light-white cursor-pointer">
							<Link href="/profile" className="text-sm">Անձնական տվյալներ</Link>
						</li>
						<li className="px-6 py-4 border-t-[1px] border-light-white cursor-pointer">
							<Link href="/profile/scores" className="text-sm">Մասնակցության պատմություն</Link>
						</li>
						<li className="px-6 py-4 border-t-[1px] border-light-white cursor-pointer">
							<Link href="/profile/receipts" className="text-sm">Անդորրագրեր</Link>
						</li>
						<li className="px-6 py-4 border-t-[1px] border-light-white cursor-pointer">
							<Link href="/profile/orders" className="text-sm">Մրցանակներ</Link>
						</li>
						<li className="px-6 py-4 border-t-[1px] border-light-white cursor-pointer" onClick={handleLogout}>
							<button className="text-sm">Դուրս գալ</button>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default SideBar