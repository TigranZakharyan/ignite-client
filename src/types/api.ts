export type LoginReq = {
	phoneNumber: string
}

export type LoginRes = {
	status: boolean
}

export type VerifyReq = {
	phoneNumber: string,
	code: string
}

export type VerifyRes = {
	firstName: string,
	lastName: string,
	city: string,
	marketAddr: string,
	officialName: string,
	marketNumber: string,
	code: string
}

export type UserDataReq = {
	firstName: string,
	lastName: string,
	city: string,
	marketAddr: string,
	officialName: string,
	marketNumber: string
}

export type UserDataRes = {
	firstName: string,
	lastName: string,
	city: string,
	marketAddr: string,
	officialName: string,
	marketNumber: string,
	phoneNumber: string,
	code: string
}