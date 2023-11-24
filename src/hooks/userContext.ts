import { UserDataRes } from '@/types';
import { createContext } from 'react';

export type UserState = {
	user: Partial<UserDataRes & {
		isLoggedIn: boolean
	}>,
	updateUser: (newState?: Partial<UserState["user"]>) => unknown
}

const defaultState: UserState = {
	user: {
		city: '',
		code: '',
		firstName: '',
		lastName: '',
		marketAddr: '',
		marketNumber: '',
		officialName: '',
		phoneNumber: '',
		isLoggedIn: false
	},
  updateUser: (newState?: Partial< UserState["user"]>) => {},
};

const UserContext = createContext<UserState>(defaultState)

export default UserContext