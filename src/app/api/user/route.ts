import { User } from '@/models'
import { Token } from '@/utils'
import connectDB from '@/utils/connectDB'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		await connectDB()
		const body = await request.json()
		const cookieStore = cookies()
		const token = cookieStore.get('token')
		if(!token) {
			return NextResponse.json({ success: false }, { status: 401 })
		}
		const payload = Token.verify(token.value)

		const newUser = await User.findByIdAndUpdate(payload.id, body, { new: true })

		return NextResponse.json(newUser)
	} catch (err) {
		return NextResponse.json({ success: false }, { status: 400 })
	}
}