import Image from 'next/image'
import styles from './page.module.css'
import QuestionBlock from './questionBlock'
import Footer from './footer'
import Header from './header'
import BigFilmCard from './bigFilmCard'
import ReviewCard from './reviewCard'
import AboutUsCard from './aboutUsCard'
import FilmCardInShoppingCart from './filmCardInShoppingCart'
import DropDown from './dropDown'
import FilmCardInMain from './filmCardInMain'

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
