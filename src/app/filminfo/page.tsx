import Image from 'next/image'
import styles from '../page.module.css'
import QuestionBlock from '../questionBlock'
import Footer from '../footer'
import Header from '../header'
import BigFilmCard from '../bigFilmCard'
import ReviewCard from '../reviewCard'
import AboutUsCard from '../aboutUsCard'
import FilmCardInShoppingCart from '../filmCardInShoppingCart'
import SideSearch from '../sideSearch'

import unknown from "@/../public/profile_unavailable.jpeg"

import { movies, reviews } from '@/data/movies'

export default function Home() {
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

    /*
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
*/
