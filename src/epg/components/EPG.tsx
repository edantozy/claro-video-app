import styles from './EPG.module.scss'
export interface EPGProps {
    children: React.ReactNode
}

export const EPG = ({ children }: EPGProps) => {

    return (
        <div className={styles.epg}>
            {children}
        </div >
    )
}
