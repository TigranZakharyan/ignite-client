import connectDB from '@/utils/connectDB'
import { User } from '@/models'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { Token } from '@/utils'

export async function POST(request: NextRequest) {
	try {
		await connectDB()
		const { phoneNumber, code } = await request.json()
		const user = await User.findOne({ phoneNumber })

		if(user?.code != code) {
			return NextResponse.json({success: false}, { status: 400 })
		}
		
		const token = Token.sign(user?._id)

		const cookieStore = cookies()
		cookieStore.set({
			name: 'token',
			value: token,
			httpOnly: true,
			secure: true,
			path: '/'
		})

		return NextResponse.json({}, {
			headers: {
				'Set-Cookie': `token=${token}`
			}
		})
	} catch (err) {
		return NextResponse.json({ success: false }, { status: 400 })
	}
}

