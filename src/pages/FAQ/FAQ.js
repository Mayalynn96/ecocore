import React, { useEffect, useState } from 'react';
import Header from '../../componants/Header/Header';
import "./FAQ.css"
import QAndA from '../../componants/QAndA/QAndA'
import Partner from '../../componants/Partner/Partner';
import Footer from '../../componants/Footer/Footer';
import SonnenDachMap from '../../componants/SonnenDachMap/SonnenDachMap';

function FAQ() {
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
    
    const [sonnenDachIsOpen, setSonnenDachIsOpen] = useState(false)

    const openSonnenDachMap = () => {
        setSonnenDachIsOpen(true)
    }

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
                    question: "Wie viel Strom kann ich mit meiner Dachfläche erzeugen?",
                    answer:
                        `<p>Eine typische Solaranlage auf einem Einfamilienhaus produziert zwischen <b>4 000 und 10 000 kWh pro Jahr</B> – 
                je nach Dachgrösse, Ausrichtung und Technik. Damit können viele Haushalte <b>30–80 % ihres Strombedarfs</b>
                direkt mit Solarstrom abdecken.</p>

                <p>👉 Auf der Sonnendach-Map (Knopf oben) sehen Sie, wie viel Ihr Hausdach leisten kann.</p>`,
                hasBtn: true
                },
                {
                    question: "Wie hoch ist der typische Ertrag einer Solaranlage?",
                    answer:
                        `<p>In der Schweiz produziert 1 kWp installierte Leistung im Schnitt <b>950–1 100 kWh pro Jahr</b>.</P>
                    <ul>
                        <li>Ein durchschnittliches Einfamilienhaus <b>ohne Wärmepumpe</b> benötigt rund <b>4 000 kWh Strom pro Jahr</b>.</li>
                        <li>Mit <b>Wärmepumpe und Warmwasseraufbereitung</b> steigt der Verbrauch auf etwa <b>12 000 kWh pro Jahr</b>.</li>
                    </ul>
                <p>👉 So können Sie abschätzen, wie gross Ihre Anlage im Verhältnis zu Ihrem Verbrauch sein sollte.</p>`
                },
                {
                    question: "Was kostet eine Solaranlage und wann lohnt sie sich?",
                    answer: `
                <p>Die Investition für eine typische Anlage auf einem Einfamilienhaus liegt meist zwischen <b>CHF 15’000 und 30’000</b>, 
                abhängig von Grösse, Dachform und Technik.</p>
                    <ul>
                        <li>Dank Fördergeldern und tieferen Stromkosten amortisiert sich die Anlage in der Regel nach <b>8–12 Jahren</b>.</li>
                        <li>Danach profitieren Sie noch mindestens 15 Jahre von praktisch kostenlosem Solarstrom.</li>
                    </ul>
                <p><a href="kontakt">👉 <b>Nehmen Sie Kontakt mit uns auf – wir beraten Sie individuell und erstellen Ihnen gerne ein persönliches Angebot.</b></a></p>
                `
                },
                {
                    question: "Welche Förderungen bekomme ich in der Schweiz?",
                    answer: `
                <p>Über die nationale Einmalvergütung (EIV) erhalten Sie rund 20–30 % der Investitionskosten zurück. 
                Zusätzlich unterstützen viele Kantone oder Gemeinden mit weiteren Beiträgen.</P>

                <p><a href="kontakt"><b>👉 EcoCore übernimmt die Abklärungen für Sie – fragen Sie uns für eine konkrete Berechnung Ihrer Förderung an.</b></a></p>
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
                },
                {
                    question: "Muss ich für die Anlage etwas bewilligen lassen?",
                    answer:
                        `<p>In den meisten Kantonen sind Solaranlagen auf Dächern bewilligungsfrei, solange sie ins Dach integriert oder 
                parallel montiert werden.</p>

                <p>👉 <b>Ausnahme:</b> Wenn sich Ihr Haus in einer <b>Kernzone oder in einem denkmalgeschützten Bereich</b> befindet, 
                können zusätzliche Bewilligungen nötig sein. <b>EcoCore kümmert sich auch darum</b> und übernimmt für Sie alle Formalitäten.</p>`
                },
                {
                    question: "Muss ich mich um etwas kümmern – oder erledigt EcoCore alles für mich?",
                    answer:
                        `<p>Nein – Sie brauchen sich um nichts zu kümmern. EcoCore übernimmt die gesamte Abwicklung:</p>
                    <ul>
                        <li>Planung & Beratung</li>
                        <li>Bewilligungen & Förderanträge</li>
                        <li>Organisation von Gerüstbau, Elektriker & Montage</li>
                        <li>Inbetriebnahme, Abnahme & Dokumentation</li>
                    </ul>
                <p><a href="kontakt"><b>👉 Sprechen Sie uns an – wir übernehmen die komplette Koordination für Sie.</b></a></p>`
                },
                {
                    question: "Welche Unterhaltsarbeiten fallen an und mit welchen Kosten muss ich rechnen?",
                    answer: `
                <p>Photovoltaikanlagen sind sehr wartungsarm. In der Praxis rechnet man mit durchschnittlich <b>3–5 
                Rappen pro installiertem Watt Leistung und Jahr</b>. Darin enthalten sind:</p>
                    <ul>
                        <li><b>Regelmässige Sichtkontrollen</b></li>
                        <li><b>Gelegentliche Reinigung</b> (je nach Lage alle 3–5 Jahre)</li>
                        <li><b>Technische Prüfungen</b></li>
                        <li><b>Rücklagen für Austauschgeräte</b> wie Wechselrichter oder Speicher</li>
                    </ul>
                <p>👉 Damit sind die Unterhaltskosten <b>sehr überschaubar</b> und im Verhältnis zur Lebensdauer von 25–30 Jahren gering.</p>
                `
                }
            ]
        },
        {
            title: "C. Zusatznutzen & Technik",
            questions: [
                {
                    question: "Brauche ich einen Stromspeicher?",
                    answer:
                        `<p>Ein Speicher ist kein Muss, aber <b>kann sehr sinnvoll sein</b>: Er speichert überschüssigen Solarstrom vom Tag 
                und stellt ihn abends oder nachts zur Verfügung. So steigern Sie Ihren Eigenverbrauch und sparen noch mehr Stromkosten.</p>

                <p><b>👉 Wir prüfen für Sie, ob ein Speicher in Ihrem Fall sinnvoll ist und erstellen Ihnen eine passende Lösung.</b></p>`
                },
                {
                    question: "Kann ich mit meiner Solaranlage auch mein Elektroauto laden?",
                    answer:
                        `<p>Ja – genau dafür ist Photovoltaik bestens geeignet. Mit einer intelligenten Wallbox laden Sie Ihr 
                Elektroauto bevorzugt mit eigenem Solarstrom. So fahren Sie fast kostenlos und klimafreundlich.</p>

                <p><b>👉 EcoCore integriert Ladelösungen direkt – <a href="kontakt">lassen Sie sich von uns beraten.</a></b></p>`
                },
                {
                    question: "Was kann meine PV-Anlage sonst noch für mich leisten?",
                    answer:
                        `<p>Eine Photovoltaikanlage kann weit mehr, als nur Strom ins Hausnetz einzuspeisen.
                 Mit einem Energiemanagementsystem können verschiedene Geräte automatisch mit Solarstrom betrieben werden, z. B.:</p>
                    <ul>
                        <li>Boiler oder Warmwasseraufbereitung</li>
                        <li>Wärmepumpe für Heizung und Warmwasser</li>
                        <li>Elektroauto-Ladestation</li>
                        <li>Haushaltsgeräte</li>
                    </ul>
                <p>👉 So erhöhen Sie Ihren Eigenverbrauch, sparen Energiekosten und steigern Ihre Energieunabhängigkeit.</p>`
                },
                {
                    question: "Läuft meine Anlage auch bei einem Stromunterbruch?",
                    answer: `
                <p>Standardmässig schalten sich Photovoltaikanlagen bei einem Stromausfall automatisch ab – das ist gesetzlich vorgeschrieben, 
                damit keine Gefahr für das Netz entsteht.</p>

                <p>Es gibt jedoch <b>Backuplösungen:</b></p>
                    <ul>
                        <li>Mit einem <b>Speicher und Notstromfunktion</b> kann bei Stromausfall <b>ein Teil des Hauses</b> 
                        (z. B. Kühlschrank, Licht, Heizungspumpe) oder – mit entsprechender Auslegung – auch <b>das gesamte 
                        Haus</b> weiterbetrieben werden.</li>
                        <li>Mit speziellen <b>Backup-Wechselrichtern</b> oder in Zukunft auch mit <b>Vehicle-to-Home (V2H)</b>-Lösungen 
                        kann die Stromversorgung noch flexibler gestaltet werden.</p>
                    </ul>
                <p><b>👉 Wir zeigen Ihnen gerne, welche Backup-Lösung für Ihr Haus sinnvoll ist.</b></p>
                `
                },
                {
                    question: "Kann mein Elektroauto künftig auch als Speicher für mein Haus dienen?",
                    answer:
                        `
            <p>Ja – die Technik entwickelt sich genau in diese Richtung. Mit <b>Vehicle-to-Home (V2H)</b> oder <b>Vehicle-to-Load (V2L)</b>
            kann die Batterie eines Elektroautos nicht nur geladen, sondern auch wieder Strom ins Haus zurückspeisen.</p>

            <p><b>👉 EcoCore verfolgt die Entwicklung genau – <a href="kontakt">wir beraten Sie</a>, wenn diese Lösungen verfügbar und sinnvoll sind.</b></p>
            `
                },
                {
                    question: "Was bedeutet ZEV oder VZEV – und lohnt sich das für Mehrfamilienhäuser?",
                    answer: `
            <p>Ein <b>ZEV (Zusammenschluss zum Eigenverbrauch)</b> ermöglicht es mehreren Parteien in einem Mehrfamilienhaus 
            oder einer Überbauung, den gemeinsam produzierten Solarstrom direkt zu nutzen.</p>

            <p>Ein <b>VZEV (Virtueller ZEV)</b> geht noch einen Schritt weiter: Hier können auch mehrere Liegenschaften, 
            die nicht direkt am gleichen Netzanschluss hängen, virtuell zusammengeschlossen werden.</p>

            <p><b>👉 EcoCore unterstützt Eigentümergemeinschaften bei der Einrichtung eines ZEV – <a href="kontakt">kontaktieren Sie uns für Details.</a></b></p>
            `
                }
            ]
        },
        {
            title: "D. Qualität, Sicherheit & Architektur",
            questions: [
                {
                    question: "Wie lange hält eine Solaranlage?",
                    answer:
                        `<p>Die Module halten mindestens 25–30 Jahre. Die meisten Hersteller geben Leistungsgarantien von 25 Jahren. 
                    Wechselrichter oder Speicher können nach 10–15 Jahren einmal ersetzt werden.</p>`
                },
                {
                    question: "Wie wirkt sich eine Solaranlage auf den Wert meines Hauses aus?",
                    answer:
                        `<p>Sehr positiv. Häuser mit Solaranlagen sind gefragter, weil die Nebenkosten tiefer sind und der ökologische 
                    Fussabdruck sinkt. Viele Käufer sind bereit, für ein energieoptimiertes Haus mehr zu bezahlen.</p>`
                },
                {
                    question: "Wie passe ich Solaranlagen architektonisch in mein Zuhause ein?",
                    answer:
                        `<p>Moderne Solartechnik lässt sich heute elegant und ästhetisch in Gebäude integrieren – z. B. mit Solarziegeln oder 
                    flächenbündig eingebauten Modulen. So fügt sich die Anlage harmonisch in die Architektur ein, ohne die Optik des Hauses zu stören.</p>`
                },
                {
                    question: "Wie nachhaltig ist eine Solaranlage?",
                    answer: `
                    <p>Eine Photovoltaikanlage hat eine Lebensdauer von rund 25–30 Jahren. Danach können die Module recycelt werden – wichtige Rohstoffe 
                    wie Glas, Aluminium, Silizium und Silber werden zurückgewonnen. Viele kommunale Sammelstellen nehmen bis zu 20 Module kostenlos entgegen.</p>

                    <p>👉 Damit ist Solarstrom nicht nur klimafreundlich in der Nutzung, sondern auch nachhaltig im Lebenszyklus.</p>
                    `
                },
                {
                    question: "Wie berücksichtigt EcoCore das Thema Brandschutz?",
                    answer:
                        `
                <p>Brandschutz ist ein zentraler Bestandteil unserer Planung. EcoCore sorgt dafür, dass alle Anlagen 
                den geltenden Vorschriften entsprechen:</p>
                    <ul>
                        <li><b>Dach- und Fassadenanlagen:</b> Umsetzung gemäss <b>VKF-Brandschutzrichtlinien</b> und Anforderungen der Gebäudeversicherung.</li>
                        <li><b>Abstände & Sicherheit:</b> Einhaltung von Mindestabständen zu Dachkanten, Brandwänden und Fassadenöffnungen.</li>
                        <li><b>Materialwahl:</b> Verwendung von <b>brandsicheren Unterkonstruktionen, Kabeln und Montagesystemen.</b></li>
                        <li><b>Speicherlösungen:</b> Batteriesysteme mit neuesten Sicherheitsstandards, inkl. <b>Temperatur- und Brandüberwachung.</b></li>
                        <li><b>Dokumentation & Versicherung:</b> Vollständige Nachweise für Versicherungen und Behörden.</li>
                    </ul>
                <p><b>👉 EcoCore plant Ihre Anlage so, dass sie nicht nur effizient, sondern auch maximal sicher ist.</b></p>
                `
                },
                {
                    question: "Welche weiteren Punkte berücksichtigt EcoCore bei Planung und Umsetzung?",
                    answer: `
                <p>Bei EcoCore geht es nicht nur um die Module auf dem Dach – wir achten auf eine <b>ganzheitliche, sichere und saubere Umsetzung:</b></p>
                    <ul>
                        <li><b>Hausanschluss & Netzverträglichkeit</b></li>
                        <li><b>SUVA-konforme Gerüste & Absturzsicherung</b></li>
                        <li><b>Statik & Schneelastbeurteilung inkl. Schneefang</b></li>
                        <li><b>Versicherungs- und Bewilligungsunterstützung</b></li>
                        <li><b>Rückbau bestehender Anlagen (z. B. Solarthermie, Kamine)</b></li>
                        <li><b>UV-beständige Materialien, saubere Kabelwege, versteckte DC-Leitungen</b></li>
                        <li><b>Montage durch geschulte Fachmitarbeiter</b></li>
                    </ul>
                <p><b>👉 Wir achten für Sie auf jedes Detail – <a href="kontakt">sprechen Sie uns an.</a></b></p>
                `
                },
                {
                    question: "Warum soll ich mich für EcoCore entscheiden?",
                    answer: `
                <p>Weil Sie einen regionalen Partner mit viel Erfahrung erhalten. EcoCore steht für:</p>
                    <ul>
                        <li>Persönliche Beratung & individuelle Planung</li>
                        <li>Hochwertige, langlebige Komponenten</li>
                        <li>Nachhaltige Lösungen mit Fokus auf Energieoptimierung</li>
                        <li>Ein Team, das Ihre Sprache spricht und in der Region verwurzelt ist</li>
                    </ul>
                <p><b>👉 Überzeugen Sie sich selbst – <a href="kontakt">wir beraten Sie</a> persönlich und unverbindlich.</b></p>
                `
                }
            ]
        }
    ]

    return (
        <section id='FAQPageSection'>
            <Header />
            <main>
                <h1>FAQ</h1>
                <button id='SonnenDachBtnFix' onClick={openSonnenDachMap}>Sonnendach Map öffnen</button>
                <div>
                    {QAndA(faq)}
                </div>
                <div>
                    <h2>Noch Fragen?</h2>
                    <p>EcoCore berät Sie persönlich und unverbindlich.
                        Nutzen Sie unser <a href="kontakt">Kontaktformular</a> oder rufen Sie uns an – wir zeigen Ihnen, was Ihre Dachfläche leisten kann.</p>
                </div>
            </main>
            <SonnenDachMap isOpen={sonnenDachIsOpen} setIsOpen={setSonnenDachIsOpen}/>
            <Partner />
            <Footer />
        </section>
    )
}

export default FAQ