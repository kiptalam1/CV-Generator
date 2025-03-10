
export default function GeneralInfo({ data, handleChange, isEditing }) {
    
    return (
        <div className='section' >


            {isEditing ? (
            <form className='general-form' >
            <h3>Personal Information</h3>

            <div className='form-group'>
                <label htmlFor='first-name'>First Name: </label>
                <input type='text' name='firstName' id="first-name" value={data.firstName} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor='last-name'>Last Name: </label>
                <input type='text' name='lastName' id="last-name" value={data.lastName} onChange={handleChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' id="email" value={data.email} onChange={handleChange} />
            </div>

            <div className='form-group'>
                <label htmlFor='phone-number'>Phone Number: </label>
                <input type='tel' name='phone' id="phone-number" value={data.phone} onChange={handleChange} />
            </div>    
        </form>
        ): (
            <div className="details">
                <h2>Personal Information</h2>
                <p><strong>Name:</strong>&emsp; {data.firstName} {data.lastName}</p>
                <p><strong>Email:</strong>&emsp; {data.email}</p>
                <p><strong>Phone:</strong>&emsp; {data.phone}</p>
            </div>

        )}
        </div>
    );
}