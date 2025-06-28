import React, { useState } from 'react';
import Header from '../../componants/Header/Header';
import "./Kontakt.css"
import Footer from '../../componants/Footer/Footer';

function Kontakt() {
    const [nameInput, setNameInput] = useState('');
    const [firstNameInput, setFirstNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [telNumberInput, setTelNumberInput] = useState('');
    const [adressInput, setAdressInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

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
        }
    }

    const handleFormSubmit = (e) => {
        setNameInput("");
        setFirstNameInput("");
        setEmailInput("");
        setTelNumberInput("");
        setAdressInput("");
        setMessageInput("");


    }

    return (
        <section id='kontaktPageSection'>
            <Header />
            <main>
                <h1>Kontakt</h1>
                <section className='pageSection'>
                    <div id='kontaktForm'>
                        <h2>Kontakformular</h2>
                        <form>
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
                            <label>Nachricht:</label>
                            <textarea value={messageInput} onChange={handleInputChange} id='messageInput'></textarea>
                        </form>
                        <button onClick={handleFormSubmit}>Senden (NOT DONE)</button>
                    </div>
                    <div>
                        <h2>Sonnendach Map</h2>
                        <iframe id='sonnendachCH' title="sonnendachMap" src='//www.uvek-gis.admin.ch/BFE/sonnendach/loader.html?E=2660000&N=1190000&zoom=1&lang=de'></iframe>
                    </div>
                </section>
            </main>
            <Footer/>
        </section>
    )
}

export default Kontakt