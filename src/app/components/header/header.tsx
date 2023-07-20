'use client'

import styles from './styles.module.css'
import { BasketIcon } from '../icons'
import Link from 'next/link'
import { selectTotalTicketsAmount } from "@/redux/features/shoppingCart/selector";
import { useSelector } from "react-redux";

export default function Header({
  color
} : {
  color: string
}){

  const totalAmount = useSelector((state) => selectTotalTicketsAmount(state));

  return(
    <header className = {styles.header}>
      <Link href={'/'}><h1>Билетопоиск</h1></Link>
      <div className={styles.countAndBasket}>
        {totalAmount <=0 
                ? (<div className={styles.countBadge} style={{visibility: 'hidden'}}>{totalAmount}</div>)
                : (<div className={styles.countBadge} >{totalAmount}</div>)}
                <Link href={'/basket'}><BasketIcon color={color}/></Link>
      </div>
    </header>
  )
}
