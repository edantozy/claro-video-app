import { UIState } from './'

type UIActionType =
    | { type: '[UI] - OPEN_MODAL' }
    | { type: '[UI] - CLOSE_MODAL' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - OPEN_MODAL':
            return {
                ...state,
                modalOpen: true
            }
        case '[UI] - CLOSE_MODAL':
            return {
                ...state,
                modalOpen: false
            }
        default:
            return state;
    }
}
