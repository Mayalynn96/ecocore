import React from 'react';
import Header from '../../componants/Header/Header';
import HeroBanner from './sections/HeroBanner/HeroBanner'
import './Home.css'
import WasIstEcocore from './sections/WasIstEcocore/WasIstEcocore';
import Hauptangebote from './sections/Hauptangebote/Hauptangebote';
import Referenzen from './sections/Referenzen/Referenzen';

function Home() {

    return (
       <section className='mainSection'>
        <HeroBanner />
            <Header />
            <main>
                <WasIstEcocore />
                <Hauptangebote />
                <Referenzen />
            </main>
       </section> 
    )
}

export default Home