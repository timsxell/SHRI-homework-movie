import Image from 'next/image'
import styles from './styles.module.css'
import QuestionBlock from '@/app/components/questionBlock/questionBlock'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import BigFilmCard from '@/app/components/bigFilmCard/bigFilmCard'
import ReviewCard from '@/app/components/reviewCard/reviewCard'
import AboutUsCard from '@/app/components/aboutUsCard/aboutUsCard'
import FilmCardInShoppingCart from '@/app/components/filmCardInShoppingCart/filmCardInShoppingCart'
import TotalTiketsCard from '@/app/components/totalTiketsCard/totalTiketsCard'
// import SideSearch from '@/app/components/sideSearch'

import {movies} from "@/data/movies"


export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <Header count={5} color='#FFF'/>
      <div className={styles.basketPageContentContainer}>
        <div className={styles.basketPageCatalogContainer}>
          <FilmCardInShoppingCart id={movies[0].id} filmName={movies[0].title} genre={movies[0].genre} image={movies[0].posterUrl} />
          <FilmCardInShoppingCart id={movies[1].id} filmName={movies[1].title} genre={movies[1].genre} image={movies[1].posterUrl} />
          <FilmCardInShoppingCart id={movies[2].id} filmName={movies[2].title} genre={movies[2].genre} image={movies[2].posterUrl} />
          
        </div>
      </div>
      <TotalTiketsCard totalNumber = {8}/>
      <Footer/>
    </div>
  )}

    