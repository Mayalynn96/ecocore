import React, { useEffect } from 'react';
import Header from '../../componants/Header/Header';
import "./Kernkompetenzen.css"
import Footer from '../../componants/Footer/Footer';
import Partner from '../../componants/Partner/Partner';
import SolarEnergy from "./solar-power.svg";
import Analyse from "./search-analysis.svg";
import Project from "./save-world.svg";
import Install from "./wrench.svg";
import Finance from "./money.svg";
import EcocoreLogo from './EcocoreLogo.webp'

function Kernkompetenzen() {
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
        <section id='ecoCorePageSection'>
            <Header />
            <main>
                <div id='ecocorePageLogo'>
                    <img id='ecocoreLogo' src={EcocoreLogo} alt='Ecocore Logo'></img>
                </div>
                <div className='titleForPage'>
                    <h2>Unsere Kernkompetenzen</h2>
                    <p>Wir liefern Ihnen nicht nur Technik – wir liefern <b>Mehrwert</b>.</p>
                    <p>Mit <b>jahrelanger Erfahrung, innovativer Technologie</b> und einem klaren Fokus auf <b>Nachhaltigkeit </b>
                        bieten wir Lösungen, die <b>Ihnen mehr Unabhängigkeit, geringere Energiekosten und eine nachhaltige Wertsteigerung</b> Ihrer Immobilie ermöglichen:</p>
                    <ul id='titleListKernkompetenzen'>
                        <li><b>Photovoltaiklösungen</b> – individuell geplant, perfekt installiert, maximal effizient.</li>
                        <li><b>Energiesysteme</b> – intelligente Kombination aus Speicher, Ladepunkt und Smart-Home-Steuerung.</li>
                        <li><b>Entwicklungsprojekte</b> – sinnvolle Investitionen in eine nachhaltige Zukunft weltweit.</li>
                        <li><b>Sicherheit & Qualität</b> - Planung und Umsetzung gemäss VKF-<i>Brandschutzrichtlinien durch eidg. dipl. Brandschutzfachmann.</i> ergänzen</li>
                    </ul>
                    <p><span className='eco'>eco</span><span className='core'>core</span> – für alle, die heute schon an morgen denken.</p>
                </div>
                <div id='alleKernkompetenzen'>
                    <div className='angebotePageDiv' id='photovoltaik'>
                        <div className='angeboteImgDiv'>
                            <img className='KernkompetenzImg' src={SolarEnergy} alt='Solar Energie' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Photovoltaik – Ihr Weg zur eigenen Energie</h2><br></br>
                            <p>Wir bieten Ihnen <b>maßgeschneiderte Photovoltaiklösungen</b> für private, gewerbliche und institutionelle Gebäude –
                                von der ersten Beratung über die technische Planung bis zur fachgerechten Installation.</p><br></br>
                            <p>Ob <b>Einfamilienhaus, Firmendach</b> oder <b>öffentliche Einrichtung</b> – wir entwickeln gemeinsam mit Ihnen ein System,
                                das <b>maximalen Eigenverbrauch, hohe Energieeffizienz</b> und <b>optimale Wirtschaftlichkeit</b> vereint.</p><br></br>
                            <p>Auf Wunsch integrieren wir <b>Batteriespeicher, E-Ladestationen</b> und <b>Smart-Home-Lösungen</b> für eine intelligente
                                Vernetzung aller Komponenten – damit Sie Ihre Energie bestmöglich selbst nutzen, Kosten senken und unabhängiger
                                vom Strommarkt werden.</p>
                        </div>
                    </div>
                    <div className='angebotePageDiv reverse-column' id='analyse'>
                        <div className='angeboteTextDiv'>
                            <h2>Analyse – der erste Schritt zu Ihrer Solaranlage</h2><br></br>
                            <p>Am Anfang jedes erfolgreichen PV-Projekts steht eine <b>präzise Analyse</b>. Wir erfassen alle relevanten Daten –
                                Dachfläche, Ausrichtung, Neigung, Verschattung und Stromverbrauch – und prüfen die technischen
                                sowie wirtschaftlichen Möglichkeiten.</p><br></br>
                            <p>Mit <b>modernen Analyse-Tools</b> und unserem <b>fundierten Fachwissen</b> erstellen wir für Sie eine <b>individuelle
                                Ertragsprognose</b>, eine <b>Wirtschaftlichkeitsberechnung</b> und eine <b>Machbarkeitsstudie</b></p><br></br>
                            <p>So erhalten Sie eine solide Entscheidungsgrundlage und investieren gezielt in eine <b>zukunftssichere,
                                rentable Photovoltaiklösung</b>.</p>
                        </div>
                        <div className='angeboteImgDiv'>
                            <img className='KernkompetenzImg' src={Analyse} alt='Analyse' />
                        </div>
                    </div>
                    <div className='angebotePageDiv' id='installation'>
                        <div className='angeboteImgDiv'>
                            <img className='KernkompetenzImg' src={Install} alt='Analyse' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Installation – präzise, sicher und termingerecht</h2><br></br>
                            <p>Wir gewährleisten eine <b>fachgerechte, effiziente und sichere Installation</b>
                                Ihrer Photovoltaikanlage – vom ersten Handgriff bis zur Inbetriebnahme.
                                Unser erfahrenes Montageteam arbeitet mit <b>hochwertigen Komponenten, modernster Technik</b> und nach den geltenden <b>VKF-Brandschutzrichtlinien</b> sowie <b>SUVA-Sicherheitsvorgaben</b>, um einen zuverlässigen und langlebigen Betrieb sicherzustellen.</p>
                            <br></br><p>Dabei legen wir Wert auf eine <b>saubere Ausführung, minimale Eingriffe in die bestehende Bausubstanz</b>
                                und eine <b>perfekte Abstimmung aller Systemkomponenten.</b><br></br>
                                Ob Einfamilienhaus, Firmendach oder Grossprojekt – wir realisieren Ihre Anlage <b>
                                    professionell, präzise und pünktlich</b>, unter Einhaltung höchster Sicherheits- und Qualitätsstandards.</p>
                        </div>
                    </div>
                    <div className='angebotePageDiv reverse-column' id='Finanzierung'>
                        <div className='angeboteTextDiv'>
                            <h2>Finanzierung – Ihr Weg zur eigenen Solaranlage</h2><br></br>
                            <p><span className='eco'>eco</span><span className='core'>core</span> unterstützt Sie nicht nur technisch, sondern auch <b>finanziell</b> auf dem Weg zu Ihrer eigenen Photovoltaikanlage.
                                Wir arbeiten mit <b>ausgewählten Banken, Darlehensgebern und Investoren</b> zusammen, die gezielt Projekte im
                                Bereich <b>erneuerbare Energien</b> fördern.</p><br></br>
                            <p>Ob <b>Direktkauf, zinsgünstiges Darlehen</b> oder <b>maßgeschneiderte Finanzierungsmodelle</b> – wir finden gemeinsam mit Ihnen
                                die passende Lösung. Zusätzlich beraten wir Sie zu <b>aktuellen Förderprogrammen, steuerlichen Vorteilen</b> und
                                <b> Einspeisevergütungen</b>, damit sich Ihre Investition <b>langfristig lohnt</b>.</p><br></br>
                            <p>💡 <b>Extra-Service:</b> Je nach Anlage und Situation kann die <b>Einmalvergütung des Bundes (Pronovo)</b> von uns <b>vorgezogen </b>
                                werden – so profitieren Sie bereits während der Bauphase von dieser Förderung.</p>
                        </div>
                        <div className='angeboteImgDiv'>
                            <img className='KernkompetenzImg' src={Finance} alt='finanzierung' />
                        </div>
                    </div>
                    <div className='angebotePageDiv' id='entwicklungsprojekte'>
                        <div className='angeboteImgDiv'>
                            <img className='KernkompetenzImg' src={Project} alt='Entwicklungsprojekte' />
                        </div>
                        <div className='angeboteTextDiv'>
                            <h2>Entwicklungsprojekte – gemeinsam für eine nachhaltige Zukunft</h2><br></br>
                            <p>Gemeinsam mit der <b>Suncube Foundation</b> engagieren wir uns für <b>nachhaltige Entwicklungsprojekte</b> in
                                Ländern des Globalen Südens – mit Fokus auf erneuerbare <b>Energien, sauberes Trinkwasser</b> und <b>Energien, sauberes Trinkwasser</b>.</p><br></br>
                            <p>Unser Ziel: <b>Lebensbedingungen langfristig verbessern</b> und den Einsatz <b>umweltfreundlicher Technologien</b> fördern.</p><br></br>
                            <p>Ob <b>Solaranlagen</b> zur Versorgung abgelegener Regionen, <b>Wasseraufbereitungssysteme</b> oder <b>Bildungsinitiativen</b> –
                                wir unterstützen wirkungsvolle Vorhaben und arbeiten eng mit <b>lokalen Partnern</b> zusammen. Die Finanzierung
                                erfolgt häufig über <b>Microfinancing, Crowdfunding</b> oder <b>Sponsoringmodelle</b>, um Projekte auch in
                                strukturschwachen Regionen zu ermöglichen.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Kernkompetenzen