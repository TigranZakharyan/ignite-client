import { Button, Input, Modal } from '@/components'
import { ModalsContext } from '@/hooks'
import { useContext, useEffect, useState } from 'react'

const UserDataModal = () => {
	const { modals, updateModals } = useContext(ModalsContext)

	const handleClose = () => {
		updateModals({ userData: false })
	}

	const handleSubmit = () => {
		updateModals({ signIn: false, verify: true })
	}

  useEffect(() => {
    if (modals.userData) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-auto');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modals.userData]);

	return (
		<Modal
			title="Լրացրեք ձեր պրոֆիլը"
			subTitle="Կայքից օգտվելու համար մուտքագրեք ձեր անձնական տվյալները"
			open={modals.userData}
		>
			<form>
				<Input 
					label="Անուն" 
					required
				/>
				<Input 
					label="Ազգանուն" 
					required
				/>
				<Input 
					label="Քաղաք" 
					required
				/>
				<Input 
					label="Խանութի հասցե" 
					required
				/>
				<Input 
					label="Իրավական անձի անունը" 
					required
				/>
				<Input 
					label="Վաճառքի կետի համարը" 
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