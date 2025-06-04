import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../componants/Header/Header';
import HeroBanner from './sections/HeroBanner/HeroBanner'
import './Home.css'
import WasIstEcocore from './sections/WasIstEcocore/WasIstEcocore';

function Home() {

    return (
       <section className='mainSection'>
        <HeroBanner />
            <Header />
            <main>
                <WasIstEcocore />
                <section id='hauptAngeboteSection'>

                </section>
            </main>
       </section> 
    )
}

export default Home