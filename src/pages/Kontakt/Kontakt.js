import React, { useState, useEffect} from 'react';
import emailjs from "emailjs-com";
import Header from '../../componants/Header/Header';
import "./Kontakt.css"
import Footer from '../../componants/Footer/Footer';
import Partner from '../../componants/Partner/Partner';
import SonnenDachMap from '../../componants/SonnenDachMap/SonnenDachMap';

function Kontakt() {
    useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

    const [nameInput, setNameInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [telNumberInput, setTelNumberInput] = useState('');
    const [adressInput, setAdressInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [gebaudetyp, setGebaudetyp] = useState('');
    const [jahressverbrauch, setJahressverbrauch] = useState('');
    const [aktuelleHeizart, setAktuelleHeizart] = useState('');
    const [spezielleVerbaucherSonstiges, setSpezielleVerbraucherSonstiges] = useState('');
    const [aktuelleHeizartSonstiges, setAktuelleHeizartSonstiges] = useState('');
    const [wichtigesZiel, setWichtigesZiel] = useState('');
    const [speicherlosung, setSpeicherlosung] = useState('');
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
            setMessageInput(e.target.value)
        } else if (e.target.id === "jahressverbrauch") {
            setJahressverbrauch(e.target.value)
        } else if (e.target.id === "spezielleVerbaucherSonstiges") {
            setSpezielleVerbraucherSonstiges(e.target.value)
        } else if (e.target.id === "aktuelleHeizartSonstiges") {
            setAktuelleHeizartSonstiges(e.target.value)
        }
    }

    const handleFormSubmit = () => {
        setNameInput("");
        setFirstNameInput("");
        setEmailInput("");
        setTelNumberInput("");
        setAdressInput("");
        setMessageInput("");
        setGebaudetyp("");
        setJahressverbrauch("");
        setAktuelleHeizart("");
        setSpezielleVerbraucherSonstiges("");
        setAktuelleHeizartSonstiges("");
        setWichtigesZiel("");
        setSpeicherlosung("");
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
        } else if(e.target.name === "aktuelleHeizart") {
           setAktuelleHeizart(e.target.value)
        } else if (e.target.name === "wichtigesZiel") {
            setWichtigesZiel(e.target.value)
        } else if (e.target.name === "speicherlosung") {
            setSpeicherlosung(e.target.value)
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

        const verfugbarkeitBoxes = document.getElementsByName("verfugbarkeit");
        const verfugbarkeitAll = []

        for (let i = 0; i < verfugbarkeitBoxes.length; i++) {
            if (verfugbarkeitBoxes[i].checked === true) {
                verfugbarkeitAll.push(verfugbarkeitBoxes[i].value)
            }
        }

        const aktuelleHeizartFinal = () => {
            if(aktuelleHeizart === 'sonstige'){
                return aktuelleHeizartSonstiges
            } else {
                return aktuelleHeizart
            }
        }

        const formData = {
            name: nameInput,
            firstName: firstNameInput,
            email: emailInput,
            tel: telNumberInput,
            adress: adressInput,
            verfugbarkeit: verfugbarkeitAll,
            gebaudetyp: gebaudetyp,
            jahressverbrauch: jahressverbrauch,
            aktuelleHeizart: aktuelleHeizartFinal(),
            spezielleVerbaucher: spezielleVerbaucherAll,
            wichtigesZiel: wichtigesZiel,
            speicherlosung: speicherlosung,
            backupLosung: backupLosung,
            message: messageInput
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

    const openSonnenDachMap = () => {
        setIsOpen(true)
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id='kontaktPageSection'>
            <Header />
            <main>
                <SonnenDachMap isOpen={isOpen} setIsOpen={setIsOpen}/>
                <button onClick={openSonnenDachMap}>Sonnendach Map öffnen</button>
                <h1>Kontakt</h1>
                <section className='pageSection'>
                    <div id='kontaktForm'>
                        <h2>Formular</h2>
                        <form>
                            <h3>Kontakt- und Objektdaten</h3>
                            <label>Name:
                            <input value={nameInput} onChange={handleInputChange} id='nameInput'></input>
                            </label>
                            <label>Vorname:
                            <input value={firstNameInput} onChange={handleInputChange} id='firstNameInput'></input>
                            </label>
                            <label>Email:
                            <input value={emailInput} onChange={handleInputChange} id='emailInput'></input>
                            </label>
                            <label>Telefon Number:
                            <input value={telNumberInput} onChange={handleInputChange} id='telNumberInput'></input>
                            </label>
                            <label>Adresse:
                            <input value={adressInput} onChange={handleInputChange} id='adressInput'></input>
                            </label>
                            <label><b>Verfügbarkeit für Gespräch</b></label>
                            <label>Morgens
                                <input className='checkbox' type="checkbox" name="verfugbarkeit" value="Morgens"></input>
                            </label>
                            <label>Mittags
                                <input className='checkbox' type="checkbox" name="verfugbarkeit" value="Mittags"></input>
                            </label>
                            <label>Nachmittags
                                <input className='checkbox' type="checkbox" name="verfugbarkeit" value="Nachmittags"></input>
                            </label>
                            <label>Abends
                                <input className='checkbox' type="checkbox" name="verfugbarkeit" value="Abends"></input>
                            </label>
                            <h3>Gebäudetyp</h3>
                            <label>Einfamilienhaus (EFH)
                                <input className='checkbox' type="checkbox" name="gebaudetyp" value="Einfamilienhaus (EFH)" onChange={handleCheckOne}></input>
                            </label>
                            <label>Mehrfamilienhaus (MFH)
                                <input className='checkbox' type="checkbox" name="gebaudetyp" value="Mehrfamilienhaus (MFH)" onChange={handleCheckOne}></input>
                            </label>
                            <label>Überbauung / Zusammenschluss (ZEV / VZEV)
                                <input className='checkbox' type="checkbox" name="gebaudetyp" value="Überbauung / Zusammenschluss (ZEV / VZEV)" onChange={handleCheckOne}></input>
                            </label>
                            <h3>Aktueller Stromverbrauch</h3>
                            <label>Jahresstromverbrauch (kWh)
                            <input type="number" value={jahressverbrauch} onChange={handleInputChange} id='jahressverbrauch'></input>
                            </label>
                            <label><b>Aktuelle Heizart:</b></label>
                            <label>Wärmepumpe
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Wärmepumpe" onChange={handleCheckOne}></input>
                            </label>
                            <label>Gas
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Gas" onChange={handleCheckOne}></input>
                            </label>
                            <label>Heizöl
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Heizöl" onChange={handleCheckOne}></input>
                            </label>
                            <label>Strom
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Strom" onChange={handleCheckOne}></input>
                            </label>
                            <label >Sonstige
                                <div id='sonstigeTextAndCheckbox'>
                                    <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="sonstige" onChange={handleCheckOne}></input>
                                <input onChange={handleInputChange} name="aktuelleHeizart" id="aktuelleHeizartSonstiges" value={aktuelleHeizartSonstiges} ></input>
                                </div>
                            </label>
                            <label><b>Spezielle Verbraucher (Mehrfachauswahl Checkboxen):</b></label>
                            <label>Wärmepumpe
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Wärmepumpe"></input>
                            </label>
                            <label>Boiler / Warmwasser
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Boiler / Warmwasser"></input>
                            </label>
                            <label>Elektroauto
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Elektroauto"></input>
                            </label>
                            <label>Klimaanlage
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Klimaanlage"></input>
                            </label>
                            <label>Sonstige
                                <input onChange={handleInputChange} name="spezielleVerbaucher" id="spezielleVerbaucherSonstiges" value={spezielleVerbaucherSonstiges} ></input>
                            </label>
                            <h3>Ziele & Prioritäten</h3>
                            <label><b>Wichtigstes Ziel:</b></label>
                            <label>Stromkosten sparen
                                <input className='checkbox' type="checkbox" name="wichtigesZiel" value="Stromkosten sparen" onChange={handleCheckOne}></input>
                            </label>
                            <label>Unabhängigkeit steigern
                                <input className='checkbox' type="checkbox" name="wichtigesZiel" value="Unabhängigkeit steigern" onChange={handleCheckOne}></input>
                            </label>
                            <label>Nachhaltigkeit / Ökologie
                                <input className='checkbox' type="checkbox" name="wichtigesZiel" value="Nachhaltigkeit / Ökologie" onChange={handleCheckOne}></input>
                            </label>
                            <label><b>Speicherlösung :</b></label>
                            <label>Speicher von Anfang an
                                <input className='checkbox' type="checkbox" name="speicherlosung" value="Speicher von Anfang an" onChange={handleCheckOne}></input>
                            </label>
                            <label>Erst ohne Speicher starten
                                <input className='checkbox' type="checkbox" name="speicherlosung" value="Erst ohne Speicher starten" onChange={handleCheckOne}></input>
                            </label>
                            <label><b>Backup-Lösung bei Stromausfall :</b></label>
                            <label>Ja
                                <input className='checkbox' type="checkbox" name="backupLosung" value="Ja" onChange={handleCheckOne}></input>
                            </label>
                            <label>Nein
                                <input className='checkbox' type="checkbox" name="backupLosung" value="Nein" onChange={handleCheckOne}></input>
                            </label>
                            <label>Sonstige info
                                <input onChange={handleInputChange} name="messageInput" id="messageInput" value={messageInput} ></input>
                            </label>
                        </form>
                        <button onClick={SendContactForm}>Senden</button>
                    </div>
                </section>
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Kontakt