import React from 'react';
import { useNavigate } from "react-router-dom";
import './Referenzen.css'
import ReferencesCarousel from '../../../../componants/ReferencesCarousel/ReferencesCarousel';

function Referenzen() {

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='referenzenSection'>
            <h1>Referenzen</h1>
            <ReferencesCarousel />
            <div>
                <button onClick={() => handleNavigation("referenzen")}>Mehr sehen</button>
            </div>
        </section>
    )
};

export default Referenzen