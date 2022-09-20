import { useContext } from "react"
import { EPGContext } from "../../context/epg"
import { UIContext } from "../../context/ui"

import styles from "./EPGHeader.module.scss"

export const EPGHeader = () => {
    const { title, subtitle, description } = useContext(EPGContext)
    const { closeModal } = useContext(UIContext)

    console.log(styles.epg_header)

    const imgUrl = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/09/389558-mentalista-finalizara-su-septima-temporada.jpg'

    return (
        <div className={styles.epg_header} style={{ backgroundImage: `url(${imgUrl})` }}>
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