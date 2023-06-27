import styles from './page.module.css'
import Image from 'next/image';
import { CloseIcon } from './icons';
import Link from 'next/link';
import TicketCountButtons from './ticketCountButtons'

export default function FilmCardInShoppingCart({
    id,
    filmName,
    genre,
    image
} : {
    id: string,
    filmName: string,
    genre: string,
    image: any //typeof Image / URL
}){
    
    return(
        <div className={styles.filmCardInShoppingCart}>
            <Image src = {image} width = {100} height = {120} alt='LOTR' style={{borderRadius: "8px"}} />
            <div className={styles.filmInfoAndTickets}>
                <div>
                    <Link href={'/filminfo'}><p className={styles.filmName}><b>{filmName}</b></p></Link>
                    <p className={styles.genre}><i>{genre}</i></p>
                </div>
                <span className={styles.closeIconContainer}>
                <TicketCountButtons movieId={id}/>
                <CloseIcon color='#333333'/>
                </span>
            </div>
        </div>
    )
}
