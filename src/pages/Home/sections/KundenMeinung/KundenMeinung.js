import React from 'react';
import { useNavigate } from "react-router-dom";
import "./KundenMeinung.css"
import RightArrow from "../../arrow-right.svg";
import Star from './star.svg'
import Banner2 from './Banner2b.webp'

function KundenMeinung() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='kundenMeinungSection'>
            <div id='kundenMeinungDiv'>
                <div id='starDiv'>
                    <img src={Star} alt='Stern' className='star' />
                    <img src={Star} alt='Stern' className='star' />
                    <img src={Star} alt='Stern' className='star' />
                    <img src={Star} alt='Stern' className='star' />
                    <img src={Star} alt='Stern' className='star' />
                </div>
                <p id='kundenMeinungText'>Ich bin absolut begeistert von meiner Erfahrung mit Eco Core!
                    Von der ersten Beratung bis zur Installation unserer Solaranlage
                    lief alles reibungslos und professionell. Das Team war sehr kompetent,
                    freundlich und hat sich für all unsere Fragen Zeit genommen.</p>
                <p id='kundenMeinungName'>- Tonya Silverman</p>
            </div>
            <img src={Banner2} alt='Sonnenuntergang uber photovoltaik' id='banner2Image' />
        </section>
    )
}

export default KundenMeinung