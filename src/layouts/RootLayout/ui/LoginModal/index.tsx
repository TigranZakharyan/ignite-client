import { ChangeEvent, FormEvent, useCallback, useContext, useState } from 'react'
import { Button, Input, Modal } from '@/components'
import { ModalsContext, UserContext } from '@/hooks'
import { login } from '@/api'

const LoginModal = () => {
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const { modals, updateModals } = useContext(ModalsContext)
	const { updateUser } = useContext(UserContext)

	const handleClose = useCallback(() => {
		updateModals({ login: false })
	}, [updateModals])

	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		try {
			await login({ phoneNumber })
			updateModals({ login: false, verify: true })
			updateUser({ phoneNumber })
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
		const { value } = target
		if (value.startsWith('+374')) {
      setPhoneNumber(value);
    } else if (value === '+37') {
      setPhoneNumber('');
    } else {
      setPhoneNumber('+374' + value);
    }
	}, [])

	return (
		<Modal
			title="Մուտք գործեք կամ գրանցվեք"
			open={modals.login}
			onClose={handleClose}
		>
			<form>
				<Input 
					label="Հեռախոսահամար" 
					placeholder="+374" 
					value={phoneNumber}
					maxLength={12}
					onChange={handleChange}
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

export default LoginModal