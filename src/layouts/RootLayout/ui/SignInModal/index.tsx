import { Button, Input, Modal, SubTitle, Title } from '@/components'
import { ModalsContext } from '@/hooks'
import { useContext } from 'react'

const SignInModal = () => {
	const { state, updateState } = useContext(ModalsContext)

	const handleClose = () => {
		updateState({ signIn: false })
	}

	return (
		<Modal
			title="Մուտք գործեք կամ գրանցվեք"
			open={state.signIn}
			onClose={handleClose}
		>
			<Input label="Հեռախոսահամար" placeholder="Մուտքագրեք համարը" />
			<Button variant="dark" className="w-full">Շարունակել</Button>
		</Modal>
	)
}

export default SignInModal