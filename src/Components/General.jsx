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
        <form className='general-form'>
            <h3>Personal Information</h3>

            <div className='form-group'>
                <label htmlFor='first-name'>First Name: </label>
                <input type='text' id="first-name" value={info.firstName} onChange={handleFirstNameInput} />
            </div>

            <div className='form-group'>
                <label htmlFor='last-name'>Last Name: </label>
                <input type='text' id="last-name" value={info.lastName} onChange={handleLastNameInput} />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type='email' id="email" value={info.email} onChange={handleEmailInput} />
            </div>

            <div className='form-group'>
                <label htmlFor='phone-number'>Phone Number: </label>
                <input type='tel' id="phone-number" value={info.phone} onChange={handlePhoneInput} />
            </div>    

        </form>
    );
}