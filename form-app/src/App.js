import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    age: '',
    gender: '',
    fatherName: '',
    motherName: '',
    state: '',
    district: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    if (name === 'dob') {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      updatedFormData.age = age;
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth: </label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="text" name="age" value={formData.age} readOnly />
        </div>
        <div>
          <label>Gender: </label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Father's Name: </label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div>
          <label>Mother's Name: </label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
        <div>
          <label>City: </label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>District: </label>
          <input type="text" name="district" value={formData.district} onChange={handleChange} required />
        </div>
        <div>
          <label>State: </label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        
        <button type="submit">Add</button>
      </form>

      {submittedData && (
        <div className="submittedData">
          <h3>Submitted Data</h3>
          <div className="dataRow">
            <div>Name: {submittedData.name}</div>
            <div>Date of Birth: {submittedData.dob}</div>
            <div>Age: {submittedData.age}</div>
            <div>Gender: {submittedData.gender}</div>
            <div>Phone Number: {submittedData.phoneNumber}</div>
            <div>Email: {submittedData.email}</div>
          </div>
          <div className="dataRow">
            <div>Father's Name: {submittedData.fatherName}</div>
            <div>Mother's Name: {submittedData.motherName}</div>
          </div>
          <div className="dataRow">
            <div>City: {submittedData.city}</div>
            <div>District: {submittedData.district}</div>
            <div>State: {submittedData.state}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
