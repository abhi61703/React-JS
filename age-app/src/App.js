import React, { useState } from 'react';
import './App.css';

function App() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');

    const handleDobChange = (event) => {
        setDob(event.target.value);
        calculateAge(event.target.value);
    };

    const calculateAge = (dateOfBirth) => {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // If the current month is before the birth month, or the current month is the birth month
        // but the current day is before the birth day, then subtract one year from the age
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        setAge(age);
    };

    return (
        <div className="App">
            <h2>Age Calculator</h2>
            <form>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={handleDobChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="text"
                        value={age}
                        readOnly
                    />
                </div>
            </form>
        </div>
    );
}

export default App;
