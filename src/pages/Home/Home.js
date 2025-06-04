import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../componants/Header/Header';
import HeroImage from "../../assets/images/BannerImageBlurred.png"
import FirstImage from "../../assets/images/firstImage.jpg"
import RightArrow from "../../assets/icons/arrow-right.svg"
import './Home.css'

function Home() {
    return (
       <body>
            <div id='heroDiv'>
                <img src={HeroImage} alt='HeroImage' id='heroImage'/>
                <div id='logoAndSlogan'>
                    <div className='logoDivBig'>
                        <p style={{color: '#ffffff'}}>Eco</p>
                        <p>Core</p>
                    </div>
                    <div id='slogan'>
                        <p>Slogan Goes Here!</p>
                    </div>
                </div>
            </div>
            <Header />
            <main>
                <section id='ecocoreSection'>
                    <div id='wasIstEcocore'>
                        <div className='paragraph'>
                        <h1>Was ist Eco Core?</h1>
                        <p>Wir entwickeln maßgeschneiderte Photovoltaiklösungen für Private, 
                            Unternehmen und Institutionen, realisieren innovative Architekturprojekte 
                            mit und ohne Solarintegration und setzen weltweit nachhaltige Projekte in Entwicklungsländern 
                            um – von Energie und Trinkwasser bis Bildung, oft unterstützt durch kreative Finanzierungsmodelle 
                            wie Microfinancing oder Crowdfunding.</p>
                        </div>
                        <div className='mehrDiv'>
                            <p>Mehr Erfahren</p>
                            <img src={RightArrow} alt='right pointing arrow' className='rightArrow'/>
                        </div>
                    </div>
                    <div id='firstImageSection'>
                        <img src={FirstImage} alt='Solar on roof'id='firstImage'/>
                    </div>
                </section>
            </main>
       </body> 
    )
}

export default Home