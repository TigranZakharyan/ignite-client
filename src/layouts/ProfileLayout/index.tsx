'use client'
import { useContext } from 'react'
import { SideBar } from './ui'
import { UserContext } from '@/hooks'
import { redirect } from 'next/navigation'

const ProfileLayout = () => {
	const { user } = useContext(UserContext)

	if(!user.isLoggedIn) {
		redirect('/')
	}

	return (
		<main className="py-16 bg-white-light">
			<div className="container flex gap-11">
				<SideBar />
			</div>
		</main>
	)
}

export default ProfileLayout