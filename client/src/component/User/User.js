import React, { useState, useEffect } from 'react';
import './User.css';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [futsalList, setFutsalList] = useState([]);

  useEffect(() => {
    const fetchFutsalData = async () => {
      try {
        const response = await fetch("http://localhost:6996/api/user/1",{
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFutsalList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFutsalData();
  }, []);

  return (
    <div className="user-page-container">
      <h1>Welcome to Book-Futsal, Please select a futsal ground:</h1>
      <div className="containerU">
        {futsalList.map((futsal, index) => (
          <div className="futsal" key={index}>
            <h3>{futsal.name}</h3>
            <p>Location: {futsal.location}</p>
            <Link to={`/futsal/${index+1}`}>Book</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
