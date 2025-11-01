import React from 'react';
import './PopUp.css'
import EcocoreLogo from "./EcocoreLogo.webp"

function PopUp() {
// Adding useNavigate to navigate to homepage
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
                    <button><a href='https://ecocorefenster.ch/' rel="noopener noreferrer">Fenster</a></button>
                </div>
            </div>
        </div>
    )
}

export default PopUp