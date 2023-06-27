import styles from './page.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
      <footer className={styles.footer}>
        <Link href={'/question'}>Вопросы-ответы</Link>
        <Link href={'/aboutus'}>О нас</Link>
      </footer>
    )
  }
