import { Button, Input, Modal, SubTitle, Title } from '@/components'
import { ModalsContext } from '@/hooks'
import { useContext } from 'react'

const SignInModal = () => {
	const { state, updateState } = useContext(ModalsContext)

	const handleClose = () => {
		updateState({ signIn: false })
	}

	const handleSubmit = () => {
		updateState({ signIn: false, verify: true })
	}

	return (
		<Modal
			title="Մուտք գործեք կամ գրանցվեք"
			open={state.signIn}
			onClose={handleClose}
		>
			<Input 
				label="Հեռախոսահամար" 
				placeholder="Մուտքագրեք համարը" 
				type="number" 
			/>
			<Button 
				variant="dark" 
				className="w-full"
				onClick={handleSubmit}
			>Շարունակել</Button>
		</Modal>
	)
}

export default SignInModal