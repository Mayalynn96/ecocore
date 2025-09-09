import React, { useState } from 'react';
import emailjs from "emailjs-com";
import Header from '../../componants/Header/Header';
import "./Kontakt.css"
import Footer from '../../componants/Footer/Footer';
import Partner from '../../componants/Partner/Partner';

function Kontakt() {
    const [nameInput, setNameInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [telNumberInput, setTelNumberInput] = useState('');
    const [adressInput, setAdressInput] = useState('');
    // const [messageInput, setMessageInput] = useState('');
    const [liegenschaftOrt, setLiegenschaftOrt] = useState('');
    const [gebaudetyp, setGebaudetyp] = useState('');
    const [jahressverbrauch, setJahressverbrauch] = useState('');
    const [spezielleVerbaucherSonstiges, setSpezielleVerbraucherSonstiges] = useState('');
    const [wichtigesZiel, setWichtigesZiel] = useState('');
    const [speicherlosung, setSpeicherlosung] = useState('');
    const [finanzierung, setFinanzierung] = useState('');
    const [backupLosung, setBackupLosung] = useState('');

    // input handler for each state
    const handleInputChange = (e) => {
        if (e.target.id === "nameInput") {
            setNameInput(e.target.value)
        } else if (e.target.id === "firstNameInput") {
            setFirstNameInput(e.target.value)
        } else if (e.target.id === "emailInput") {
            setEmailInput(e.target.value)
        } else if (e.target.id === "telNumberInput") {
            setTelNumberInput(e.target.value)
        } else if (e.target.id === "adressInput") {
            setAdressInput(e.target.value)
        } else if (e.target.id === "messageInput") {
            // setMessageInput(e.target.value)
        } else if (e.target.id === "liegenschaftOrt") {
            setLiegenschaftOrt(e.target.value)
        } else if (e.target.id === "jahressverbrauch") {
            setJahressverbrauch(e.target.value)
        } else if (e.target.id === "spezielleVerbaucherSonstiges") {
            setSpezielleVerbraucherSonstiges(e.target.value)
        }
    }

    const handleFormSubmit = () => {
        setNameInput("");
        setFirstNameInput("");
        setEmailInput("");
        setTelNumberInput("");
        setAdressInput("");
        // setMessageInput("");
        setLiegenschaftOrt("");
        setGebaudetyp("");
        setJahressverbrauch("");
        setSpezielleVerbraucherSonstiges("");
        setWichtigesZiel("");
        setSpeicherlosung("");
        setFinanzierung("");
        setBackupLosung("");
    }

    const handleCheckOne = (e) => {
        const allBoxes = document.getElementsByName(e.target.name)

        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].checked = false
        }
        e.target.checked = true

        if (e.target.name === "gebaudetyp") {
            setGebaudetyp(e.target.value)
        } else if (e.target.name === "wichtigesZiel") {
            setWichtigesZiel(e.target.value)
        } else if (e.target.name === "speicherlosung") {
            setSpeicherlosung(e.target.value)
        } else if (e.target.name === "finanzierung") {
            setFinanzierung(e.target.value)
        } else if (e.target.name === "backupLosung") {
            setBackupLosung(e.target.value)
        }


    }

    const SendContactForm = (e) => {
        e.preventDefault();

        const spezielleVerbaucherBoxes = document.getElementsByName("spezielleVerbaucher");
        const spezielleVerbaucherAll = []

        for (let i = 0; i < spezielleVerbaucherBoxes.length; i++) {
            if (spezielleVerbaucherBoxes[i].checked === true) {
                spezielleVerbaucherAll.push(spezielleVerbaucherBoxes[i].value)
            }
        }

        if (spezielleVerbaucherSonstiges) {
            spezielleVerbaucherAll.push("sonstiges: " + spezielleVerbaucherSonstiges)
        }

        const vorbereitungBoxes = document.getElementsByName("vorbereitung");
        const vorbereitungAll = []

        for (let i = 0; i < vorbereitungBoxes.length; i++) {
            if (vorbereitungBoxes[i].checked === true) {
                vorbereitungAll.push(vorbereitungBoxes[i].value)
            }
        }

        const formData = {
            name: nameInput,
            firstName: firstNameInput,
            email: emailInput,
            tel: telNumberInput,
            adress: adressInput,
            liegenschaftOrt: liegenschaftOrt,
            gebaudetyp: gebaudetyp,
            jahressverbrauch: jahressverbrauch,
            spezielleVerbaucher: spezielleVerbaucherAll,
            wichtigesZiel: wichtigesZiel,
            speicherlosung: speicherlosung,
            finanzierung: finanzierung,
            vorbereitung: vorbereitungAll,
            backupLosung: backupLosung
        }

        emailjs.send(
            "service_u9lz1vl",
            "template_6kszi2e",
            formData,
            "vVEFCL3Xd0quic3X3"
        ).then(
            (result) => {
                handleFormSubmit()
                document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    checkbox.checked = false;
                });
                alert("Nachricht wurde gesendet!")
            },
            (error) => {
                console.log(error)
            }
        )

        console.log(formData)
    }

    return (
        <section id='kontaktPageSection'>
            <Header />
            <main>
                <h1>Kontakt</h1>
                <section className='pageSection'>
                    <div id='kontaktForm'>
                        <h2>Formular</h2>
                        <form>
                            <h3>Kontakt- und Objektdaten</h3>
                            <label>Name:</label>
                            <input value={nameInput} onChange={handleInputChange} id='nameInput'></input>
                            <label>Vorname:</label>
                            <input value={firstNameInput} onChange={handleInputChange} id='firstNameInput'></input>
                            <label>Email:</label>
                            <input value={emailInput} onChange={handleInputChange} id='emailInput'></input>
                            <label>Telefon Number:</label>
                            <input value={telNumberInput} onChange={handleInputChange} id='telNumberInput'></input>
                            <label>Adresse:</label>
                            <input value={adressInput} onChange={handleInputChange} id='adressInput'></input>
                            <label>Liegenschaft befindet sich in:</label>
                            <input value={liegenschaftOrt} onChange={handleInputChange} id='liegenschaftOrt'></input>
                            <h3>Gebäudetyp</h3>
                            <label>Einfamilienhaus (EFH)
                                <input type="checkbox" name="gebaudetyp" value="Einfamilienhaus (EFH)" onChange={handleCheckOne}></input>
                            </label>
                            <label>Mehrfamilienhaus (MFH)
                                <input type="checkbox" name="gebaudetyp" value="Mehrfamilienhaus (MFH)" onChange={handleCheckOne}></input>
                            </label>
                            <label>Überbauung / Zusammenschluss (ZEV / VZEV)
                                <input type="checkbox" name="gebaudetyp" value="Überbauung / Zusammenschluss (ZEV / VZEV)" onChange={handleCheckOne}></input>
                            </label>
                            <h3>Aktueller Stromverbrauch</h3>
                            <label>Jahresstromverbrauch (kWh)</label>
                            <input type="number" value={jahressverbrauch} onChange={handleInputChange} id='jahressverbrauch'></input>
                            <label><b>Spezielle Verbraucher (Mehrfachauswahl Checkboxen):</b></label>
                            <label>Wärmepumpe
                                <input type="checkbox" name="spezielleVerbaucher" value="Wärmepumpe"></input>
                            </label>
                            <label>Boiler / Warmwasser
                                <input type="checkbox" name="spezielleVerbaucher" value="Boiler / Warmwasser"></input>
                            </label>
                            <label>Elektroauto
                                <input type="checkbox" name="spezielleVerbaucher" value="Elektroauto"></input>
                            </label>
                            <label>Klimaanlage
                                <input type="checkbox" name="spezielleVerbaucher" value="Klimaanlage"></input>
                            </label>
                            <label>Sonstige
                                <input onChange={handleInputChange} name="spezielleVerbaucher" id="spezielleVerbaucherSonstiges" value={spezielleVerbaucherSonstiges} ></input>
                            </label>
                            <h3>Ziele & Prioritäten</h3>
                            <label><b>Wichtigstes Ziel:</b></label>
                            <label>Stromkosten sparen
                                <input type="checkbox" name="wichtigesZiel" value="Stromkosten sparen" onChange={handleCheckOne}></input>
                            </label>
                            <label>Unabhängigkeit steigern
                                <input type="checkbox" name="wichtigesZiel" value="Unabhängigkeit steigern" onChange={handleCheckOne}></input>
                            </label>
                            <label>Nachhaltigkeit / Ökologie
                                <input type="checkbox" name="wichtigesZiel" value="Nachhaltigkeit / Ökologie" onChange={handleCheckOne}></input>
                            </label>
                            <label><b>Speicherlösung :</b></label>
                            <label>Speicher von Anfang an
                                <input type="checkbox" name="speicherlosung" value="Speicher von Anfang an" onChange={handleCheckOne}></input>
                            </label>
                            <label>Erst ohne Speicher starten
                                <input type="checkbox" name="speicherlosung" value="Erst ohne Speicher starten" onChange={handleCheckOne}></input>
                            </label>
                            <h3>Finanzielle Rahmenbedingungen</h3>
                            <label><b>Finanzierung :</b></label>
                            <label>Kauf
                                <input type="checkbox" name="finanzierung" value="Kauf" onChange={handleCheckOne}></input>
                            </label>
                            <label>Finanzierung / Leasing prüfen
                                <input type="checkbox" name="finanzierung" value="Finanzierung / Leasing prüfen" onChange={handleCheckOne}></input>
                            </label>
                            <h3>Erweiterungen & Zukunft</h3>
                            <label><b>Vorbereitung auf :</b></label>
                            <label>E-Mobilität (Wallbox)
                                <input type="checkbox" name="vorbereitung" value="E-Mobilität (Wallbox)"></input>
                            </label>
                            <label>Zukünftige Erweiterung PV
                                <input type="checkbox" name="vorbereitung" value="Zukünftige Erweiterung PV"></input>
                            </label>
                            <label><b>Backup-Lösung bei Stromausfall :</b></label>
                            <label>Ja
                                <input type="checkbox" name="backupLosung" value="Ja" onChange={handleCheckOne}></input>
                            </label>
                            <label>Nein
                                <input type="checkbox" name="backupLosung" value="Nein" onChange={handleCheckOne}></input>
                            </label>
                            <label>Vielleicht
                                <input type="checkbox" name="backupLosung" value="Vielleicht" onChange={handleCheckOne}></input>
                            </label>
                        </form>
                        <button onClick={SendContactForm}>Senden</button>
                    </div>
                    <div>
                        <h2>Sonnendach Map</h2>
                        <iframe id='sonnendachCH' title="sonnendachMap" src='//www.uvek-gis.admin.ch/BFE/sonnendach/loader.html?E=2660000&N=1190000&zoom=1&lang=de'></iframe>
                    </div>
                </section>
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Kontakt