import { User } from '@/models'
import { generateCode } from '@/utils'
import connectDB from '@/utils/connectDB'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	await connectDB()
  const body = await request.json()
	const code = generateCode()

	const isUser = await User.findOne({ number: body.number })

	if(!isUser) {
		await User.create({ number: body.number })
	}

	await User.findOneAndUpdate({ number: body.number }, { code })

  return NextResponse.json({})
}

