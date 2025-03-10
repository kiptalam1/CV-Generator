
export default function Education ({ data, handleChange, isEditing }) {

    
    return (
        <div className='section'>
            {isEditing ? (
            <form className="edu-form">
            <h3>Education Information</h3>
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
                <h2>Education</h2>
                <p><strong>School:</strong>&emsp; {data.school}</p>
                <p><strong>Title:</strong>&emsp; {data.title}</p>
                <p><strong>Date:</strong>&emsp; {data.date}</p>
            </div>
            )}
        </div>
    );
}