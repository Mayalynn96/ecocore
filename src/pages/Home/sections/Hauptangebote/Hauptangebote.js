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
            <h1>Haupt Angebote</h1>
            <div id='hauptangeboteDiv'>
                <IconBox text={'Photovoltaik'} icon={SolarEnergy} />
                <IconBox text={"Analyse"} icon={Analyse} />
                <IconBox text={"Entwicklungs-projekte"} icon={Project} />
                <IconBox text={"Installation"} icon={Istall} />
            </div>
            <div>
                <button onClick={() => handleNavigation("angebote")}>Alle Angebote</button>
            </div>
        </section>
    )
};

export default Hauptangebote