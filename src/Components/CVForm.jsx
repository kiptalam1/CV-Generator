import GeneralInfo from './General.jsx';
import Education from './Education.jsx';
import Experience from './PracticalExp.jsx';
import { useState, useEffect } from 'react';


export default function CVForm() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("cvData"));
        return savedData || {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        title: "",
        date: "",
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
        };
    });
// save data to local storage
useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(formData), [formData])
})
    function handleChange (event) {
        const {name, value} = event.target;
        setFormData((prevInfo) => ({...prevInfo, [name]: value}));
    }
    function handleSubmit (event) {
        event.preventDefault(); 
        setIsEditing(false);
    }
    function handleEdit () {
        setIsEditing(true);
    }
    
    return (
        <div className='cv-container'>
            <GeneralInfo data={formData} handleChange={handleChange} isEditing={isEditing} />
            <Education data={formData} handleChange={handleChange} isEditing={isEditing} />
            <Experience data={formData} handleChange={handleChange} isEditing={isEditing} />

            <div className='button-groups'>
                {isEditing? (
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                ) : (
                    <button type='button' onClick={handleEdit}>Edit</button>
                )}
            </div>
        </div>
    )
}

