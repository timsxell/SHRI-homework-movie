'use client'

import Image from 'next/image'
import styles from './page.module.css'

import BigFilmCard from './components/bigFilmCard/bigFilmCard'
import FilmCardInShoppingCart from './components/filmCardInShoppingCart/filmCardInShoppingCart'
import DropDown from './components/dropDown/dropDown'
import FilmCardInMain from './components/filmCardInMain/filmCardInMain'

import {movieApi, useGetMoviesQuery} from "@/redux/services/movieApi"


export default function Home() {

  const { data, isLoading, error } =  useGetMoviesQuery("movie");

  if(!data && isLoading){
    return(
      <h2>LOADING...</h2>
    )
  }

  if(error){
    return(
      <h2>ERROR</h2>
    )
  }

  if(data){
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.mainPageContentContainer}>
        <div className={styles.sideSearch}>
          {/* cistom dropdown menu */}
          <DropDown />
        </div>
      
        <div className={styles.mainPageCatalogContainer}>
        {data.map((movie: any) => {
          return(
            <FilmCardInMain key = {movie.id} id={movie.id} filmName={movie.title} genre={movie.genre} image={movie.posterUrl} />
          )
        })}
        </div>
        
      </div>
    </div>
  )}
}

    