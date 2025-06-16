import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hauptangebote.css'
import IconBox from '../../../../componants/IconBox/IconBox';
import SolarEnergy from "./solar-power.svg"
import Analyse from "./search-analysis.svg"
import Project from "./project-management.svg"
import Istall from "./wrench.svg"


function Hauptangebote() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='hauptangeboteSection'>
            <h1>Haupt Angebote</h1>
            <div id='hauptangeboteDiv'>
                <IconBox text={'Photovoltaik'} icon={SolarEnergy} destination={"angebote#photovoltaik"}/>
                <IconBox text={"Analyse"} icon={Analyse} destination={"angebote#analyse"}/>
                <IconBox text={"Entwicklungs-projekte"} icon={Project} destination={"angebote#entwicklungsprojekte"}/>
                <IconBox text={"Installation"} icon={Istall} destination={"angebote#installation"}/>
            </div>
            <div>
                <button onClick={() => handleNavigation("angebote")}>Alle Angebote</button>
            </div>
        </section>
    )
};

export default Hauptangebote