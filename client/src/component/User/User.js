// UserPage.js
import React, { useState, useEffect } from 'react';
import './User.css';

const UserPage = () => {
  const [futsals, setFutsals] = useState([]);
  const [sortBy, setSortBy] = useState('location');
  const [showOptions, setShowOptions] = useState(false);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    // Fetch futsals from the JSON file
    fetch('/path/to/futsals.json')
      .then((response) => response.json())
      .then((data) => setFutsals(data))
      .catch((error) => console.error('Error fetching futsals:', error));
  }, []);

  const sortedFutsals = [...futsals].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="user-page-container">
      <div className="avatar-container" onClick={handleAvatarClick}>
        {/* Display user avatar here */}
        {/* You can add an image or an icon as per your design */}
      </div>
      {showOptions && (
        <div className="profile-options">
          <p>Profile Options:</p>
          <ul>
            <li>Settings</li>
            <li>Sign Out</li>
            {/* Add more options as needed */}
          </ul>
        </div>
      )}
      <h1>User Page</h1>
      <label>
        Sort by:
        <select value={sortBy} onChange={handleSortChange}>
          <option value="location">Location</option>
          {/* Add more options for other sorting criteria if needed */}
        </select>
      </label>
      <div className="futsal-list-container">
        <h2>List of Registered Futsal Grounds</h2>
        <ul>
          {sortedFutsals.map((futsal) => (
            <li key={futsal.id}>
              {futsal.name} - {futsal.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
