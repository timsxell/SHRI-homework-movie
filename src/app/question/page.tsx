import Image from 'next/image'
import styles from './styles.module.css'
import QuestionBlock from '@/app/components/questionBlock/questionBlock'
import QuestionsAndAnswersCard from '@/app/components/questionsAndAnswers/questionsAndAnswers'

export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.questionPageContentContainer}>
        
        <div className={styles.basketPageCatalogContainer}>
          <QuestionsAndAnswersCard/>
          <QuestionBlock textQuestion='Когда был основан билетопоиск?'
            textAnswer='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          <QuestionBlock textQuestion='Когда был основан билетопоиск?'
            textAnswer='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          <QuestionBlock textQuestion='Когда был основан билетопоиск?'
            textAnswer='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
          <QuestionBlock textQuestion='Когда был основан билетопоиск?'
            textAnswer='Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.' />
        </div>
      </div>
    </div>
  )}
