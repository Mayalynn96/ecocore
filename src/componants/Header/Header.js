import React from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    
        const handleNavigation = (destination) => {
         navigate(`/${destination}`); 
        };
    
    return (
       <header>
            <div className='logoDiv' onClick={() => handleNavigation("home")}>
                <p style={{color: '#ffffff'}}>Eco</p>
                <p>Core</p>
            </div>
            <div id='navLinks'>
                <p onClick={() => handleNavigation("ecocore")}>Eco Core</p>
                <p>Angebote</p>
                <p>Referenzen</p>
                <p>FAQ</p>
                <p>Kontakt</p>
            </div>
       </header> 
    )
}

export default Header