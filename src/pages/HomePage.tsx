import { useContext } from "react"
import { UIContext } from "../context/ui"
import { EPGModal } from "../epg/components"
import { Button } from "../ui/components"

export const HomePage = () => {
    const { openModal } = useContext(UIContext)
    
    return (
        <>
            <section className="container center">
                <Button text="Mostrar EPG" onClick={openModal} />
            </section>
            <EPGModal />
        </>
    )
}
