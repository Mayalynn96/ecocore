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
    const [emailInput, setEmailInput] = useState('');
    const [telNumberInput, setTelNumberInput] = useState('');
    const [adressInput, setAdressInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [jahressverbrauch, setJahressverbrauch] = useState('');
    const [aktuelleHeizart, setAktuelleHeizart] = useState('');

    // input handler for each state
    const handleInputChange = (e) => {
        if (e.target.id === "nameInput") {
            setNameInput(e.target.value)
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
        }
    }

    const handleFormSubmit = () => {
        setNameInput("");
        setEmailInput("");
        setTelNumberInput("");
        setAdressInput("");
        setMessageInput("");
        setJahressverbrauch("");
        setAktuelleHeizart("");
    }

    const handleCheckOne = (e) => {
        const allBoxes = document.getElementsByName(e.target.name)

        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].checked = false
        }
        e.target.checked = true

        if(e.target.name === "aktuelleHeizart") {
           setAktuelleHeizart(e.target.value)
        } 


    }

    const SendContactForm = (e) => {
        e.preventDefault();

        if(nameInput === ''){
            alert("Bitter geben sie uns einen Namen um dieses Formular zu senden!")
            return
        } else if (emailInput === '' && telNumberInput === '') {
            alert("Bitter geben sie uns eine E-Mail-Adresse order Telefonnummer um dieses Formular zu senden!")
            return
        }

        const spezielleVerbaucherBoxes = document.getElementsByName("spezielleVerbaucher");
        const spezielleVerbaucherAll = []

        for (let i = 0; i < spezielleVerbaucherBoxes.length; i++) {
            if (spezielleVerbaucherBoxes[i].checked === true) {
                spezielleVerbaucherAll.push(spezielleVerbaucherBoxes[i].value)
            }
        }

        const formData = {
            name: nameInput,
            email: emailInput,
            tel: telNumberInput,
            adress: adressInput,
            jahressverbrauch: jahressverbrauch,
            aktuelleHeizart: aktuelleHeizart,
            spezielleVerbaucher: spezielleVerbaucherAll,
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
                            <label>Name / Vorname:
                            <input value={nameInput} onChange={handleInputChange} id='nameInput'></input>
                            </label>
                            <label>Email:
                            <input value={emailInput} onChange={handleInputChange} id='emailInput'></input>
                            </label>
                            <label>Telefon Number:
                            <input value={telNumberInput} onChange={handleInputChange} id='telNumberInput'></input>
                            </label>
                            <label>Objektadresse:
                            <input value={adressInput} onChange={handleInputChange} id='adressInput'></input>
                            </label>
                            <h3>Aktueller Stromverbrauch</h3>
                            <label>Jahresstromverbrauch (kWh)
                            <input type="number" value={jahressverbrauch} onChange={handleInputChange} id='jahressverbrauch'></input>
                            </label>
                            <label><b>Aktuelle Heizart:</b></label>
                            <label>Wärmepumpe / Strom
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Wärmepumpe / Strom" onChange={handleCheckOne}></input>
                            </label>
                            <label>Oel / Gas / Holz / Andere
                                <input className='checkbox' type="checkbox" name="aktuelleHeizart" value="Oel / Gas / Holz / Andere" onChange={handleCheckOne}></input>
                            </label>
                            <label><b>Spezielle Verbraucher (Mehrfachauswahl Checkboxen):</b></label>
                            <label>Boiler 
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Boiler"></input>
                            </label>
                            <label>E-Auto
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="E-Auto"></input>
                            </label>
                            <label>Klimaanlage
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Klimaanlage"></input>
                            </label>
                            <label>Pool / Jacuzzi
                                <input className='checkbox' type="checkbox" name="spezielleVerbaucher" value="Pool / Jacuzzi"></input>
                            </label>
                            <label><b>Sonstige info:</b>
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