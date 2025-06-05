import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./HaufigeFragen.css"
import Arrow from "./down-arrow.svg"

function HaufigeFragen() {

    const [visibility, setVisibility] = useState({
        element1: false,
        element2: false,
        element3: false,
    });

    const handleVisibility = (element) => {
        
        if(element === "element1"){
            const newObject = {
                element1: !visibility.element1,
                element2: false,
                element3: false
            }
            setVisibility(newObject)
        }
    }


    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='heufigeFragenSection'>
            <div className='fragenDiv'>
                <div className='frageUndAntwort'>
                    <div className='frageDiv'>
                        <h3>Wann lohnt sich eine Photovoltaikanlage?</h3>
                        <img src={Arrow} alt='arrow down' className='arrowDown' onClick={() => handleVisibility('element1')} />
                    </div>
                    {visibility.element1 && <div className='antwortDiv'>
                        <p>Eine Photovoltaikanlage lohnt sich für Sie, wenn Sie einen hohen Eigenverbrauch haben
                            – beispielsweise durch Homeoffice, eine Wärmepumpe oder ein Elektroauto – und Ihr Dach gut ausgerichtet ist
                            (idealerweise nach Süden, aber auch Ost-/Westdächer sind geeignet). Wenn Sie planen, langfristig in Ihrem Haus zu bleiben,
                            profitieren Sie zusätzlich von steuerlichen Vorteilen (wie 0 % Mehrwertsteuer und Steuerfreiheit auf Einspeisung).
                            In der Regel amortisiert sich eine Anlage nach 8–12 Jahren und liefert anschließend über 25 Jahre hinweg sauberen,
                            kostengünstigen Strom.</p>
                    </div>}
                </div>
                <div className='frageUndAntwort'>
                    <div className='frageDiv'>
                        <h3>Wie läuft ein Projekt mit Eco Core?</h3>
                        <img src={Arrow} alt='arrow down' className='arrowDown' />
                    </div >
                    {visibility.element2 && <div className='antwortDiv'>
                        <ul>
                            <li>Beratung & Analyse: Ersteinschätzung Ihres Dachs und Strombedarfs.</li>
                            <li>Planung & Angebot: Individuelles Konzept und transparentes Kostenangebot.</li>
                            <li>Förderung & Anmeldung: Unterstützung bei Anträgen und Netzanschluss.</li>
                            <li>Montage & Inbetriebnahme: Fachgerechter Aufbau und Anschluss der Anlage.</li>
                            <li>Service & Überwachung: Optionales Monitoring und Wartung zur Effizienzsicherung.</li>
                        </ul>
                        <p>So erhalten Sie eine auf Sie zugeschnittene Photovoltaikanlage – zuverlässig und schlüsselfertig.</p>
                    </div>}
                </div>
                <div className='frageUndAntwort'>
                    <div className='frageDiv'>
                        <h3>Gibt es Förderungen für PV in der Schweiz?</h3>
                        <img src={Arrow} alt='arrow down' className='arrowDown' />
                    </div>
                    {visibility.element3 && <div className='antwortDiv'>
                        <p>Ja, in der Schweiz gibt es verschiedene Förderprogramme für Photovoltaikanlagen (PV),
                            sowohl auf Bundes- als auch auf Kantonsebene.</p>
                        <ul>
                            <li>Einmalvergütung (EIV): Einmaliger Beitrag vom Bund für neue Anlagen (bis ca. 30 % der Investitionskosten).</li>
                            <li>KLEIV und GREIV: Für kleine und große Anlagen je nach Größe.</li>
                            <li>Zusätzliche Förderungen: Manche Kantone oder Gemeinden bieten weitere Beiträge oder Steuervergünstigungen.</li>
                        </ul>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default HaufigeFragen