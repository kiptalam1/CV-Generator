import { useState } from 'react';

export default function GeneralInfo() {
    const [info, setInfo] = useState({firstName: "", lastName: "", email: "", phone: ""});

    return (
        <form>
            <label htmlFor='first-name'>First Name: </label>
            <input type='text' id="first-name" value={info.firstName} />

            <label htmlFor='last-name'>Last Name: </label>
            <input type='text' id="last-name" value={info.lastName} />

            <label htmlFor='email'>Email: </label>
            <input type='email' id="email" value={info.email} />

            <label htmlFor='phone-number'>Phone Number: </label>
            <input type='phone' id="phone-number" value={info.phone} />
        </form>
    );
}