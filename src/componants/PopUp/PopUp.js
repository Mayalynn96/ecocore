import React from 'react';
import './PopUp.css'
import { useNavigate } from "react-router-dom";
import EcocoreLogo from "./EcocoreLogo.webp"

function PopUp() {
// Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    // redirect to login function
    const redirectTo = (destination) => {
        navigate(`/${destination}`);
    }

    const closePopUp = () => {
        const popUp = document.getElementById('PopUpBackground');
        console.log(popUp)
        popUp.style.display = 'none'
    }

    return (
        <div id='PopUpBackground'>
            <div id='PopUpMainDiv'>
                <img id='PopUpLogo' src={EcocoreLogo} alt='Ecocore Logo'></img>
                <div id='PopUpBtns'>
                    <button onClick={closePopUp}>Photovoltaik</button>
                    <button>Fenster</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp