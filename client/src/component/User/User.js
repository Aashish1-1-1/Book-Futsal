import React from 'react';
import './User.css';
import {Futsals} from './Futsal.js';

const UserPage = () => {
  return (
    <div className="user-page-container">
        <h1>Welcome to Book-Futsal, Select the futsal Grounds</h1>
      <div className="futsal-list-container">
        <br />
      <h2>.List of Registered Futsal Grounds:</h2>
     
      <ul>
        {Futsals.map((futsal, index) => (
        <li key={index}>
        <a href='Contact/Book'>{index+1}.&nbsp;  &nbsp; Name: {futsal.name} &nbsp;  &nbsp; Location: {futsal.location}</a>
        </li>
        ))}
      </ul>

      </div>
    </div>
  );
};

export default UserPage;
