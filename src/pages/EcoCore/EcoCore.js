import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../componants/Header/Header';
import "./EcoCore.css"
import Footer from '../../componants/Footer/Footer';

function EcoCore() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
     navigate(`/${destination}`); 
    };

    return (
       <section id='ecoCorePageSection'>
            <Header />
            <main>
                <div id='ecocorePageLogo'>
                    <p style={{ color: '#569728' }}>eco</p>
                    <p>core</p>
                </div>
            </main>
            {/* <Footer /> */}
       </section> 
    )
}

export default EcoCore