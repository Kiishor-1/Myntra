import React, { useEffect, useState } from 'react';
import './Carousel.css';
import img1 from '../../assets/images/s1.png'
import img2 from '../../assets/images/s2.png'
import img3 from '../../assets/images/s3.png'
import img4 from '../../assets/images/s4.png'


const Carousel = () => {
    const images = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToPage = (pageNumber) => {
        setCurrentIndex(pageNumber);
    }

    useEffect(()=>{
        setTimeout(() => {
            if (images.length-1 > currentIndex)
                setCurrentIndex(currentIndex + 1);
            else
                setCurrentIndex(0);
        }, 3000);
    }, [currentIndex]);

    return (
        <div className="text-center w-[100%]" id='carousel'>
            <div className=" w-[100%]">
                {/* <button className='text-3xl text-white' onClick={goToPrevSlide}>&lt;Prev</button> */}
                <div className="slide-container">
                    <div
                        className="slides"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`slide ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <button className='text-3xl text-white' onClick={goToNextSlide}>Next&gt;</button> */}
            </div>
            <div className="pagination">
                {
                    images.map((img, idx) => (
                        <div key={idx} className={currentIndex === idx ? ('pagination-dot active') : ('pagination-dot')} onClick={() => goToPage(idx)}></div>
                    ))
                }
            </div>
        </div>
    );
};

export default Carousel;