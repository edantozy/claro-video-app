import { FC } from 'react'
import styles from './Button.module.scss'

interface Props {
    text: string,
    onClick?: () => void
}

export const Button: FC<Props> = ({ text, onClick }) => {
    return (
        <div className={styles.button} onClick={onClick}>{text}</div>
    )
}
