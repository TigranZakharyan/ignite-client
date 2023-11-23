'use client'
import { PropsWithChildren, useState } from 'react'
import { Footer, Header, SignInModal, UserDataModal, VerifyModal } from './ui'
import { ModalsContext, UserContext } from '@/hooks'
import { ModalsState } from '@/hooks/modalsContext'
import { UserState } from '@/hooks/userContext'

const RootLayout = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<any>({})
	const [modals, setModals] = useState<ModalsState["modals"]>({
		signIn: false,
		verify: false,
		userData: false
	})

	const updateModals = (newState?: Partial<ModalsState["modals"]>) => {
		setModals({...modals, ...newState})
	}

	const updateUser = (newState?: Partial<UserState["user"]>) => {
		setUser({...modals, ...newState})
	}

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			<ModalsContext.Provider value={{ modals, updateModals }}>
				<Header />
				<div className="pt-[74px]">
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