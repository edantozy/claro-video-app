import { createContext } from 'react'

export interface ContextProps { // Context Component Properties
    modalOpen: boolean,
    openModal: () => void,
    closeModal: () => void
}

export const UIContext = createContext({} as ContextProps)