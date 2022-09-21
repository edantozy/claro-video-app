import { useContext } from 'react'
import { EPGContext } from '../../context/epg'
import { UIContext } from '../../context/ui'

import styles from './EPGHeader.module.scss'

export const EPGHeader = () => {
    const { title, subtitle, description, backgroundImage } = useContext(EPGContext)
    const { closeModal } = useContext(UIContext)

    return (
        <div className={styles.epg_header} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.dark_background}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.subtitle}>
                    <p>{subtitle}</p>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles.close_button} onClick={closeModal}>X</div>
            </div>
        </div>
    )
}