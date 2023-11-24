import { UserDataReq, UserDataRes } from '@/types';
import { request } from '@/utils';
import { AxiosRequestConfig } from 'axios';

export const updateUserData = async (dto: UserDataReq): Promise<UserDataRes> => {
	const { data } = await request.post<UserDataRes>("/user", dto)
	return data
}

export const getUser = async (config?: AxiosRequestConfig): Promise<UserDataRes> => {
	const { data } = await request.get<UserDataRes>("/user/me", config)
	return data
}