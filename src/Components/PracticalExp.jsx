

export default function Experience ({ data, handleChange, isEditing }) {


    return (
        <div className="section"> 
                {isEditing ? (
            <form className="exp-form">
                <h3>Practical Experience</h3>

                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input type="text" name="company" id="company" onChange={handleChange} value={data.company} />
                </div>

                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input type="text" 
                            name="position"
                            id="position" 
                            onChange={handleChange} 
                            value={data.position} 
                            placeholder="e.g., senior software developer" />
                </div>

                <div className="form-group">
                    <label htmlFor="responsibilities">Responsibilities:</label>
                    <textarea id="responsibilities"
                                onChange={handleChange}
                                value={data.responsibilities} 
                                name="responsibilities"
                                rows={4} 
                                cols={40}
                                wrap="soft"
                                placeholder="Enter your key responsibilities..." />
                </div>
                <div className="date-group">
                    <div className="date">
                        <label htmlFor="from-date">From</label>
                        <input type="date" name="from" id="from-date" onChange={handleChange} value={data.from} />
                    </div>

                    <div className="date">
                        <label htmlFor="to-date">To</label>
                        <input type="date" name="to" id="to-date" onChange={handleChange} value={data.to} />
                    </div>
                </div>
            </form>
            ) : (
                <div class="details">
                <h2>Experience</h2>
                <p><strong>Company:</strong>&emsp; <span>{data.company}</span></p>
                <p><strong>Position:</strong>&emsp; <span>{data.position}</span></p>
                <p><strong>Responsibilities:</strong>&emsp; <span>{data.responsibilities}</span></p>
                <p><strong>From:</strong>&emsp; <span>{data.from}</span></p>
                <p><strong>To:</strong>&emsp; <span>{data.to}</span></p>
                </div>
            )}
        </div>
    );
}