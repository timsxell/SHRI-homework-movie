'use client'
import styles from './page.module.css'
import { useState } from 'react';
import Select from 'react-select'

export default function DropDown () {
    
    const genreOptions = [
        {
            value: 'horror',
            label: 'Ужасы',
        },
        {
            value: 'fantasy',
            label: 'Фэнтези',
        },
        {
            value: 'action',
            label: 'Боевик',
        },
        {
            value: 'comedy',
            label: 'Комедия',
        },
        
    ]
    
    const cinemaOptions = [
        {
            value: 'cinema1',
            label: 'Кинотеатр1',
        },
        {
            value: 'cinema2',
            label: 'Кинотеатр2',
        },
        {
            value: 'cinema3',
            label: 'Кинотеатр3',
        },
        {
            value: 'cinema4',
            label: 'Кинотеатр4',
        },
        
    ]
    
    const [name, setName] = useState('')
    
    const getFilm = () => {
        
        console.log(name)
    }
    
    
    getFilm()
    return (
       
        <div className={styles.dropdown}>
            <div className={styles.dropdownTitle}>Фильтр поиска</div>
            <div className={styles.filterElement}>
                <form>
                    <p className={styles.filterElementName}>Название</p>
                    <input className={styles.filterFormInput} placeholder='Введите название' onChange={e => setName (e.target.value)} value={name} />
                </form>
            </div>
            <div className={styles.filterElement}>
                <p className={styles.filterElementName}>Жанр</p>
                <div>
                    <Select options={genreOptions} placeholder='Выберите Жанр' />
                </div>
            </div>
            <div className={styles.filterElement}>
                <p className={styles.filterElementName}>Кинотеатр</p>
                <div>
                    <Select options={cinemaOptions} placeholder='Выберите Кинотеатр'/>
                </div>
            </div> 
        </div>
    )
}
