import React from 'react';
import { useNavigate } from "react-router-dom";
import "./HaufigeFragen.css"
import QAndA from "../../../../componants/QAndA/QAndA"

function HaufigeFragen() {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    const faq = [
        {
            title: "A. Grundlagen & Wirtschaftlichkeit",
            questions: [
                {
                    question: "Lohnt sich eine Solaranlage auf meinem Haus überhaupt?",
                    answer:
                        `<p>Ja – in den meisten Fällen sehr. Mit einer Solaranlage produzieren Sie Ihren eigenen Strom, 
                        senken Ihre Energiekosten und machen sich unabhängiger von steigenden Strompreisen. Schon nach etwa 10 
                        Jahren hat sich eine Anlage amortisiert – und sie produziert mindestens 25–30 Jahre zuverlässig Strom.</p>`
                },
                {
                    question: "Welche Förderungen bekomme ich in der Schweiz?",
                    answer: `
                        <p>Über die nationale Einmalvergütung (EIV) erhalten Sie rund 20–30 % der Investitionskosten zurück. 
                        Zusätzlich unterstützen viele Kantone oder Gemeinden mit weiteren Beiträgen.</P>

                        <p><b>👉 EcoCore übernimmt die Abklärungen für Sie – fragen Sie uns für eine konkrete Berechnung Ihrer Förderung an.</b></p>
                        `
                }
            ]
        },
        {
            title: "B. Ablauf & Organisation",
            questions: [
                {
                    question: "Wie lange dauert die Installation?",
                    answer:
                        `<p>Bei einem Einfamilienhaus ist die reine Montage der Solarmodule auf dem Dach meist in <b>1–3 Tagen</b> abgeschlossen. 
                            Dazu kommen jedoch weitere Schritte:</p>
                            <ul>
                                <li><b>Gerüstbau:</b> wird in der Regel 1–2 Tage vor Beginn aufgestellt und nach der Montage wieder entfernt.</li>
                                <li><b>Elektroarbeiten:</b> Der Elektriker benötigt zusätzliche Zeit für die Verkabelung, 
                                den Anschluss des Wechselrichters und den Zählerwechsel.</li>
                                <li><b>Abnahme & Netzanschluss:</b> erfolgt durch den Netzbetreiber, abhängig von Terminverfügbarkeit.</li>
                            </ul>
                        <p>👉 Insgesamt sollten Sie bei einem Einfamilienhaus mit <b>ca. 1–2 Wochen Gesamtdauer</b> rechnen – wobei die 
                        eigentliche Dachmontage nur wenige Tage beansprucht. EcoCore koordiniert alle Schritte für Sie.</p>`
                }
            ]
        }
    ]

    return (
        <section id='heufigeFragenSection'>
            <h1>Häufig gestellten Fragen</h1>
            {QAndA(faq)}
            <div>
                <button onClick={() => handleNavigation("FAQ")}>Mehr Fragen und Antworten</button>
            </div>
        </section>
    )
}

export default HaufigeFragen