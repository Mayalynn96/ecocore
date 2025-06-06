import React from 'react';
import Header from '../../componants/Header/Header';
import HeroBanner from './sections/HeroBanner/HeroBanner'
import './Home.css'
import WasIstEcocore from './sections/WasIstEcocore/WasIstEcocore';
import Hauptangebote from './sections/Hauptangebote/Hauptangebote';
import Referenzen from './sections/Referenzen/Referenzen';
import HaufigeFragen from './sections/HaufigeFragen/HaufigeFragen';
import KundenMeinung from './sections/KundenMeinung/KundenMeinung';

function Home() {

    return (
        <section className='mainSection'>
            <HeroBanner />
            <Header />
            <main>
                <WasIstEcocore />
                <Hauptangebote />
                <Referenzen />
                <KundenMeinung />
                <HaufigeFragen />
            </main>
        </section>
    )
}

export default Home