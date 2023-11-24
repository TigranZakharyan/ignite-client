'use client'
import { UserContext } from '@/hooks'
import Image from 'next/image'
import { useContext } from 'react'

type Props = {
	large?: boolean,
	dark?: boolean
}

const ProfileImg = (props: Props) => {
	const { user } = useContext(UserContext)
	return (
		<div className={`hover:opacity-60 transition rounded-md flex items-center justify-center
		${props.large ? 'w-14 h-14' : 'w-9 h-9'} 
		${props.dark ? 'bg-text color-white-soft' : 'bg-white-soft'}`}>
			{
				user.firstName ?
				(
					<span className={`uppercase text-center font-bold ${props.large ? 'text-xl' : 'text-lg'}`}>{user.firstName[0]}</span>
				) :
				(
					<Image src="/images/user.png" width={16} height={16} alt="User" />
				)
			}
		</div>
	)
}

export default ProfileImg