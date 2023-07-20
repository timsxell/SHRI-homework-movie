'use client'

import styles from './styles.module.css';
import { selectTotalTicketsAmount } from "@/redux/features/shoppingCart/selector";
import { useSelector } from "react-redux";



export default function TotalTiketsCard(){

    const totalAmount = useSelector((state) => selectTotalTicketsAmount(state));

    
    return(
        <div className={styles.totalTiketsCard}>
                <p className={styles.totalTiketsCardText}>Итого билетов:</p>
                <span className={styles.totalTiketsCardCounter}>{totalAmount}</span>
        </div>
    )
}
