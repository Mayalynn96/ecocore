import React, { useState, useEffect } from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";

function Header() {
    return (
       <header>
            <div className='logoDiv'>
                <p style={{color: '#ffffff'}}>Eco</p>
                <p>Core</p>
            </div>
            <div id='navLinks'>
                <p>Eco Core</p>
                <p>Angebote</p>
                <p>Referenzen</p>
                <p>FAQ</p>
                <p>Kontakt</p>
            </div>
       </header> 
    )
}

export default Header