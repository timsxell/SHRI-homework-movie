import styles from './styles.module.css'
import AboutUsCard from '../components/aboutUsCard/aboutUsCard'

export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.filmInfoPageContentContainer}>
        <AboutUsCard />
      </div>
    </div>
  )
}

