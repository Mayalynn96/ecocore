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
       <section>
            <Header />
            <main>
            </main>
            {/* <Footer /> */}
       </section> 
    )
}

export default EcoCore