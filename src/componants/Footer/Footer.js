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

    const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior if needed
    window.open('https://www.google.com/maps/place/Wartenbergstrasse+41,+4052+Basel,+Switzerland/@47.5473469,7.604628,17z/data=!3m1!4b1!4m6!3m5!1s0x4791b833f4b6cb31:0xf06d6eee7e837b6f!8m2!3d47.5473469!4d7.6072029!16s%2Fg%2F11c20wqmpl?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

    return (
        <footer>
            <div id='footerContent'>
                <div className='logoDiv' onClick={() => handleNavigation("home")}>
                    <p style={{ color: '#569728' }}>eco</p>
                    <p>core</p>
                </div>
                <div id='footerAdress'>
                    <div onClick={handleClick} id='footerAdressClick'>
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