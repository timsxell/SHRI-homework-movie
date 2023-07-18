import Image from 'next/image'
import styles from './styles.module.css'
import QuestionBlock from '@/app/components/questionBlock/questionBlock'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import BigFilmCard from '@/app/components/bigFilmCard/bigFilmCard'
import ReviewCard from '@/app/components/reviewCard/reviewCard'
import AboutUsCard from '../components/aboutUsCard/aboutUsCard'
import FilmCardInShoppingCart from '@/app/components/filmCardInShoppingCart/filmCardInShoppingCart'
//import SideSearch from '@/app/components/sideSearch'



export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <Header count={5} color='#FFF'/>
      <div className={styles.filmInfoPageContentContainer}>
        <AboutUsCard/>
      </div>
      <Footer/>
    </div>
  )}

    