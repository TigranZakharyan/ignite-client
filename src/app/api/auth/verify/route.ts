import { User } from '@/models'
import connectDB from '@/utils/connectDB'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
	await connectDB()
  const body = await request.json()
	const user = await User.findOne({ number: body.number })
	const key = process.env.PRIVATE_KEY || 'private'

	if(user?.code !== body.code) {
		return NextResponse.json({}, { status: 404 })
	}
	const token = jwt.sign({number: body.number}, key, { algorithm: 'RS256' })
	return NextResponse.json({token})
}

