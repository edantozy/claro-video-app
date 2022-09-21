import React, { RefObject, useContext, useEffect, useRef, useState } from 'react'
import { FixedSizeGrid, FixedSizeGrid as Grid, GridOnScrollProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import { generateTimelineHours } from '../../../helpers'
import { EPGContext } from '../../../context/epg'
import { getChannelsInfo } from '../../../services'
import { ChannelList } from '.'

import styles from './EPGContent.module.scss'

const timeline = generateTimelineHours('20:00:00')

export const EPGContent = () => {
    const [scroll, setScroll] = useState({ scrollLeft: 0, scrollTop: 0 })
    const gridRef: RefObject<FixedSizeGrid<any>> = React.createRef()
    const { current } = useRef(useContext(EPGContext))
    const { channelsInfo } = useContext(EPGContext)

    const handleScroll = (e: GridOnScrollProps) => setScroll({ scrollLeft: e.scrollLeft, scrollTop: e.scrollTop })

    useEffect(() => {
        const fetchData = async () => {
            const { response } = await getChannelsInfo()
            current.setChannelsInfo(response)
        }
        fetchData()
    }, [current])

    return (
        <div className={styles.epg_content}>
            <div className={styles.timeline}>
                <div style={{ textAlign: 'center', width: '210px' }}>HOY</div>
                <div className={styles.timeline_scrollable}>
                    <div className={styles['timeline_cell-container']} style={{ transform: `translate(-${scroll.scrollLeft}px, 0px)` }}>
                        {timeline.map((hour, index) => (
                            <div key={index} className={styles['timeline_cell']}>
                                {hour.substring(0, 5)}hrs
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles['channel-sidebar']}>
                <div className={styles['channel-sidebar_list']} style={{ transform: `translate(0px, -${scroll.scrollTop}px)` }}>
                    <ul>
                        {
                            (channelsInfo.channels) ?
                                channelsInfo.channels.map((channel: any, index: number) => (
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
                                )) : null
                        }
                    </ul>
                </div>
            </div>
            <div className={styles['tv-grid']}>
                <div className={styles['tv-grid_column']}>
                    <div style={{ position: 'absolute', top: '26px', left: '210px', width: 'calc(100vw - 210px)', height: 'calc(100% - 26px)' }}>
                        <AutoSizer>
                            {({ height, width }) => (
                                <Grid onScroll={handleScroll} itemData={channelsInfo.channels} className={styles.Grid} ref={gridRef} columnCount={1} columnWidth={100} height={height} rowCount={channelsInfo.channels.length | 0} rowHeight={parseInt('106px', 10)} width={width}>
                                    {ChannelList}
                                </Grid>
                            )}
                        </AutoSizer>
                    </div>
                    <div className={styles['resize-triggers']}>

                    </div>
                </div>
            </div>
        </div>
    )
}