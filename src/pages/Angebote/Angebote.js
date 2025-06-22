import React from 'react';
import Header from '../../componants/Header/Header';
import "./Angebote.css"
import Footer from '../../componants/Footer/Footer';
import SolarEnergy from "./solar-power.svg"
import Analyse from "./search-analysis.svg"
import Project from "./save-world.svg"
import Install from "./wrench.svg"
import Finance from "./money.svg"

function Angebote() {

    return (
        <section id='angebotePageSection'>
            <Header />
            <main>
                <h1>Angebote</h1>
                <div>
                    <div className='angebotePageDiv'>
                        <div className='angeboteImgDiv'>
                            <img src={SolarEnergy} alt='Solar Energie' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Photovoltaik</h2>
                            <p>Wir bieten Ihnen maßgeschneiderte Photovoltaiklösungen für private,
                                gewerbliche und institutionelle Gebäude. Von der ersten Beratung über
                                die technische Planung bis zur fachgerechten Installation begleiten wir
                                Sie auf dem Weg zur eigenen Stromproduktion.</p>
                            <p>
                                Ob Einfamilienhaus, Firmendach oder öffentliche Einrichtung –
                                wir entwickeln gemeinsam mit Ihnen die passende Lösung für Ihre Bedürfnisse.
                            </p>
                        </div>
                    </div>
                    <div className='angebotePageDiv'>
                        <div className='angeboteTextDiv'>
                            <h2>Analyse</h2>
                            <p>Am Anfang jedes erfolgreichen Solarprojekts steht eine präzise Analyse.
                                Wir prüfen die Gegebenheiten vor Ort, erfassen relevante Daten zu Dachfläche,
                                Ausrichtung, Neigung, Verschattung und Stromverbrauch und bewerten die technischen
                                und wirtschaftlichen Möglichkeiten.</p>
                            <p>Mit modernen Tools und fundiertem Know-how erstellen wir eine individuelle Ertragsprognose,
                                Wirtschaftlichkeitsberechnung sowie eine Machbarkeitsstudie – maßgeschneidert auf Ihre Anforderungen.
                                So schaffen wir die Grundlage für eine zukunftssichere Investition in Solarenergie.
                            </p>
                        </div>
                        <div className='angeboteImgDiv'>
                            <img src={Analyse} alt='Analyse' />
                        </div>
                    </div>
                    <div className='angebotePageDiv'>
                        <div className='angeboteImgDiv'>
                            <img src={Project} alt='Entwiklungsprojekte' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Entwiklungsprojekte</h2>
                            <p>Wir engagieren uns für nachhaltige Entwicklungsprojekte in Ländern des Globalen Südens – 
                                mit Fokus auf erneuerbare Energien, sauberes Trinkwasser und Bildung. Unsere Projekte zielen darauf ab, 
                                lokale Lebensbedingungen langfristig zu verbessern und dabei umweltfreundliche Technologien sinnvoll einzusetzen.</p>
                            <p>Ob Solaranlagen zur Stromversorgung abgelegener Regionen, Wasseraufbereitungssysteme oder Bildungsinitiativen – 
                                wir planen und realisieren wirkungsvolle Lösungen gemeinsam mit lokalen Partnern. Die Finanzierung erfolgt 
                                häufig durch Microfinancing, Crowdfunding oder Sponsoringmodelle.
                            </p>
                        </div>
                    </div>
                    <div className='angebotePageDiv'>
                        <div className='angeboteTextDiv'>
                            <h2>Installation</h2>
                            <p>Wir sorgen für eine fachgerechte, effiziente und sichere Installation Ihrer Photovoltaikanlage – 
                                vom ersten Handgriff bis zur Inbetriebnahme. Unser erfahrenes Montageteam arbeitet mit hochwertigen 
                                Komponenten und modernster Technik, um einen zuverlässigen und langlebigen Betrieb Ihrer Anlage zu gewährleisten.</p>
                            <p>Dabei achten wir auf eine saubere Umsetzung, minimale Eingriffe in bestehende Bausubstanz und eine präzise 
                                Abstimmung aller Systemkomponenten. Ob Einfamilienhaus, Firmendach oder Großprojekt – 
                                wir realisieren Ihre Anlage termingerecht und professionell.
                            </p>
                        </div>
                        <div className='angeboteImgDiv'>
                            <img src={Install} alt='Analyse' />
                        </div>
                    </div>
                    <div className='angebotePageDiv'>
                        <div className='angeboteImgDiv'>
                            <img src={Finance} alt='Entwiklungsprojekte' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Finanzierung</h2>
                            <p>Eco Core unterstützt Sie nicht nur technisch, sondern auch finanziell auf dem Weg zur eigenen Solaranlage. 
                                Wir arbeiten mit ausgewählten Finanzierungsinstituten, Darlehensgebern und Investoren zusammen, 
                                die gezielt Projekte im Bereich der erneuerbaren Energien fördern.</p>
                            <p>Ob Direktkauf, zinsgünstiges Darlehen oder individuelle Finanzierungsmodelle – 
                                wir helfen Ihnen, die passende Lösung zu finden. Darüber hinaus beraten wir 
                                Sie zu aktuellen Förderprogrammen, steuerlichen Vorteilen und Einspeisevergütungen, 
                                damit sich Ihre Investition langfristig rechnet.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}

export default Angebote