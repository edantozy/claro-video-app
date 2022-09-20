import { EPGState } from '.'

type EPGActionType =
    | { type: '[EPG] - SET_TITLE', payload: string }
    | { type: '[EPG] - SET_SUBTITLE', payload: string }
    | { type: '[EPG] - SET_DESCRIPTION', payload: string }
    | { type: '[EPG] - SET_BACKGROUND_IMAGE', payload: string }

export const epgReducer = (state: EPGState, action: EPGActionType): EPGState => {

    switch (action.type) {
        case '[EPG] - SET_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case '[EPG] - SET_SUBTITLE':
            return {
                ...state,
                subtitle: action.payload
            }
        case '[EPG] - SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload
            }
        case '[EPG] - SET_BACKGROUND_IMAGE':
            return {
                ...state,
                backgroundImage: action.payload
            }
        default:
            return state;
    }
}
