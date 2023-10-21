import { ReactNode } from 'react'
import styles from './card.module.scss'
const Card = ({ children, type, className }) => {
  return <div className={`${className} ${styles[type]}`}>{children}</div>
}

export default Card
