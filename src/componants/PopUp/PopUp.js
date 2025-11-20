import React, {useEffect} from 'react';
import './PopUp.css'
import EcocoreLogo from "./EcocoreLogo.webp"

function PopUp({isOpen, setIsOpen}) {
// Adding useNavigate to navigate to homepage
    const closePopUp = () => {
        setIsOpen(false)
        localStorage.setItem('hasBeenOpen', JSON.stringify(true));
    }

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
      }, [isOpen]);

    if(isOpen){
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
    } else {
        return null
    }
}

export default PopUp