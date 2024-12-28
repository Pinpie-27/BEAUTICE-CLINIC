import { useState } from 'react';
import amitation from './assets/Animation1.svg'
import infor from './data';
export default function MainSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? infor.length - 1 : prevIndex - 1));
      };
    
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === infor.length - 1 ? 0 : prevIndex + 1));
      };
    
    const handleCurrentClick = () => {
        setCurrentIndex(0)
    }
   
    return (
        <>
        <div className="max-w-[73.8125rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] pt-[9.1875rem] mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className='lg:pl-[2.21875rem] max-w-[31.84375rem] lg:text-left text-center'>
                <h3 className="text-large font-semibold text-darkBlue">{infor[currentIndex].h3}</h3>
                <p className="text-base text-darkBlue tracking-tight pt-[.5rem] font-medium">{infor[currentIndex].p}</p>
                <button className='w-[12.5rem] h-[3.6475rem] bg-darkPink rounded-xl text-base text-white font-semibold tracking-tight mt-[2.0625rem]'>More Details</button>
            </div>
            <div className='mt-[1.875rem] lg:mt-0'>
                <img src={amitation} alt="Amitation1" className="object-cover w-full h-full" />
            </div>
        </div>
        <div className='max-w-[4.4375rem] flex justify-between mx-auto pt-[9.0625rem]'>
         <button onClick={handlePrevClick} className='w-[.92625rem] h-[.193125rem] rounded-xl bg-mediumWhite'></button>
            <button onClick={handleCurrentClick} className='w-[1.581875rem] h-[.509375rem] rounded-xl bg-mediumBlue'></button>
            <button onClick={handleNextClick} className='w-[.92625rem] h-[.193125rem] rounded-xl bg-mediumWhite'></button>
        </div>
        </>
    )
}