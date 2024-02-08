import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SignUp/SignUp.css';

const Registerfutsal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    startTime: '',
    endTime: '',
    contact: '', // Added contact field
  });

  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData1 = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formData1.append(key, value);
      });
      formData1.append("docImage", file);
      const response = await fetch('http://localhost:6996/registerfutsal', {
        method: 'POST',
        body: formData1,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className='main'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </label>
        <label>
          Location:
          <input type="tel" name="location" value={formData.location} onChange={handleChange} required/>
        </label>
        <label>
          Contact:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </label>
        <label>
          StartTime:
          <input type="time" name="startTime" onChange={handleChange} value={formData.startTime} required/>
        </label>
        <label>
          EndTime:
          <input type="time" name="endTime" onChange={handleChange} value={formData.endTime} required/>
        </label>
        <label>
          Document government registration:
          <input type="file" name="docImage" onChange={handleFileChange} accept="image/*" required/>
        </label>
        <button type="submit">Register</button>

        <div style={{ float: 'right' }}>
          <button type="alreadyreg">
            <Link to='/loginasowner' style={{ color: 'white' }}>Login</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default Registerfutsal;
