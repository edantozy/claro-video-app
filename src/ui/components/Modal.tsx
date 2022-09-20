import { FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
import styles from './Modal.module.scss'

interface Props {
    children: React.ReactNode,
    className?: string
}

export const Modal: FC<Props> = ({ children }) => {
    const { modalOpen } = useContext(UIContext)

    return (
        <div className={`${styles.modal} ${modalOpen && styles.show}`}>{children}</div>
    )
}
