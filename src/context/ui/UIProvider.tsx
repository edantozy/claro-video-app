import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState { // Definition of the state values
    modalOpen: boolean
}

interface Props { children: ReactNode }

const UI_INITIAL_STATE: UIState = {
    modalOpen: false
}

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openModal = () => dispatch({ type: '[UI] - OPEN_MODAL' })

    const closeModal = () => dispatch({ type: '[UI] - CLOSE_MODAL' })

    return (
        <UIContext.Provider
            value={{
                ...state,
                openModal,
                closeModal
            }}
        >
            {children}
        </UIContext.Provider>
    )
}