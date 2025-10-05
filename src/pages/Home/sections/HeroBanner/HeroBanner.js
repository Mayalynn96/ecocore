import React from 'react';
import HeroImage from "./bannerC.webp";
import './HeroBanner.css'
import EcocoreLogo from './EcocoreLogo.webp'

function HeroBanner() {

    return (
        <div id='heroDiv'>
            <img src={HeroImage} alt='HeroImage' id='heroImage' />
            <div id='logoAndSlogan'>
                <div className='logoDivBig'>
                    <img id='EcocoreLogoBanner' src={EcocoreLogo} alt='Ecocore Logo'></img>
                </div>
                <div id='slogan'>
                    <p>Intelligent investieren – mit der Kraft der Sonne!</p>
                </div>
            </div>
        </div>
    )
};

export default HeroBanner