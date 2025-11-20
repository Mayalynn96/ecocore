import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hauptangebote.css'
import IconBox from '../../../../componants/IconBox/IconBox';
import SolarEnergy from "./solar-power.svg"
import Analyse from "./search-analysis.svg"
import Money from "./money.svg"
import Istall from "./wrench.svg"


function Hauptangebote() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='hauptangeboteSection'>
            <h1>Kernkompetenzen</h1>
            <div id='hauptangeboteDiv'>
                <IconBox text={'Photovoltaik'} icon={SolarEnergy} destination={"kernkompetenzen#photovoltaik"}/>
                <IconBox text={"Analyse"} icon={Analyse} destination={"kernkompetenzen#analyse"}/>
                <IconBox text={"Installation"} icon={Istall} destination={"kernkompetenzen#installation"}/>
                <IconBox text={"Finanzierung"} icon={Money} destination={"kernkompetenzen#Finanzierung"}/>
            </div>
            <div>
                <button onClick={() => handleNavigation("kernkompetenzen")}>Mehr erfahren</button>
            </div>
        </section>
    )
};

export default Hauptangebote