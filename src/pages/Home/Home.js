import React, {useEffect, useState} from 'react';
import Header from '../../componants/Header/Header';
import HeroBanner from './sections/HeroBanner/HeroBanner'
import './Home.css'
import WasIstEcocore from './sections/WasIstEcocore/WasIstEcocore';
import Hauptangebote from './sections/Hauptangebote/Hauptangebote';
import Referenzen from './sections/Referenzen/Referenzen';
import HaufigeFragen from './sections/HaufigeFragen/HaufigeFragen';
import KundenMeinung from './sections/KundenMeinung/KundenMeinung';
import Partner from '../../componants/Partner/Partner';
import Footer from '../../componants/Footer/Footer';
import PopUp from '../../componants/PopUp/PopUp';

function Home() {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            const href = window.location.href.substring(
                window.location.href.lastIndexOf('#') + 1,
            );
            if (window.location.href.lastIndexOf('#') > 0) {
                document.getElementById(href)?.scrollIntoView();
            }
        })

    return (
        <section id='mainSection'>
            <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeroBanner />
            <Header />
            <main>
                <WasIstEcocore />
                <Hauptangebote />
                <Referenzen />
                <KundenMeinung />
                <HaufigeFragen />
                <Partner />
            </main>
            <Footer/>
        </section>
    )
}

export default Home