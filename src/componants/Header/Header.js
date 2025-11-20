import React, { useRef } from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"
import EcocoreLogo from "./EcocoreLogo.webp"
import EcocoreFensterLogo from './ecocoreFensterLogoLast.webp'

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiveNav")
    }

    // Adding useNavigate to navigate to homepage
    const navigate = useNavigate();

    // redirect to login function
    const redirectTo = (destination) => {
        navigate(`/${destination}`);
    }

    return (
        <header>
            <button id='navBtn' onClick={showNavbar}>
                <FaBars />
            </button>
            <nav className='navLinks' ref={navRef}>
                <div className='logoDiv' onClick={() => redirectTo("home")}>
                    <img id='ecocoreLogo' src={EcocoreLogo} alt='Ecocore Logo'></img>
                </div>
                <div id='navLinksBtns'>
                    <button onClick={() => redirectTo("kernkompetenzen")} className='navBtns'>Kernkompetenzen</button>
                    <button onClick={() => redirectTo("angebote")} className='navBtns'>Angebote</button>
                    <button onClick={() => redirectTo("referenzen")} className='navBtns'>Referenzen</button>
                    <button onClick={() => redirectTo("FAQ")} className='navBtns'>FAQ</button>
                    <button onClick={() => redirectTo("kontakt")} className='navBtns'>Kontakt</button>
                    <a href='https://ecocorefenster.ch/' rel="noopener noreferrer"><img src={EcocoreFensterLogo} alt='ecocore Fenster Logo' id='ecocoreFensterLogo' /></a>
                </div>
                <div>
                    <button onClick={() => redirectTo("kontakt")} id='bannerBtn'>Beratung</button>
                </div>
            </nav>
        </header>
    )
}

export default Header