import React, {useEffect} from 'react';
import Header from '../../componants/Header/Header';
import "./Angebote.css"
import Footer from '../../componants/Footer/Footer';

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
                    <h2>Kompaktes Angebot – Photovoltaikanlage 10 kWp</h2>
                    <p><b>Ihr Schritt in die Energiezukunft – mit EcoCore als zuverlässigem Partner an Ihrer Seite.</b></p>
                    <p>Wir kümmern uns um alles – von der Planung über die Montage bis zur Abnahme. Sie erhalten eine fixfertige 
                        Photovoltaikanlage, die sofort sauberen Strom produziert und Ihre Energiekosten nachhaltig reduziert.</p>
                </section>
                <section>
                    <h2>Leistungsumfang</h2>
                    <ul>
                        <li><b>Individuelle Planung & Bewilligungen</b> – massgeschneidert auf Ihre Dach- und Verbrauchssituation</li>
                        <li><b>Netzanschluss & Fördermittelbeantragung</b> – wir übernehmen die gesamte Abwicklung bei Pronovo und Ihrem Energieversorger</li>
                        <li><b>Premium-Solarmodule (ca. 10 kWp Gesamtleistung)</b> – hochwertige, leistungsstarke Module mit bis zu 25 Jahren Leistungsgarantie</li>
                        <li><b>Unterkonstruktion & Wechselrichter</b> – optimal abgestimmt auf Ihr Dach und Ihr Verbrauchsprofil</li>
                        <li><b>Montage, DC/AC-Verkabelung, Gerüst & Sicherheit</b> – alle Arbeiten nach höchsten Qualitäts- und Sicherheitsstandards</li>
                        <li><b>Inbetriebnahme, Abnahme & Dokumentation</b> – Sie erhalten ein schlüsselfertiges System mit Monitoring-App</li>
                        <li><b>Organisation & Koordination sämtlicher Arbeiten</b> – ein Ansprechpartner, alles aus einer Hand</li>
                    </ul>
                </section>
                <section>
                    <h2>Investition & Förderung</h2>
                    <ul>
                        <li>
                            <p><b>Schlüsselfertige 10 kWp-Anlage</b> (inkl. Material, Montage, Gerüst, Koordination, Abnahme) <b>24’200.– CHF (exkl. MwSt.)</b></p>
                        </li>
                        <li>
                            <p>10 kWp × 360.– = <b>3’600.– CHF</b></p>
                        </li>
                        <li>
                            <p><b>Effektive Investition: 20’600.– CHF (exkl. MwSt.)</b></p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Option Speicher (10 kWh)</h2>
                    <ul>
                        <li>
                           <p>Erweiterung mit einem leistungsstarken Stromspeicher (ca. 10 kWh), geliefert & montiert <b>8’500.– CHF (exkl. MwSt.)</b></p> 
                        </li>
                    </ul>
                    <p>Damit steigern Sie Ihre Eigenverbrauchsquote auf bis zu 70 % und machen sich weitgehend unabhängig vom Netzstrom.</p>
                </section>
                <section>
                    <h2>Ihre Vorteile auf einen Blick</h2>
                    <ul>
                        <li>Reduktion Ihrer Stromrechnung um bis zu <b>50 %</b></li>
                        <li>Absicherung gegen steigende Energiepreise</li>
                        <li>Deutliche Steigerung des Immobilienwertes</li>
                        <li>CO₂-Einsparung von rund <b>4 Tonnen pro Jahr</b></li>
                        <li>Fördergelder bereits eingerechnet – wir übernehmen die Abwicklung</li>
                    </ul>
                </section>
                <section>
                    <h2>Nächster Schritt</h2>
                    <p>Lassen Sie uns gemeinsam Ihr Projekt starten. Mit EcoCore erhalten Sie eine <b>hochwertige, 
                        schlüsselfertige Lösung aus einer Hand</b>, die sofort für Sie arbeitet.</p>
                    <p>Kontaktieren Sie uns noch heute, um Ihr persönliches Projekt zu fixieren und von den 
                        aktuellen Förderbedingungen zu profitieren.</p>
                </section>
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Angebote