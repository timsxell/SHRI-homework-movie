//import component minus/plus ticket buttons
import styles from './page.module.css'
import Image from 'next/image';
import TicketCountButtons from './ticketCountButtons'

export default function BigFilmCard({
    id,
    filmName,
    genre,
    releaseYear,
    rating,
    director,
    description,
    imageSource
} : {
    id: string,
    filmName: string,
    genre: string,
    releaseYear: number,
    rating: number,
    director: string,
    description: string,
    imageSource: string
}){


    return(
        <div className = {styles.bigFilmCard}>
            <Image src = {imageSource} width = {400} height = {500} alt='LOTR' style={{borderRadius: "8px"}}/>
            <div className={styles.info}>
                <div className={styles.infoUp}>
                    <div className={styles.headingAndTicketButtons}>
                        <h2>{filmName}</h2>
                        <TicketCountButtons movieId={id}/>
                    </div>
                    <div className={styles.infoPoints}>
                        <p><b>Жанр: </b>{genre}</p>
                        <p><b>Год выпуска: </b>{releaseYear}</p>
                        <p><b>Рейтинг: </b>{rating}</p>
                        <p><b>Режиссёр: </b>{director}</p>
                    </div>
                </div>
                <div className={styles.infoDown}>
                    <p className={styles.descHeading}><b>Описание</b></p>
                    <p className={styles.descText}>{description}</p>
                </div>
            </div>
        </div>
    )
}
