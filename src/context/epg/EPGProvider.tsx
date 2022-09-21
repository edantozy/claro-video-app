import { FC, ReactNode, useReducer } from 'react'
import { EPGContext, epgReducer } from './'

export interface EPGState { // Definition of the state values
    title: string,
    subtitle: string,
    description: string,
    backgroundImage: string,
    channelsInfo: any,
}

interface Props { children: ReactNode }

const EPG_INITIAL_STATE: EPGState = {
    title: 'No title',
    subtitle: 'No subtitle',
    description: 'No description',
    backgroundImage: 'https://clarovideocdn8.clarovideo.net/pregeneracion/cms/apa/531eed34tvfy7b73a818a234/landing_access_background.jpg',
    channelsInfo: [],
}

export const EPGProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(epgReducer, EPG_INITIAL_STATE)

    return (
        <EPGContext.Provider
            value={{
                ...state,
                setTitle: (title: string) => dispatch({ type: '[EPG] - SET_TITLE', payload: title }),
                setSubtitle: (subtitle: string) => dispatch({ type: '[EPG] - SET_SUBTITLE', payload: subtitle }),
                setDescription: (description: string) => dispatch({ type: '[EPG] - SET_DESCRIPTION', payload: description }),
                setBackgroundImage: (backgroundImage: string) => dispatch({ type: '[EPG] - SET_BACKGROUND_IMAGE', payload: backgroundImage }),
                setChannelsInfo: (channelsInfo: any) => dispatch({ type: '[EPG] - SET_CHANNELS_INFO', payload: channelsInfo }),
            }}
        >
            {children}
        </EPGContext.Provider>
    )
}