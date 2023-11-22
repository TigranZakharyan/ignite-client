import { createContext } from 'react';

export type ModalsState = {
	state: {
		signIn: boolean,
		verify: boolean,
		userData: boolean
	},
	updateState: (newState?: Partial<ModalsState["state"]>) => unknown
}

const defaultState: ModalsState = {
	state: {
		signIn: false,
		verify: false,
		userData: false
	},
  updateState: (newState?: Partial< ModalsState["state"]>) => {},
};

const ModalsContext = createContext<ModalsState>(defaultState)

export default ModalsContext