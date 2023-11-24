import { User } from '@/models'
import { Token } from '@/utils'
import connectDB from '@/utils/connectDB'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		await connectDB()
		const cookieStore = cookies()
		const token = cookieStore.get('token')
		
		if(!token) {
			return NextResponse.json({ success: false }, { status: 401 })
		}

		const payload = Token.verify(token.value)

		const user = await User.findById(payload.id)
		
		return NextResponse.json(user)
	} catch (err) {
		return NextResponse.json({ success: false }, { status: 400 })
	}
}