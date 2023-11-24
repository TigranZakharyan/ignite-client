import { User } from '@/models'
import { generateCode } from '@/utils'
import connectDB from '@/utils/connectDB'
import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

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
		const accountSid = process.env.TWILIO_SID
		const authToken = process.env.TWILIO_TOKEN
		const client = twilio(accountSid, authToken)
		console.log(phoneNumber)

		await client.messages
    .create({
      from: process.env.TWILIO_NUMBER,
      to: phoneNumber,
			body: `Your code is ${code}`
    })

		return NextResponse.json({success: true})
	} catch (err) {
		console.log(err)
		return NextResponse.json({ success: false }, { status: 400 })
	}
}