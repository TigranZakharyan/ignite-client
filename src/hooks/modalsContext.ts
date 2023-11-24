import { createContext } from 'react';

export type ModalsState = {
	modals: {
		[key: string]: boolean,
	},
	updateModals: (newState?: { [key: string]: boolean }) => unknown
}

const defaultState: ModalsState = {
	modals: {},
  updateModals: (newState?: Partial< ModalsState["modals"]>) => {},
};

const ModalsContext = createContext<ModalsState>(defaultState)

export default ModalsContext