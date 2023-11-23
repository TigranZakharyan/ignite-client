import { createContext } from 'react';

export type UserState = {
	user: any,
	updateUser: (newState?: Partial<UserState["user"]>) => unknown
}

const defaultState: UserState = {
	user: {},
  updateUser: (newState?: Partial< UserState["user"]>) => {},
};

const UserContext = createContext<UserState>(defaultState)

export default UserContext