// UserPage.js
import React, { useState} from 'react';
import './User.css';
import {Futsals} from './Futsal.js';

const UserPage = () => {
const [showOptions, setShowOptions] = useState(false);

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
  };


  return (
    <div className="user-page-container">
      <div className="avatar-container" onClick={handleAvatarClick}>
        <img src='/image.jpeg' alt='Avatar'/>
        {/* You can add an image or an icon as per your design */}
      </div>
      {showOptions && (
        <div className="profile-options">
          <p>User A</p>
          <ul>
            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
      )}
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
