import { useState } from 'react';

export default function GeneralInfo() {
    const [info, setInfo] = useState({firstName: "", lastName: "", email: "", phone: ""});

    function handleFirstNameInput (event) {
        setInfo((prevInfo) => ({...prevInfo, firstName: event.target.value}))
    }
    function handleLastNameInput (event) {
        setInfo((prevInfo) => ({...prevInfo, lastName: event.target.value}))
    }
    function handleEmailInput (event) {
        setInfo((prevInfo) => ({...prevInfo, email: event.target.value}))
    }
    function handlePhoneInput (event) {
        setInfo((prevInfo) => ({...prevInfo, phone: event.target.value}))
    }

    return (
        <form>
            <label htmlFor='first-name'>First Name: </label>
            <input type='text' id="first-name" value={info.firstName} onChange={handleFirstNameInput} />

            <label htmlFor='last-name'>Last Name: </label>
            <input type='text' id="last-name" value={info.lastName} onChange={handleLastNameInput} />

            <label htmlFor='email'>Email: </label>
            <input type='email' id="email" value={info.email} onChange={handleEmailInput} />

            <label htmlFor='phone-number'>Phone Number: </label>
            <input type='phone' id="phone-number" value={info.phone} onChange={handlePhoneInput} />
        </form>
    );
}