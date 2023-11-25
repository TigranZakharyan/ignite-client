import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const cookieStore = cookies()
		cookieStore.delete('token')
		return NextResponse.json({success: true}, { 
			headers: {
				'Set-Cookie': '' 
			}
		})
	} catch (err) {
		console.log(err)
		return NextResponse.json({ success: false }, { status: 400 })
	}
}