import styles from './page.module.css'
import Image from 'next/image';
//import profilePic from '../../public/profile_unavailable.jpeg'

export default function ReviewCard({
    name,
    rating,
    text,
    profilePicture,
    id
} : {
    name: string,
    rating: number,
    text: string,
    profilePicture: string,
    id: string
}){


    return(
        <div className={styles.reviewCard}>
            <Image src = {profilePicture} width = {100} height = {100} alt='profile picture' style={{borderRadius: "8px"}}/>
            <div className={styles.reviewInfo}>
                <div className={styles.nameAndRating}>
                    <p><b>{name}</b></p>
                    <p>Оценка: <b>{rating}</b></p>
                </div>
                <p className={styles.reviewText}>{text}</p>
            </div>
        </div>
    )
}