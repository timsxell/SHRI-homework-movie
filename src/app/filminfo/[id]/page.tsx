import Image from 'next/image'
import styles from './styles.module.css'
import QuestionBlock from '@/app/components/questionBlock/questionBlock'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import BigFilmCard from '@/app/components/bigFilmCard/bigFilmCard'
import ReviewCard from '@/app/components/reviewCard/reviewCard'
import AboutUsCard from '../../components/aboutUsCard/aboutUsCard'
import FilmCardInShoppingCart from '@/app/components/filmCardInShoppingCart/filmCardInShoppingCart'
//import SideSearch from '@/app/components/sideSearch'

import unknown from "@/../public/profile_unavailable.jpeg"

import { movies, reviews } from '@/data/movies'

export default function Home( { params } : { params : { id : string } } ) {
  return (
    <div className={styles.mainPageContainer}>
      <Header count={5} color='#FFF'/>
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
      <Footer/>
    </div>
  )}
