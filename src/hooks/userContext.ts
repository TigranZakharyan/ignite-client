import { UserState } from '@/types';
import { createContext } from 'react';

const defaultState: UserState = {
	user: {},
  updateUser: (newState?: Partial< UserState["user"]>) => {},
};

const UserContext = createContext<UserState>(defaultState)

export default UserContext