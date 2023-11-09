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
return(
  <main className='main'>
  <form>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
          Contact:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Citizenship Image:
        <input type="file" name="citizenshipImage" onChange={handleChange} accept="image/*" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
    </main>
  );
};

export default SignUp;

