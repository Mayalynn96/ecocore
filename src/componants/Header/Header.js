import React, {useRef} from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa"

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
                    <p style={{ color: '#569728' }}>eco</p>
                    <p>core</p>
                </div>
                <div id='navLinksBtns'>
                    <button onClick={() => redirectTo("ecocore")} className='navBtns'>eco core</button>
                <button onClick={() => redirectTo("angebote")} className='navBtns'>angebote</button>
                <button onClick={() => redirectTo("referenzen")} className='navBtns'>referenzen</button>
                <button onClick={() => redirectTo("FAQ")} className='navBtns'>FAQ</button>
                <button onClick={() => redirectTo("kontakt")} className='navBtns'>kontakt</button>
                </div>
                <div>
                    <button id='bannerBtn'>Jetzt beratten lassen</button>
                </div>
            </nav>
        </header>
    )
}

export default Header