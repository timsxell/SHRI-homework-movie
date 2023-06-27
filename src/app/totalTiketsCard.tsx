import styles from './page.module.css'

export default function TotalTiketsCard({
    totalNumber,
} : {
    totalNumber: number,
}){
    
    return(
        <div className={styles.totalTiketsCard}>
                <p className={styles.totalTiketsCardText}>Итого билетов:</p>
                <span className={styles.totalTiketsCardCounter}>{totalNumber}</span>
        </div>
    )
}
