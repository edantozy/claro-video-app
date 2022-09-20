import { Modal } from "../../ui/components"
import { EPG } from "."
import { EPGProvider } from "../../context/epg"

export const EPGModal = () => {
    return (
        <EPGProvider>
            <Modal>
                <EPG>
                    <EPG.Header />
                    <EPG.Content />
                </EPG>
            </Modal>
        </EPGProvider>
    )
}
