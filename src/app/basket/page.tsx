import Image from 'next/image'
import styles from './styles.module.css'
import BigFilmCard from '@/app/components/bigFilmCard/bigFilmCard'
import ReviewCard from '@/app/components/reviewCard/reviewCard'
import FilmCardInShoppingCart from '@/app/components/filmCardInShoppingCart/filmCardInShoppingCart'
import TotalTiketsCard from '@/app/components/totalTiketsCard/totalTiketsCard'

import {movies} from "@/data/movies"


export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.basketPageContentContainer}>
        <div className={styles.basketPageCatalogContainer}>
          <FilmCardInShoppingCart id={movies[0].id} filmName={movies[0].title} genre={movies[0].genre} image={movies[0].posterUrl} />
          <FilmCardInShoppingCart id={movies[1].id} filmName={movies[1].title} genre={movies[1].genre} image={movies[1].posterUrl} />
          <FilmCardInShoppingCart id={movies[2].id} filmName={movies[2].title} genre={movies[2].genre} image={movies[2].posterUrl} />
          
        </div>
      </div>
      <TotalTiketsCard />
    </div>
  )}

    