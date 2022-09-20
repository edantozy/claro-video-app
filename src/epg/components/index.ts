import { EPG as EPGHOC } from './EPG'
import { EPGHeader } from './EPGHeader'
import { EPGContent } from './EPGContent'

export { EPGModal } from './EPGModal'

export const EPG = Object.assign(EPGHOC, {
    Header: EPGHeader,
    Content: EPGContent,
})