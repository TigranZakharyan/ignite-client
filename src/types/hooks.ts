import { UserDataRes } from '.'

export type ModalsState = {
	modals: {
		[key: string]: boolean,
	},
	updateModals: (newState?: { [key: string]: boolean }) => unknown
}

export type UserState = {
	user: Partial<UserDataRes & {
		isLoggedIn: boolean
	}>,
	updateUser: (newState?: Partial<UserState["user"]>) => unknown,
	deleteUser: () => void
}