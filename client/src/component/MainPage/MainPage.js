import React from 'react';
import './MainPage.css'
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <>
    <div className='container'>
      <h1>Welcome to the Futsal Booking App</h1>
      <p>Find and book futsal courts in your area.</p>
      <button className='butt'><Link to='/SignUp'>Get Started!!</Link></button>
    </div>
    </>
  );
}

export default MainPage;
