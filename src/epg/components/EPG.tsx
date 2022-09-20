import { EPGProps } from '../../interfaces/EPGInterfaces'

import styles from './EPG.module.scss'

export const EPG = ({ children }: EPGProps) => {
    return (
        <div className={styles.epg}>
            {children}
        </div >
    )
}
