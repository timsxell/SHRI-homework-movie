import Image from 'next/image'
import styles from './styles.module.css'
import BigFilmCard from '@/app/components/bigFilmCard/bigFilmCard'
import ReviewCard from '@/app/components/reviewCard/reviewCard'
import FilmCardInShoppingCart from '@/app/components/filmCardInShoppingCart/filmCardInShoppingCart'
//import SideSearch from '@/app/components/sideSearch'

import unknown from "@/../public/profile_unavailable.jpeg"

import { movies, reviews } from '@/data/movies'

export default function Home( { params } : { params : { id : string } } ) {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.filmInfoPageContentContainer}>
        <BigFilmCard id = {movies[0].id } filmName={movies[0].title} genre={movies[0].genre} releaseYear={movies[0].releaseYear} rating={movies[0].rating} director={movies[0].director} description={movies[0].description} imageSource={movies[0].posterUrl}/>
        <div>
          {
            movies[0].reviewIds.map((review) => {
              for(let r of reviews){
                if(r.id == review){
                  return <ReviewCard key={r.id} id={r.id} name={r.name} rating={r.rating} text={r.text} profilePicture={unknown}/>
                }
              }
            })
          }
        </div>
      </div>
    </div>
  )}
