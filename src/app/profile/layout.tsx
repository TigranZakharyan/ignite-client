'use client'
import { ProfileLayout } from '@/layouts'
import { PropsWithChildren } from 'react'

const Profile = ({ children }: PropsWithChildren) => {
	return <ProfileLayout>{children}</ProfileLayout>
}

export default Profile