import { verify } from '@/api'
import { Button, Input, Modal } from '@/components'
import { ModalsContext, UserContext } from '@/hooks'
import { ChangeEvent, FormEvent, useCallback, useContext, useState } from 'react'

const VerifyModal = () => {
	const [code, setCode] = useState<string>('')
	const { modals, updateModals } = useContext(ModalsContext)
	const { user, updateUser } = useContext(UserContext)

	const handleClose = useCallback(() => {
		updateModals({ verify: false })
	}, [updateModals])

	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		try {
			if(user?.phoneNumber) {
				const data = await verify({ code, phoneNumber: user.phoneNumber })
				updateUser({ isLoggedIn: true })
				if(!data?.firstName) {
					updateModals({ verify: false, userData: true })
				} else {
					updateUser(data)
					updateModals({ verify: false })
				}
			}
		} catch (err) {
			console.log(err)
		}
	}

	const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
		setCode(target.value)
	}, [])

	return (
		<Modal
			title="Մուտքագրեք կոդը"
			subTitle="Կոդ ուղարկել ենք համարին"
			open={modals.verify}
			onClose={handleClose}
		>
			<form>
				<Input 
					label="Կոդը sms-ից" 
					placeholder="Մուտքագրեք կոդը"
					value={code}
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

export default VerifyModal