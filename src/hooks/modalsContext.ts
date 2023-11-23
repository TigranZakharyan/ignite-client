import { createContext } from 'react';

export type ModalsState = {
	modals: {
		signIn: boolean,
		verify: boolean,
		userData: boolean
	},
	updateModals: (newState?: Partial<ModalsState["modals"]>) => unknown
}

const defaultState: ModalsState = {
	modals: {
		signIn: false,
		verify: false,
		userData: false
	},
  updateModals: (newState?: Partial< ModalsState["modals"]>) => {},
};

const ModalsContext = createContext<ModalsState>(defaultState)

export default ModalsContext