import React from 'react';
import { useNavigate } from "react-router-dom";
import './WasIstEcocore.css'
import Logo from '../../logo.svg';
import FirstImage from "./firstImage.webp";

function WasIstEcocore() {
    const navigate = useNavigate();
    
    const handleNavigation = (destination) => {
        navigate(`/${destination}`); 
    };

    return (
        <section id='ecocoreSection'>
                    <img src={Logo} alt='logo' id='logo1' className='backgroundSunIcon'/>
                    <div id='wasIstEcocore'>
                        <div className='paragraph'>
                        <h1>Was ist Eco Core?</h1>
                        <p><b>Mehr Unabhängigkeit. Weniger Energiekosten. Nachhaltige Wertsteigerung.</b></p><br></br>
                        <p>EcoCore entwickelt und realisiert <b> maßgeschneiderte Photovoltaiklösungen</b>, die Ihren Eigenverbrauch maximieren – 
                            von eleganter Dach- und Fassadenintegration bis zu kompletten Energiesystemen mit <b>Batteriespeicher, 
                            E-Ladestation und Smart-Home-Anbindung</b>.</p><br></br>
                        <p>Dank intelligenter Vernetzung von <b>PV, Speicher, Ladeinfrastruktur und Gebäudetechnik</b>
                             erreichen Sie <b>maximale Effizienz, Unabhängigkeit</b> und Eigenstromnutzung.</p><br></br>
                        <p>Ob <b>Privatperson, Unternehmen</b> oder <b>Institution</b> – mit EcoCore senken Sie nicht nur Ihre Stromkosten, sondern steigern 
                            den Wert Ihrer Immobilie und leisten aktiv einen Beitrag zum Klimaschutz.</p><br></br>
                        <p><b>Jetzt beraten lassen und Ihre persönliche Energielösung sichern.</b></p>
                        </div>
                        <div>
                            <button onClick={() => handleNavigation("Kernkompetenzen")}>Mehr erfahren</button>
                            <button onClick={() => handleNavigation("kontakt")}>Jetzt beraten lassen</button>
                        </div>
                    </div>
                    <div id='firstImageSection'>
                        <img src={FirstImage} alt='Solar on roof'id='firstImage'/>
                    </div>
                </section>
    )
};

export default WasIstEcocore