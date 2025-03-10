
export default function Education ({ data, handleChange, isEditing }) {

    
    return (
        <div className='section'>
            <h3>School Information</h3>
            {isEditing ? (
            <form className="edu-form">
                <div className="form-group">
                    <label htmlFor="school">School:</label>
                    <input type="text" name="school" id="school" value={data.school} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" 
                            name="title"
                            value={data.title} 
                            placeholder="what did you study?"
                            onChange={handleChange} 
                            />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date" value={data.date} onChange={handleChange} />
                </div>
            </form>
            ) : (
                <div className="details">
                <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
            </div>
            )}
        </div>
    );
}