'use client'
import { PropsWithChildren, useState } from 'react'
import { Footer, Header, SignInModal } from './ui'
import { ModalsContext } from '@/hooks'
import { ModalsState } from '@/hooks/modalsContext'

const RootLayout = ({ children }: PropsWithChildren) => {
	const [modals, setModals] = useState<ModalsState["state"]>({signIn: false})

	const handleModals = (newState?: ModalsState["state"]) => {
		setModals({...modals, ...newState})
	}

	return (
		<ModalsContext.Provider value={{ state: modals, updateState: handleModals }}>
			<Header />
			<div className="pt-[74px]">
				{children}
			</div>
			<Footer />
			<SignInModal />
		</ModalsContext.Provider>
	)
}

export default RootLayout