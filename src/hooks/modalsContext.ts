import { ModalsState } from '@/types';
import { createContext } from 'react';

const defaultState: ModalsState = {
	modals: {},
  updateModals: (newState?: Partial< ModalsState["modals"]>) => {},
};

const ModalsContext = createContext<ModalsState>(defaultState)

export default ModalsContext