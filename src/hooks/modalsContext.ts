import { createContext } from 'react';

export type ModalsState = {
	state: {
		signIn: boolean
	},
	updateState: (newState?: ModalsState["state"]) => unknown
}

const defaultState: ModalsState = {
	state: {
		signIn: false
	},
  updateState: (newState?: ModalsState["state"]) => {},
};

const ModalsContext = createContext<ModalsState>(defaultState)

export default ModalsContext