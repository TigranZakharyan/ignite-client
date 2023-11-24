'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Footer, Header, SignInModal, UserDataModal, VerifyModal } from './ui'
import { ModalsContext, UserContext } from '@/hooks'
import { ModalsState } from '@/hooks/modalsContext'
import { UserState } from '@/hooks/userContext'

type Props = PropsWithChildren & {
	user: Partial<UserState["user"]>
}

const RootLayout = ({ children, user }: Props) => {
	const [userData, setUserData] = useState<UserState["user"]>({...user})
	const [modals, setModals] = useState<ModalsState["modals"]>({})
	const updateModals = (newState?: { [key: string]: boolean }) => {
		setModals({...modals, ...newState})
	}

	const updateUser = (newState?: Partial<UserState["user"]>) => {
		setUserData({...userData, ...newState})
	}


	useEffect(() => {
		if(userData.isLoggedIn && !userData.firstName) {
			updateModals({ userData: true })
		}
	}, [])

	return (
		<UserContext.Provider value={{ user: userData, updateUser }}>
			<ModalsContext.Provider value={{ modals, updateModals }}>
				<Header />
				<div className="pt-header">
					{children}
				</div>
				<Footer />
				<SignInModal />
				<VerifyModal />
				<UserDataModal />
			</ModalsContext.Provider>
		</UserContext.Provider>
	)
}

export default RootLayout