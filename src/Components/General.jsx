
export default function GeneralInfo({ data, handleChange, isEditing }) {
    
    return (
        <div className='section' >

            <h3>Personal Information</h3>

            {isEditing ? (
            <form className='general-form' >

            <div className='form-group'>
                <label htmlFor='first-name'>First Name: </label>
                <input type='text' name='firstName' id="first-name" value={data.firstName} onChange={handleChange} />
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
                <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
            </div>

        )}
        </div>
    );
}