import React, {useEffect} from 'react';
import Header from '../../componants/Header/Header';
import "./Angebote.css"
import Footer from '../../componants/Footer/Footer';
import Process from './process-improvement.svg'

import Partner from '../../componants/Partner/Partner';


function Angebote() {
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
        <section id='angebotePageSection'>
            <Header />
            <main id='angeboteMain'>
                <h1>Angebote</h1>
                <section>
                    <h2>Der <span className='eco'>eco</span><span className='core'>core</span>-Prozess – Ihr Weg zur eigenen Photovoltaikanlage</h2>
                    <p>Mit <span className='eco'>eco</span><span className='core'>core</span> erhalten Sie nicht einfach eine Solaranlage, sondern eine <b>durchdachte Gesamtlösung</b> – 
                    von der ersten Beratung bis zur Inbetriebnahme. Unser strukturierter Prozess sorgt für <b>Transparenz,
                     Planungssicherheit und höchste Qualität.</b></p>
                    <p><b>💡 Hinweis:</b><br></br>
                    Die nachfolgenden Preisangaben beziehen sich <b>beispielhaft auf eine typische Photovoltaikanlage mit 10 kWp 
                    Leistung</b> auf einem Einfamilienhaus. Die tatsächlichen Werte können je nach Objekt, Dachfläche, Ausrichtung
                     und technischer Ausstattung variieren. </p>
                </section>
                <section>
                    <h3>Der bewährte <span className='eco'>eco</span><span className='core'>core</span>-Prozess</h3>
                    <div id='angeboteProcessDiv'>
                        <div className='AngeboteProcess'>
                            <p><b>1. Beratung &
                                <br></br> Erstgespräch</b></p>
                        </div>
                        <div className='AngeboteProcess'>
                            <p><b>2. Analyse</b></p>
                        </div>
                        <div className='AngeboteProcess'>
                            <p><b>3. Planung</b></p>
                        </div>
                        <div className='AngeboteProcess'>
                            <p><b>4. Installation</b></p>
                        </div>
                        <div className='AngeboteProcess'>
                            <p><b>5. Förderung</b></p>
                        </div>
                        <div className='AngeboteProcess'>
                            <p><b>6. Wirkung</b></p>
                        </div>
                    </div>
                </section>
                <img src={Process} alt='Prozess' className='angeboteImgs'/>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>1. Beratung & Erstangebot – Ihr Start in die Energiezukunft</h3>
                    </div>
                    <p><b>Leistungsumfang:</b><br></br>
                    Das erste Beratungsgespräch sowie eine auf Ihren Angaben basierende Erstofferte sind <b>kostenlos und unverbindlich</b>.<br></br>
                    Wir analysieren Ihre Grunddaten und erstellen eine erste technische sowie wirtschaftliche Einschätzung.</p>
                    <div id='kostenfrei'></div>
                    <p><b>Kostenregelung:</b><br></br>
                    Wenn Sie eine detaillierte Projektierung mit Vor-Ort-Termin, Dachvermessung, Anschluss- und Förderabklärungen wünschen, 
                    erarbeiten wir ein verbindliches Angebot.<br></br>
                    Bei anschliessender Beauftragung ist diese Planung <b>kostenfrei.</b><br></br>
                    Wird das Projekt nach dieser vertieften Planung <b>nicht realisiert</b>, fällt eine <b>Bearbeitungsgebühr von CHF 300.–</b> an.</p>
                    <p><b>👉 Ihr Vorteil:</b> fundierte Entscheidungsgrundlage ohne Risiko – Sie zahlen nur, wenn wir im Detail planen.</p>
                </section>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>2. Analyse – Grundlagen für Ihr Projekt</h3>
                    </div>
                    <p><b>Leistungsumfang:</b><br></br>
                    Erfassung von Dachfläche, Ausrichtung, Neigung, Verschattung und Stromverbrauch.<br></br>
                    Berechnung von Ertrag, Eigenverbrauch und Wirtschaftlichkeit.</p>
                    <p>Die Analyse bildet die Grundlage für die technische und wirtschaftliche Optimierung Ihres Projekts.</p>
                </section>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>3. Planung – Ihre massgeschneiderte Lösung</h3>
                    </div>
                    <p><b>Leistungsumfang:</b><br></br>
                    Individuelle Systemplanung, technische Schemata, Förder- und Netzabklärungen, Einreichung sämtlicher Bewilligungen.</p>
                    <p>Ziel ist eine perfekt abgestimmte Lösung, die alle Komponenten – von Modulen über Speicher bis zur Gebäudetechnik
                         – optimal integriert.</p>
                </section>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>4. Installation – Präzise, sicher, termingerecht</h3>
                    </div>
                    <p><b>Leistungsumfang:</b>
                    <ul>
                        <li>Premium-Solarmodule (10 kWp)</li>
                        <li>Unterkonstruktion, Wechselrichter, Verkabelung DC/AC</li>
                        <li>Gerüst, Montage, Sicherheit, Inbetriebnahme</li>
                        <li>Monitoring-App und Dokumentation</li>
                    </ul></p>
                    <p><b>➡ Schlüsselfertige 10 kWp-Anlage:</b> CHF 24 200.– exkl. MwSt.</p>
                </section>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>5. Förderung & Finanzierung – Ihr finanzieller Vorteil</h3>
                    </div>
                    <p><b>Leistungsumfang:</b><br></br>
                    Abwicklung der nationalen <b>Einmalvergütung (EIV)</b> über Pronovo sowie Unterstützung bei Finanzierungs- 
                    oder Leasinglösungen.</p>
                    <p><b>Förderbeitrag (Pronovo EIV):</b><br></br>
                    Richtwert gemäss Stand 2025 ≈ CHF 360.– / kWp (Stand Januar 2025).<br></br>
                    Die definitive Höhe wird durch Pronovo beim Antrag festgelegt.<br></br>
                    <span className='eco'>eco</span><span className='core'>core</span> übernimmt die Anmeldung und Berechnung der jeweils aktuellen Fördersumme.</p>
                    <p><b>Beispielrechnung:</b><br></br>
                    10 kWp × CHF 360.– = <b>CHF 3 600.– Förderbeitrag</b></p>
                    <p><b>➡ Effektive Investition:</b> ca. <b>CHF 20 600.– exkl. MwSt.</b></p>
                </section>
                <section className='AngebotePointsSection'>
                    <div className='AngeboteSteps'>
                        <h3>6. Wirkung – Ihre Energie rechnet sich</h3>
                    </div>
                    <p><b>Ergebnis:</b>
                    <ul>
                        <li>Eigenproduktion ≈ 10 000 kWh / Jahr</li>
                        <li>Stromkostensenkung bis 50 %</li>
                        <li>Amortisation nach 8–10 Jahren</li>
                        <li>CO₂-Einsparung ≈ 4 t / Jahr</li>
                        <li>Immobilienwert + 3–5 %</li>
                    </ul></p>
                </section>
                <section className='AngebotePointsSection'>
                    <h3>Optionale Erweiterungen – für maximale Unabhängigkeit</h3>
                    <p><b>💡 Energiemanagement-System (EMS): CHF 1 100.– exkl. MwSt.</b><br></br>
                    Steuerung und Priorisierung von Energieflüssen für:
                    <ul>
                        <li>Wärmepumpe</li>
                        <li>Ladestationen</li>
                        <li>Warmwasseraufbereitung / Boiler</li>
                        <li>Haushaltsgeräte und weitere Verbraucher</li>
                    </ul>
                    → Erhöht den Eigenverbrauch und optimiert Ihre Energieeffizienz.</p>
                    <p><b>🔋 Batteriespeicher (10 kWh): CHF 8 500.– exkl. MwSt.</b><br></br>
                    <ul>
                        <li>Speicherung überschüssiger Energie für Nachtbetrieb</li>
                        <li>Notstromfähigkeit bei Stromausfall</li>
                        <li>In Kombination mit Energiemanagement bis zu <b>70 % Eigenverbrauchsquote</b></li>
                    </ul></p>
                </section>
                <section className='AngebotePointsSection'>
                    <h3>Ihr Vorteil mit <span className='eco'>eco</span><span className='core'>core</span></h3>
                    <p>✔ Alles aus einer Hand – von Beratung bis Inbetriebnahme<br></br>
                    ✔ Fördermittel & Bewilligungen inklusive<br></br>
                    ✔ Hochwertige Komponenten mit Langzeitgarantie<br></br>
                    ✔ Regionale Fachkräfte, zertifizierte Qualität<br></br>
                    ✔ Fixpreis & transparente Abwicklung<br></br>
                    ✔ <b>Sicherheit & Planung gemäss VKF-Brandschutzrichtlinien – durch eidg. dipl. Brandschutzfachmann</b></p>
                </section>
                <section className='AngebotePointsSection'>
                    <h3>Aus Sonnenlicht wird Unabhängigkeit</h3>
                    <p><span className='eco'>eco</span><span className='core'>core</span> begleitet Sie von der ersten Idee bis zum laufenden System – effizient, sicher und nachhaltig.</p>
                    <p>Jetzt ist der richtige Zeitpunkt, Ihre Energiezukunft zu gestalten.</p>
                    <p><a href="kontakt"><b>Kontaktieren Sie uns – wir beraten Sie persönlich und unverbindlich.</b></a></p>
                </section>
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Angebote