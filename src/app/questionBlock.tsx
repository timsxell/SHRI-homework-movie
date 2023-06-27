'use client'


import styles from './page.module.css'
import React, { useState } from 'react';


export const COLORS = {
    DARK_GREY: "#333333",
    LIGHT_GREY: "#999FA6"
  
  };
  
  export function DropDownIcon(
    {isDroppedDown, 
    color }
    : {
      isDroppedDown:boolean, 
      color: string
    })
    {
      //icon arrow pointing down
      if(!isDroppedDown){
        return(<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 30.3334H20C27.24 30.3334 30.3334 27.2401 30.3334 20.0001V12.0001C30.3334 4.76008 27.24 1.66675 20 1.66675H12C4.76002 1.66675 1.66669 4.76008 1.66669 12.0001V20.0001C1.66669 27.2401 4.76002 30.3334 12 30.3334ZM3.66669 12.0001C3.66669 5.85341 5.85335 3.66675 12 3.66675H20C26.1467 3.66675 28.3334 5.85341 28.3334 12.0001V20.0001C28.3334 26.1467 26.1467 28.3334 20 28.3334H12C5.85335 28.3334 3.66669 26.1467 3.66669 20.0001V12.0001ZM15.2933 19.5868C15.4933 19.7868 15.7467 19.8801 16 19.8801C16.2533 19.8801 16.5067 19.7868 16.7067 19.5868L21.4133 14.8801C21.8 14.4934 21.8 13.8534 21.4133 13.4668C21.0267 13.0801 20.3867 13.0801 20 13.4668L16 17.4668L12 13.4668C11.6133 13.0801 10.9733 13.0801 10.5867 13.4668C10.2 13.8534 10.2 14.4934 10.5867 14.8801L15.2933 19.5868Z" fill={color}/>
        </svg>)
      }
      //icon arrow pointing up
      else{
        return(
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1 -1)" >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 30.3334H20C27.24 30.3334 30.3334 27.2401 30.3334 20.0001V12.0001C30.3334 4.76008 27.24 1.66675 20 1.66675H12C4.76002 1.66675 1.66669 4.76008 1.66669 12.0001V20.0001C1.66669 27.2401 4.76002 30.3334 12 30.3334ZM3.66669 12.0001C3.66669 5.85341 5.85335 3.66675 12 3.66675H20C26.1467 3.66675 28.3334 5.85341 28.3334 12.0001V20.0001C28.3334 26.1467 26.1467 28.3334 20 28.3334H12C5.85335 28.3334 3.66669 26.1467 3.66669 20.0001V12.0001ZM15.2933 19.5868C15.4933 19.7868 15.7467 19.8801 16 19.8801C16.2533 19.8801 16.5067 19.7868 16.7067 19.5868L21.4133 14.8801C21.8 14.4934 21.8 13.8534 21.4133 13.4668C21.0267 13.0801 20.3867 13.0801 20 13.4668L16 17.4668L12 13.4668C11.6133 13.0801 10.9733 13.0801 10.5867 13.4668C10.2 13.8534 10.2 14.4934 10.5867 14.8801L15.2933 19.5868Z" fill={color}/>
        </svg>
        )
      }
    }
  export default function QuestionBlock({
    textQuestion, 
    textAnswer
  } : {
    textQuestion: string,
    textAnswer: string
  }) {

  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleArrowClick = () => {
    setIsDroppedDown(!isDroppedDown);
  };

  if(!isDroppedDown){
    return(
      <div className={styles.questionSmall}>
        <h2>{textQuestion}</h2>
        <div className={styles.svgWrapper} onClick={handleArrowClick}>
        <DropDownIcon isDroppedDown = {false} color= {COLORS.DARK_GREY} />
        </div>
      </div>
    )
  }
  else{
    return (
      <div className={styles.questionBig}>
        <div>
        <h2>{textQuestion}</h2>
        <div className={styles.svgWrapper} onClick={handleArrowClick}>
        <DropDownIcon isDroppedDown = {true} color= {COLORS.DARK_GREY}/>
        </div>
        </div>
        <p>{textAnswer}</p>
      </div>
    )
  }
    /*
  <div className={isDroppedDown ? styles.questionBig : styles.questionSmall}>
      <h2>{textQuestion}</h2>
      <DropDownIcon
        color={COLORS.DARK_GREY}
        onClick={handleArrowClick}
        isDroppedDown={isDroppedDown}
      />
      {isDroppedDown && <p>{textAnswer}</p>}
    </div>)
    */

  
    
    
    
  }