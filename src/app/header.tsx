import styles from './page.module.css'
import { BasketIcon } from './icons'
import Link from 'next/link'

export default function Header({
  count,
  color
} : {
  count: number,
  color: string
}){
  return(
    <header className = {styles.header}>
      <Link href={'/'}><h1>Билетопоиск</h1></Link>
      <div className={styles.countAndBasket}>
        {count <=0 
                ? (<div className={styles.countBadge} style={{visibility: 'hidden'}}>{count}</div>)
                : (<div className={styles.countBadge} >{count}</div>)}
                <Link href={'/basket'}><BasketIcon color={color}/></Link>
      </div>
    </header>
  )
}
