import React from 'react';
import "./ReferencesCarousel.css"
import Screenshot1 from './Screenshot1.jpg'
import Screenshot2 from './Screenshot2.jpg'
import Screenshot3 from './Screenshot3.jpg'
import Screenshot4 from './Screenshot4.jpg'
import Screenshot5 from './Screenshot5.jpg'

function ReferencesCarousel() {

    return (
        <div className="references">
            <div className="reference-slider">
                <img src={Screenshot1} alt="Referenzbild 1" className='referenceImg' />
                <img src={Screenshot2} alt="Referenzbild 2" className='referenceImg' />
                <img src={Screenshot3} alt="Referenzbild 3" className='referenceImg' />
                <img src={Screenshot4} alt="Referenzbild 4" className='referenceImg' />
                <img src={Screenshot5} alt="Referenzbild 5" className='referenceImg' />
            </div>
            <div className="reference-slider">
                <img src={Screenshot1} alt="Referenzbild 1" className='referenceImg' />
                <img src={Screenshot2} alt="Referenzbild 2" className='referenceImg' />
                <img src={Screenshot3} alt="Referenzbild 3" className='referenceImg' />
                <img src={Screenshot4} alt="Referenzbild 4" className='referenceImg' />
                <img src={Screenshot5} alt="Referenzbild 5" className='referenceImg' />
            </div>
            <div className="reference-slider">
                <img src={Screenshot1} alt="Referenzbild 1" className='referenceImg' />
                <img src={Screenshot2} alt="Referenzbild 2" className='referenceImg' />
                <img src={Screenshot3} alt="Referenzbild 3" className='referenceImg' />
                <img src={Screenshot4} alt="Referenzbild 4" className='referenceImg' />
                <img src={Screenshot5} alt="Referenzbild 5" className='referenceImg' />
            </div>
        </div>
    )
}

export default ReferencesCarousel