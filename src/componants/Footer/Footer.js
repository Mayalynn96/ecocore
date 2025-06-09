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
                    <p style={{ color: '#ffffff' }}>Eco</p>
                    <p>Core</p>
                </div>
                <div id='footerAdress'>
                    <div>
                        <p>Laufenstrasse 16</p>
                        <p>4053 Basel</p>
                    </div>
                    <p>Tel + 41 61 331 57 76</p>
                    <p>Email info@ecocore.ch</p>
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