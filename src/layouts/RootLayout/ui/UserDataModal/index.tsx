import { updateUserData } from '@/api'
import { Button, Input, Modal } from '@/components'
import { ModalsContext, UserContext } from '@/hooks'
import { UserDataReq } from '@/types'
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'

const initialFormState: UserDataReq = {
	firstName: '',
	lastName: '',
	city: '',
	marketAddr: '',
	officialName: '',
	marketNumber: ''
}

const UserDataModal = () => {
	const { modals, updateModals } = useContext(ModalsContext)
	const { updateUser } = useContext(UserContext)
	const [form, setForm] = useState<UserDataReq>(initialFormState)

  useEffect(() => {
    if (modals.userData) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [modals.userData]);

	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
			e.preventDefault()
			try {
				const data = await updateUserData(form)
				updateModals({ userData: false })
				updateUser(data)
			} catch (err) {
				console.log(err)
			}
	}

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { value, dataset: { id } } = target
		setForm({ ...form, [id as string]: value })
	}

	return (
		<Modal
			title="Լրացրեք ձեր պրոֆիլը"
			subTitle="Կայքից օգտվելու համար մուտքագրեք ձեր անձնական տվյալները"
			open={modals.userData}
		>
			<form>
				<Input 
					label="Անուն"
					value={form.firstName}
					data-id="firstName"
					onChange={handleChange}
					required
				/>
				<Input 
					label="Ազգանուն"
					value={form.lastName}
					data-id="lastName"
					onChange={handleChange}
					required
				/>
				<Input 
					label="Քաղաք"
					value={form.city}
					data-id="city"
					onChange={handleChange}
					required
				/>
				<Input 
					label="Խանութի հասցե"
					value={form.marketAddr}
					data-id="marketAddr"
					onChange={handleChange}
					required
				/>
				<Input 
					label="Իրավական անձի անունը"
					value={form.officialName}
					data-id="officialName"
					onChange={handleChange}
					required
				/>
				<Input 
					label="Վաճառքի կետի համարը"
					value={form.marketNumber}
					data-id="marketNumber"
					onChange={handleChange}
					type="number"
					required
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

export default UserDataModal