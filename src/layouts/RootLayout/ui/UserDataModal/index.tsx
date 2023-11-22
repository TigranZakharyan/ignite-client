import { Button, Input, Modal } from '@/components'
import { ModalsContext } from '@/hooks'
import { useContext, useEffect, useState } from 'react'

const UserDataModal = () => {
	const { state, updateState } = useContext(ModalsContext)

	const handleClose = () => {
		updateState({ userData: false })
	}

	const handleSubmit = () => {
		updateState({ signIn: false, verify: true })
	}

  useEffect(() => {
    if (state.userData) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-auto');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [state.userData]);

	return (
		<Modal
			title="Լրացրեք ձեր պրոֆիլը"
			subTitle="Կայքից օգտվելու համար մուտքագրեք ձեր անձնական տվյալները"
			open={state.userData}
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
					label="Հայրանուն" 
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