import React from 'react';
import './Footer.css'
import { Link, useNavigate } from "react-router-dom";
import Facebook from "./facebook.svg";
import X from "./x-twitter.svg";
import LinkedIn from "./linkedin.svg"

function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <footer>
            <div id='footerContent'>
                <div className='logoDiv' onClick={() => handleNavigation("home")}>
                    <p style={{ color: '#569728' }}>eco</p>
                    <p>core</p>
                </div>
                <div id='footerAdress'>
                    <div>
                        <p>Wartenbergstrasse 41</p>
                        <p>4052 Basel</p>
                    </div>
                    <p>+41 78 422 67 87</p>
                    <p>info@ecocore.ch</p>
                </div>
                <div id='footerSocialMedia'>
                    <img src={LinkedIn} alt='linkedIn' className='icon' />
                    <img src={X} alt='x' className='icon' />
                    <img src={Facebook} alt='facebook' className='icon' />
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer