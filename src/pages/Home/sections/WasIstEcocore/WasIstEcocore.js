import React from 'react';
import { useNavigate } from "react-router-dom";
import './WasIstEcocore.css'
import Logo from '../../logo.svg';
import RightArrow from "../../arrow-right.svg";
import FirstImage from "./firstImage.jpg";

function WasIstEcocore() {
    const navigate = useNavigate();
    
    const handleNavigation = (destination) => {
        navigate(`/${destination}`); 
    };

    return (
        <section id='ecocoreSection'>
                    <img src={Logo} alt='logo' id='logo1'/>
                    <div id='wasIstEcocore'>
                        <div className='paragraph'>
                        <h1>Was ist Eco Core?</h1>
                        <p>Wir entwickeln maßgeschneiderte Photovoltaiklösungen für Private, 
                            Unternehmen und Institutionen, realisieren innovative Architekturprojekte 
                            mit und ohne Solarintegration und setzen weltweit nachhaltige Projekte in Entwicklungsländern 
                            um – von Energie und Trinkwasser bis Bildung, oft unterstützt durch kreative Finanzierungsmodelle 
                            wie Microfinancing oder Crowdfunding.</p>
                        </div>
                        <div className='mehrDiv' onClick={() => handleNavigation("ecocore")}>
                            <p>Mehr Erfahren</p>
                            <img src={RightArrow} alt='right pointing arrow' className='rightArrow'/>
                        </div>
                    </div>
                    <div id='firstImageSection'>
                        <img src={FirstImage} alt='Solar on roof'id='firstImage'/>
                    </div>
                </section>
    )
};

export default WasIstEcocore