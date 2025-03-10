import { useState } from "react";


export default function Education () {
    const [education, setEducation] = useState({ school: "", title: "", date: "" });

    function handleSchoolInput (event) {
        setEducation((prev) => ({...prev, school: event.target.value}));
    }

    function handleTitleInput (event) {
        setEducation((prev) => ({...prev, title: event.target.value}));
    }

    function handleDateInput (event) {
        setEducation((prev) => ({...prev, date: event.target.value}));
    }
    return (
        <form className="edu-form">
            <div className="form-group">
                <label htmlFor="school">School:</label>
                <input type="text" id="school" value={education.school} onChange={handleSchoolInput} />
            </div>

            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={education.title} onChange={handleTitleInput} />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="text" id="date" value={education.date} onChange={handleDateInput} />
            </div>
        </form>
    );
}