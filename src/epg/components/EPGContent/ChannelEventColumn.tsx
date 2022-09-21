import { useContext } from "react"
import { EPGContext } from "../../../context/epg"

import styles from './ChannelEventColumn.module.scss'

const getFormattedHourTime = (time: string) => {
    return time.split(' ').pop()!.substring(0, 5)
}

export const ChannelEventColumn = (props: any) => {
    const data = props.data[props.index]
    const { setTitle, setSubtitle, setDescription, setBackgroundImage } = useContext(EPGContext)
    const handleHover = () => {
        setTitle(data.name)
        setSubtitle(`${getFormattedHourTime(data.date_begin)} a ${getFormattedHourTime(data.date_end)} ${data.duration.split(':')[0]}h ${data.duration.split(':')[1]}m`)
        setDescription((data.description === null) ? 'No hay descripción' : data.description)
        setBackgroundImage(data.image_base_horizontal)
    }
    return (
        <div
            className={styles.channelEventColumn}
            style={{
                ...props.style,

                padding: '5px',
                paddingTop: 0,
                paddingLeft: 0
            }}
        >
            <div onMouseOver={handleHover} style={{ height: '100%', padding: '0.5rem', border: '1px solid #434343' }}>
                <h3>{data.name}</h3>
                <small>
                    {data.date_begin} - {data.date_end.split(' ').pop().substr(0, 5)}
                </small>
                <div style={{ position: 'absolute', right: '20px', cursor: 'pointer' }}>...</div>
            </div>
        </div>
    )
}