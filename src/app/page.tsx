import Image from 'next/image'
import styles from './page.module.css'
import QuestionBlock from './components/questionBlock/questionBlock'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import BigFilmCard from './components/bigFilmCard/bigFilmCard'
import ReviewCard from './components/reviewCard/reviewCard'
import AboutUsCard from './components/aboutUsCard/aboutUsCard'
import FilmCardInShoppingCart from './components/filmCardInShoppingCart/filmCardInShoppingCart'
import DropDown from './components/dropDown/dropDown'
import FilmCardInMain from './components/filmCardInMain/filmCardInMain'

import {movies} from "@/data/movies"


export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <Header count={5} color='#FFF'/>
      <div className={styles.mainPageContentContainer}>
        <div className={styles.sideSearch}>
          {/* cistom dropdown menu */}
          <DropDown />
        </div>
      
        <div className={styles.mainPageCatalogContainer}>
          <FilmCardInMain id={movies[0].id} filmName={movies[0].title} genre={movies[0].genre} image={movies[0].posterUrl} />
          <FilmCardInMain id={movies[1].id} filmName={movies[1].title} genre={movies[1].genre} image={movies[1].posterUrl} />
          <FilmCardInMain id={movies[2].id} filmName={movies[2].title} genre={movies[2].genre} image={movies[2].posterUrl} />
          <FilmCardInMain id={movies[3].id} filmName={movies[3].title} genre={movies[3].genre} image={movies[3].posterUrl} />
          <FilmCardInMain id={movies[4].id} filmName={movies[4].title} genre={movies[4].genre} image={movies[4].posterUrl} />
          <FilmCardInMain id={movies[5].id} filmName={movies[5].title} genre={movies[5].genre} image={movies[5].posterUrl} />
          <FilmCardInMain id={movies[6].id} filmName={movies[6].title} genre={movies[6].genre} image={movies[6].posterUrl} />
          <FilmCardInMain id={movies[7].id} filmName={movies[7].title} genre={movies[7].genre} image={movies[7].posterUrl} />
          <FilmCardInMain id={movies[8].id} filmName={movies[8].title} genre={movies[8].genre} image={movies[8].posterUrl} />
          <FilmCardInMain id={movies[9].id} filmName={movies[9].title} genre={movies[9].genre} image={movies[9].posterUrl} />
          <FilmCardInMain id={movies[10].id} filmName={movies[10].title} genre={movies[10].genre} image={movies[10].posterUrl} />
          <FilmCardInMain id={movies[11].id} filmName={movies[11].title} genre={movies[11].genre} image={movies[11].posterUrl} />

        </div>
        
      </div>
      <Footer/>
    </div>
  )}

    