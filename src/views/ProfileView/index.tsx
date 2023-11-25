'use client'
import { Button, Input } from '@/components'
import { UserContext } from '@/hooks'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'

const ProfileView = () => {
	const { user, updateUser } = useContext(UserContext)
	const [loading, setLoading] = useState<boolean>(false)
	const [form, setForm] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		phoneNumber: user.phoneNumber,
		email: user.email || ''
	})

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { value, dataset: { id } } = target
		setForm({ ...form, [id as string]: value })
	}

	const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	return (
		<div className="h-full">
			<form className="grid lg:grid-cols-2 grid-cols-1 gap-x-8">
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
					label="Հեռախոսահամար"
					value={form.phoneNumber}
					data-id="phoneNumber"
					onChange={handleChange}
					maxLength={12}
					minLength={12}
					required
				/>
				<Input 
					label="Email"
					type="email"
					value={form.email}
					data-id="email"
					onChange={handleChange}
					required
				/>
				<div className="mt-8">
					<p className="text-xs text-gray-light mb-2">Խնդրում ենք համոզվել, որ ձեր մուտքագրած տեղեկությունները ճիշտ են, որպեսզի մենք կարողանանք կապ հաստատել ձեզ հետ՝ ձեր պարգևը տրամադրելու համար:</p>
					<Button 
						variant="dark" 
						className="w-full" 
						loading={loading}
						onClick={handleSubmit}
					>Պահպանել</Button>
				</div>
			</form>
		</div>
	)
}

export default ProfileView