import { User } from '@/models'
import { generateCode } from '@/utils'
import connectDB from '@/utils/connectDB'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		await connectDB()
		const { phoneNumber } = await request.json()
		const code = generateCode()

		const isUser = await User.findOne({ phoneNumber })

		if(!isUser) {
			await User.create({ phoneNumber, code })
		} else {
			await User.findOneAndUpdate({ phoneNumber }, { code })
		}

		return NextResponse.json({success: true})
	} catch (err) {
		return NextResponse.json({ success: false }, { status: 400 })
	}
}