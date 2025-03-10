import { useState } from "react";


export default function Experience () {

    const [ experience, setExperience ] = useState({ company: "", position: "", responsibilities: "", from: "", to: "" });

    function handleCompanyInput (event) {
        setExperience ((prev) => ({...prev, company: event.target.value}))
    }

    function handlePositionInput (event) {
        setExperience ((prev) => ({...prev, position: event.target.value}))
    }

    function handleResponseInput (event) {
        setExperience ((prev) => ({...prev, responsibilities: event.target.value}))
    }

    function handleFromDateInput (event) {
        setExperience ((prev) => ({...prev, from: event.target.value}))
    }

    function handleToDateInput (event) {
        setExperience ((prev) => ({...prev, to: event.target.value}))
    }

    return (
        <form className="exp-form">
            <h3>Practical Experience</h3>
            <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" onChange={handleCompanyInput} value={experience.company} />
            </div>

            <div className="form-group">
                <label htmlFor="position">Position:</label>
                <input type="text" 
                        id="position" 
                        onChange={handlePositionInput} 
                        value={experience.position} 
                        placeholder="e.g., senior software developer" />
            </div>

            <div className="form-group">
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea id="responsibilities"
                            onChange={handleResponseInput}
                            value={experience.responsibilities} 
                            rows={4} 
                            cols={40}
                            placeholder="Enter your key responsibilities..." />
            </div>
            <div className="date-group">
                <div className="date">
                    <label htmlFor="from-date">From</label>
                    <input type="date" id="from-date" onChange={handleFromDateInput} value={experience.from} />
                </div>

                <div className="date">
                    <label htmlFor="to-date">To</label>
                    <input type="date" id="to-date" onChange={handleToDateInput} value={experience.to} />
                </div>
            </div>
        </form>
    );
}