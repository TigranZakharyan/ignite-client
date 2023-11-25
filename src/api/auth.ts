import { LoginReq, LoginRes, VerifyReq, VerifyRes } from '@/types'
import { request } from '@/utils'

export const login = async (dto: LoginReq): Promise<LoginRes> => {
	const { data } = await request.post<LoginRes>("/auth/login", dto)
	return data
}

export const verify = async (dto: VerifyReq): Promise<VerifyRes> => {
	await request.post<{token: string}>("/auth/verify",dto)
	const { data } = await request.get<VerifyRes>("/user/me")
	console.log(data)
	return data
}

export const logout = async () => {
	const { data } =await request.post("/auth/logout")
	return data
}