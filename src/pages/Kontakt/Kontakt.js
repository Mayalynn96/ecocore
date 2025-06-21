import React, {useState} from 'react';
import Header from '../../componants/Header/Header';
import "./Kontakt.css"

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
        }else if (e.target.id === "emailInput") {
            setEmailInput(e.target.value)
        } else if (e.target.id === "telNumberInput") {
            setTelNumberInput(e.target.value)
        } else if (e.target.id === "adressInput") {
            setAdressInput(e.target.value)
        } else if (e.target.id === "messageInput") {
            setMessageInput(e.target.value)
        }
    }

    return (
       <section id='kontaktPageSection'>
            <Header />
            <main>
                <h1>Kontakt</h1>
                <div id='kontaktForm'>
                    <form>
                    <label>Name:</label>
                    <input value={nameInput} onChange={handleInputChange} id='nameInput'></input>
                    <label>Vroname:</label>
                    <input value={firstNameInput} onChange={handleInputChange} id='firstNameInput'></input>
                    <label>Email:</label>
                    <input value={emailInput} onChange={handleInputChange} id='emailInput'></input>
                    <label>Telefon Number:</label>
                    <input value={telNumberInput} onChange={handleInputChange} id='telNumberInput'></input>
                    <label>Nachricht:</label>
                    <textarea value={messageInput} onChange={handleInputChange} id='messageInput'></textarea>
                </form>
                </div>
            </main>
       </section> 
    )
}

export default Kontakt