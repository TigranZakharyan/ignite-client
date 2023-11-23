import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Button, Input, Modal } from '@/components'
import { ModalsContext } from '@/hooks'
import { request } from '@/utils'

const SignInModal = () => {
	const [number, setNumber] = useState<string>('')
	const { modals, updateModals } = useContext(ModalsContext)

	const handleClose = () => {
		updateModals({ signIn: false })
	}

	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		try {
			await request.post("/auth/number", { number })
			updateModals({ signIn: false, verify: true })
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setNumber(value)

	return (
		<Modal
			title="Մուտք գործեք կամ գրանցվեք"
			open={modals.signIn}
			onClose={handleClose}
		>
			<form>
				<Input 
					label="Հեռախոսահամար" 
					placeholder="Մուտքագրեք համարը" 
					value={number}
					onChange={handleChange}
					type="number" 
				/>
				<Button 
					variant="dark" 
					className="w-full"
					onClick={handleSubmit}
				>Շարունակել</Button>
			</form>
		</Modal>
	)
}

export default SignInModal