import styles from './EPGContent.module.scss'

const channels = [
    {
        name: 'CANAL 3 GT',
        id: 35357,
        image: 'https://clarovideocdn8.clarovideo.net/CVPERU/PELICULAS/CANAL3GT/EXPORTACION_WEB/SS/CANAL3GT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'El mentalista',
                description: 'El mentalista',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'El diario de Noa',
                description: 'El diario de Noa',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    },
    {
        name: 'CANAL 7 GT',
        id: 35358,
        image: 'https://clarovideocdn8.clarovideo.net/CVPERU/PELICULAS/CANAL7GT/EXPORTACION_WEB/SS/CANAL7GT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'Los Simpson',
                description: 'Los Simpson',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'Las aventuras de Tintin',
                description: 'Las aventuras de Tintin',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    },
    {
        name: 'TV AZTECA GT',
        id: 35372,
        image: 'https://clarovideocdn2.clarovideo.net/CVPERU/PELICULAS/TVAZTECAGT/EXPORTACION_WEB/SS/TVAZTECAGT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'La casa de papel',
                description: 'La casa de papel',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'Nosotros los nobles',
                description: 'Nosotros los nobles',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    },
    {
        name: 'CANAL 3 GT',
        id: 35357,
        image: 'https://clarovideocdn8.clarovideo.net/CVPERU/PELICULAS/CANAL3GT/EXPORTACION_WEB/SS/CANAL3GT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'El mentalista',
                description: 'El mentalista',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'El diario de Noa',
                description: 'El diario de Noa',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    },
    {
        name: 'CANAL 7 GT',
        id: 35358,
        image: 'https://clarovideocdn8.clarovideo.net/CVPERU/PELICULAS/CANAL7GT/EXPORTACION_WEB/SS/CANAL7GT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'Los Simpson',
                description: 'Los Simpson',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'Las aventuras de Tintin',
                description: 'Las aventuras de Tintin',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    },
    {
        name: 'TV AZTECA GT',
        id: 35372,
        image: 'https://clarovideocdn2.clarovideo.net/CVPERU/PELICULAS/TVAZTECAGT/EXPORTACION_WEB/SS/TVAZTECAGT_t-290x163.png',
        events: [
            {
                id: 1,
                name: 'La casa de papel',
                description: 'La casa de papel',
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
            },
            {
                id: 2,
                name: 'Nosotros los nobles',
                description: 'Nosotros los nobles',
                date_begin: '2021/08/12 22:02:56',
                date_end: '2021/08/12 23:02:56',
            },
        ]
    }
]

export const EPGContent = () => {
    return (
        <div className={styles.epg_content}>
            <div className={styles.timeline}>
                Hoy
                <div className={styles.timeline_scrollable}>
                    <div className={styles['timeline_cell-container']}>
                        <div className={styles.timeline_cell}>00:00</div>
                        <div className={styles.timeline_cell}>00:00</div>
                        <div className={styles.timeline_cell}>00:00</div>
                        <div className={styles.timeline_cell}>00:00</div>
                        <div className={styles.timeline_cell}>00:00</div>
                        <div className={styles.timeline_cell}>00:00</div>
                    </div>
                </div>
            </div>
            <div className={styles['channel-sidebar']}>
                <div className={styles['channel-sidebar_list']}>
                    <ul>
                        {
                            channels.map((channel, index) => (
                                <div key={index}>
                                    <li>
                                        <div className={styles.channel}>
                                            <div className={styles.channel_id}>
                                                <p>{channel.id}</p>
                                            </div>
                                            <div className={styles.channel_image}>
                                                <img src={channel.image} alt={channel.name} />
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={styles['tv-grid']}>
                <div className={styles['tv-grid_column']}>
                    <div className={styles.channel_programming}>
                        Programación
                    </div>
                </div>
            </div>
        </div>
    )
}