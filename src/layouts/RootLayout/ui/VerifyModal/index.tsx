import { Button, Input, Modal } from '@/components'
import { ModalsContext } from '@/hooks'
import { useContext } from 'react'

const VerifyModal = () => {
	const { state, updateState } = useContext(ModalsContext)

	const handleClose = () => {
		updateState({ verify: false })
	}

	const handleSubmit = () => {
		updateState({ verify: false, userData: true })
	}

	return (
		<Modal
			title="Մուտքագրեք կոդը"
			subTitle="Կոդ ուղարկել ենք համարին"
			open={state.verify}
			onClose={handleClose}
		>
			<Input 
				label="Կոդը sms-ից" 
				placeholder="Մուտքագրեք կոդը" 
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

export default VerifyModal