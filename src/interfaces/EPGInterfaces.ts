export interface EPGProps {
    children: React.ReactNode
}

export interface EPGContextProps {
    title: string,
    setTitle: (title: string) => void,
    subtitle: string,
    setSubtitle: (subtitle: string) => void,
    description: string,
    setDescription: (description: string) => void,
    backgroundImage: string,
    setBackgroundImage: (backgroundImage: string) => void,
}