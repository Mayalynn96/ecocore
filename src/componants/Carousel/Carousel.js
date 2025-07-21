import React, { useState, useEffect } from 'react';
import './Carousel.css'


function Carousel({imgArray}) {
    const [images, setImages] = useState(imgArray)
    const [currentImg, setCurrentImg] = useState(images[0])
    const [selectedBtn, setSelectedBtn] = useState(images[0].id)

    const handleClick = (e) => {
        e.preventDefault()

        for (let i=0; i<images.length; i++){
            if(images[i].id === Number(e.currentTarget.id)){
                
                setCurrentImg(images[i])
            }   
        }
        setSelectedBtn(Number(e.currentTarget.id))
    }

    useEffect(() => {
        setImages(imgArray)
    }, [imgArray]);

    return (
        <div className='carouselDiv'>
            <div className='carouselImgDiv'>
                <img className='carouselImg' src={currentImg.src} alt={currentImg.alt} />
            </div>
            <div className='carouselBtnDiv'>
                {images.map((image, index) => {
                    if(image.id === selectedBtn) {
                        return (<button onClick={handleClick} className='carouselBtn selectedBtn' id={image.id} key={index}></button>)
                    } else {
                        return (<button onClick={handleClick} className='carouselBtn' id={image.id} key={index}></button>)
                    }
                })}
            </div>
        </div>
    )
}

export default Carousel