'use client'
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import React from 'react';
import { createPortal }from 'react-dom';

export function DropDownContent({
    children,
    coords,
    updateCoords
} : {

}){

    useEffect(() => {
        window.addEventListener("resize", updateCoords);
        return () => window.removeEventListener("resize", updateCoords);
      }, []);

      return (
        <div className={styles.dropdown2} style={{ ...coords }}>
                <div>TRYTRY</div>
        </div>
      );
}

const btnRef = React.createRef(); //?is it the right position in code?

export function SelectComponent({
    options,
    initialText
} : {
    options: Array<string>,
    initialText: string
}){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    const [coords, setCoords] = useState({}); // takes current button coordinates

    const updateDropdownCoords = button => {
        const rect = button.getBoundingClientRect();
        setCoords({
                left: rect.x + rect.width, // add half the width of the button for centering
                top: rect.y + rect.height*2 + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

    return (
        <div>
          <div className="select" ref={btnRef} onClick={e => {
                    updateDropdownCoords(e.target);
                    handleSelectClick();
                    }} >
            <span>{selectedOption || 'Select an option'}</span>
          </div>
          {isOpen && createPortal(
            <DropDownContent coords={coords} updateCoords={updateDropdownCoords} />,
            document.body)}
            </div>
            )
          }
                /*
              <div className={styles.dropdown} style={{ zIndex: 9999 }}>
                <div className={styles.option} onClick={() => handleOptionClick('Option 1')}>
                  Option 1
                </div>
                <div className={styles.option} onClick={() => handleOptionClick('Option 2')}>
                  Option 2
                </div>
                <div className={styles.option} onClick={() => handleOptionClick('Option 3')}>
                  Option 3
                </div>
              </div>,
              document.body.querySelector('#sideSearchContainer')
            )}
            */
        
     //);

//}

export default function SideSearch({

} : {

}){

    

    return(
        <div className={styles.sideSearch} id='sideSearchContainer'>
            <p><b>Фильтр поиска</b></p>
            <SelectComponent />
            <p>sssss</p>
            <p>dddd</p>
            <p>12345</p>
        </div>
    )
}
