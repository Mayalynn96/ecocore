import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hauptangebote.css'
import RightArrow from "../../arrow-right.svg";
import IconBox from '../../../../componants/IconBox/IconBox';
import SolarEnergy from "./solarEnergy.svg"
import Analyse from "./analyse.svg"
import Project from "./project.svg"
import Istall from "./install.svg"


function Hauptangebote() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='hauptangeboteSection'>
            <div id='hauptangeboteDiv'>
                <IconBox text={'Photovoltaik'} icon={SolarEnergy} />
                <IconBox text={"Analyse"} icon={Analyse} />
                <IconBox text={"Entwicklungsprojekte"} icon={Project} />
                <IconBox text={"Installation"} icon={Istall} />
            </div>
            <div className='mehrDiv' onClick={() => handleNavigation("angebote")}>
                <p>Alle Angebote</p>
                <img src={RightArrow} alt='right pointing arrow' className='rightArrow' />
            </div>
        </section>
    )
};

export default Hauptangebote