import React, {useState} from 'react';
import './SignUp.css';

const SignUp=()=>{
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
      const response = await fetch('http://localhost:6996/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
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

