import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import SuccessToast from '../Toast/success';
import ErrorToast from '../Toast/err';

const SignUp=()=>{
   const navigate= useNavigate(); 
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit= async (e)=>{

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:6996/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        SuccessToast(result.message);
        navigate("/login");
      } else {
        console.error('Try another username/email taken');
        ErrorToast('Try different username/email already registered');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      ErrorToast('Error submitting form'+error);
    }
  }
return(
  <main className='main'>
  <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
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
        Citizenship Image:
        <input type="file" name="citizenshipImage" onChange={handleChange} accept="image/*" required/>
      </label>
      <button type="submit">Sign Up</button>
    </form>
    </main>
  );
};

export default SignUp;

