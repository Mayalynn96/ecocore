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
                <div>
                    <h2>Unsere Kernkompetenzen</h2>
                    <p>Wir konzentrieren unsere Arbeit auf drei zentrale Bereiche, in denen wir Erfahrung, 
                        Leidenschaft und Nachhaltigkeit vereinen:</p>
                </div>
                <div className='kernkompetenz'>
                    <div className='kernTextDiv'>
                        <h3>☀️ Photovoltaikanlagen für Privatpersonen, Unternehmen & Institutionen</h3>
                        <p>Wir planen, koordinieren und realisieren maßgeschneiderte Photovoltaiklösungen auf 
                            bestehenden Dachflächen – ob für Einfamilienhäuser, Gewerbebauten oder öffentliche Liegenschaften. 
                            Unser Ziel ist es, Eigentümer effizient und zuverlässig auf dem Weg zur eigenen Stromproduktion zu begleiten.</p>
                    </div>
                    <div className='kernImgDiv'>
                        <img src='http://ecocore.ch/wp-content/uploads/2016/07/Kernbereiche.jpg' alt='testImage'/>
                    </div>
                </div>
                 <div className='kernkompetenz'>
                    <div className='kernImgDiv'>
                        <img src='http://ecocore.ch/wp-content/uploads/2016/07/Kernbereiche.jpg' alt='testImage'/>
                    </div>
                    <div className='kernTextDiv'>
                        <h3>🏗️ Architekturprojekte mit und ohne Solarintegration</h3>
                        <p>Von Neubauten bis hin zu Umbauten begleiten wir Projekte ganzheitlich – 
                            von der ersten Idee über die Planung und Baueingabe bis zur Ausführung, 
                            Kostenkontrolle und Bauleitung. Ob mit oder ohne Photovoltaik: Wir schaffen durchdachte 
                            und ästhetisch hochwertige Räume mit nachhaltigem Anspruch.</p>
                    </div>
                </div>
                <div className='kernkompetenz'>
                    <div className='kernTextDiv'>
                        <h3>🌍 Nachhaltige Projekte im Globalen Süden</h3>
                        <p>Wir engagieren uns für Entwicklungsprojekte mit echtem Mehrwert – z. B. 
                            in den Bereichen Solarenergie, Trinkwasserversorgung oder Bildung. 
                            Die Umsetzung erfolgt häufig in Verbindung mit innovativen Finanzierungsmodellen wie Microfinancing, 
                            Crowdfunding oder Sponsoring. So unterstützen wir lokale Strukturen mit sinnvollen, zukunftsfähigen Lösungen.</p>
                    </div>
                    <div className='kernImgDiv'>
                        <img src='http://ecocore.ch/wp-content/uploads/2016/07/Kernbereiche.jpg' alt='testImage'/>
                    </div>
                </div>
            </main>
            <Footer />
       </section> 
    )
}

export default EcoCore