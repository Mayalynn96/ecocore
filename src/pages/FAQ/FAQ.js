import React from 'react';
import Header from '../../componants/Header/Header';
import "./FAQ.css"
import QAndA from '../../componants/QAndA/QAndA'

function FAQ() {
    const faq = [
        {
            question: "Wann lohnt sich eine Photovoltaikanlage?",
            answer:
                `<p>Eine Photovoltaikanlage lohnt sich für Sie, wenn Sie einen hohen Eigenverbrauch haben
                    – beispielsweise durch Homeoffice, eine Wärmepumpe oder ein Elektroauto – und Ihr Dach gut ausgerichtet ist
                    (idealerweise nach Süden, aber auch Ost-/Westdächer sind geeignet). Wenn Sie planen, langfristig in Ihrem Haus zu bleiben,
                    profitieren Sie zusätzlich von steuerlichen Vorteilen (wie 0 % Mehrwertsteuer und Steuerfreiheit auf Einspeisung).
                    In der Regel amortisiert sich eine Anlage nach 8–12 Jahren und liefert anschließend über 25 Jahre hinweg sauberen,
                    kostengünstigen Strom.</p>`
        },
        {
            question: "Wie läuft ein Projekt mit Eco Core?",
            answer:
                `<ul>
                    <li>Beratung & Analyse: Ersteinschätzung Ihres Dachs und Strombedarfs.</li>
                    <li>Planung & Angebot: Individuelles Konzept und transparentes Kostenangebot.</li>
                    <li>Förderung & Anmeldung: Unterstützung bei Anträgen und Netzanschluss.</li>
                    <li>Montage & Inbetriebnahme: Fachgerechter Aufbau und Anschluss der Anlage.</li>
                    <li>Service & Überwachung: Optionales Monitoring und Wartung zur Effizienzsicherung.</li>
                </ul>
                <p>So erhalten Sie eine auf Sie zugeschnittene Photovoltaikanlage – zuverlässig und schlüsselfertig.</p>`
        },
        {
            question: "Gibt es Förderungen für PV in der Schweiz?",
            answer:
                `<p>Ja, in der Schweiz gibt es verschiedene Förderprogramme für Photovoltaikanlagen (PV),
                    sowohl auf Bundes- als auch auf Kantonsebene.</p>
                <ul>
                    <li>Einmalvergütung (EIV): Einmaliger Beitrag vom Bund für neue Anlagen (bis ca. 30 % der Investitionskosten).</li>
                    <li>KLEIV und GREIV: Für kleine und große Anlagen je nach Größe.</li>
                    <li>Zusätzliche Förderungen: Manche Kantone oder Gemeinden bieten weitere Beiträge oder Steuervergünstigungen.</li>
                </ul>`
        }
    ]

    return (
       <section id='FAQPageSection'>
            <Header />
            <main>
                <h1>FAQ</h1>
                <div>
                    {QAndA(faq)}
                </div>
            </main>
       </section> 
    )
}

export default FAQ