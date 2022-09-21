import { createContext } from 'react'
export interface EPGContextProps {
    title: string,
    setTitle: (title: string) => void,
    subtitle: string,
    setSubtitle: (subtitle: string) => void,
    description: string,
    setDescription: (description: string) => void,
    backgroundImage: string,
    setBackgroundImage: (backgroundImage: string) => void,
    channelsInfo: any,
    setChannelsInfo: (channelsInfo: any) => void,
}

export const EPGContext = createContext({} as EPGContextProps)