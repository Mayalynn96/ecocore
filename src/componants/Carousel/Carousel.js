import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'


function Carousel({ imgArray }) {
    const [images, setImages] = useState(imgArray)
    const [curentIndex, setCurrentIndex] = useState(0)
    const [selectedBtn, setSelectedBtn] = useState(images[0].id)
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault()

        for (let i = 0; i < images.length; i++) {
            if (images[i].id === Number(e.currentTarget.id)) {

                setCurrentIndex(i)
                setSelectedBtn(Number(e.currentTarget.id))
            }
        }

    }

    useEffect(() => {

        setImages(imgArray)

    }, [imgArray]);

    // 👁️ Observe when the carousel enters or leaves the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% of element must be visible
      }
    );

     const currentRef = carouselRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // 🔄 Rotate images only when visible
  useEffect(() => {
    if (!isVisible) return; // ❌ Don't rotate when off-screen

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
        setSelectedBtn(images[nextIndex].id);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, images]);

    return (
        <div ref={carouselRef} className='carouselDiv'>
            <div className='carouselImgDiv'>
                <img className='carouselImg' src={images[curentIndex].src} alt={images[curentIndex].alt} />
            </div>
            <div className='carouselBtnDiv'>
                {images.map((image, index) => {
                    if (image.id === selectedBtn) {
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