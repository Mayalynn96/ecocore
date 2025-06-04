import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../componants/Header/Header';
import HeroBanner from './sections/HeroBanner/HeroBanner'
import './Home.css'
import WasIstEcocore from './sections/WasIstEcocore/WasIstEcocore';
import Hauptangebote from './sections/Hauptangebote/Hauptangebote';

function Home() {

    return (
       <section className='mainSection'>
        <HeroBanner />
            <Header />
            <main>
                <WasIstEcocore />
                <Hauptangebote />
            </main>
       </section> 
    )
}

export default Home