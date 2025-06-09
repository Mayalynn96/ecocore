import React, {useRef} from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa"

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiveNav")
    }

    return (
        <header>
            <button id='navBtn' onClick={showNavbar}>
                <FaBars />
            </button>
            <nav className='navLinks' ref={navRef}>
                <a href='/ecocore'>Eco Core</a>
                <a href='/angebote'>Angebote</a>
                <a href='referenzen'>Referenzen</a>
                <a href='FAQ'>FAQ</a>
                <a href='Kontakt'>Kontakt</a>
                <button id='bannerBtn'>Jetzt beratten lassen</button>
            </nav>
        </header>
    )
}

export default Header