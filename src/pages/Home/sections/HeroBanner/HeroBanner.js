import React from 'react';
import HeroImage from "./bannerB.webp";
import './HeroBanner.css'

function HeroBanner() {

    return (
        <div id='heroDiv'>
            <img src={HeroImage} alt='HeroImage' id='heroImage' />
            <div id='logoAndSlogan'>
                <div className='logoDivBig'>
                    <p style={{ color: '#ffffff' }}>Eco</p>
                    <p>Core</p>
                </div>
                <div id='slogan'>
                    <p>Intelligent investieren – mit der Kraft der Sonne!</p>
                </div>
            </div>
        </div>
    )
};

export default HeroBanner