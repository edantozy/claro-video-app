import AutoSizer from 'react-virtualized-auto-sizer'
import { VariableSizeList as List } from 'react-window'
import { timeToDecimal } from '../../../helpers'
import { ChannelEventColumn } from '.'


const getItemSize = (index: number, data: any) => {
    const duration = data[index].duration
    return timeToDecimal(duration) * parseInt('280px', 10)
}

export const ChannelList = (props: any) => {
    const data = props.data[props.rowIndex].events
    return (
        <div
            style={{ ...props.style, width: `${48 * 140}px` }}
        >
            <AutoSizer>
                {({ height, width }) => (
                    <List height={height} itemCount={data.length} itemData={data} itemSize={(i: number) => getItemSize(i, data)} layout="horizontal" width={width}>
                        {ChannelEventColumn}
                    </List>
                )}
            </AutoSizer>
        </div>
    )
}