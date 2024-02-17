import React, { useState, useEffect } from 'react';
import './Book.css';
const Book = () => {
  const [formData, setFormData] = useState({
    Time: "",
    Price: '',
  });
  const [selectedTimes, setSelectedTimes] = useState([]);

  const timeSlots = Array.from({ length: 18 }, (_, index) => index + 4);

  useEffect(() => {
  // Use useEffect to update form data when selectedTimes changes
  setFormData({
    ...formData,
    Time: selectedTimes,
    Price: selectedTimes.length * 1000,
    GroundId:1
  });
}, [selectedTimes]); // Remove formData from the dependency array

  const handleTimeClick = (time) => {
    if (selectedTimes.includes(time)) {
      // Deselect if already selected
      setSelectedTimes((prevSelected) =>
        prevSelected.filter((selected) => selected !== time)
      );
    } else {
      // Select with Ctrl key or add to a new selection
      setSelectedTimes((prevSelected) =>
        prevSelected.includes(time) ? prevSelected : [...prevSelected, time]
      );
    }
  };

  const selectedTimesJSX = (
    <div>
      {selectedTimes.length > 0 && (
        <p className="selected-time">
          Selected Times:{' '}
          {selectedTimes.map((selected) => (
            <span key={selected}>{`${selected}:00 - ${selected + 1}:00, `}</span>
          ))}
        </p>
      )}
    </div>
  );

  const handleSubmit= async (e)=>{

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:6996/book', {
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
  return (
    <> 
      <div className="booking-container">
        <h1>Futsal Booking Page</h1>
        <div>
          <p>Select time slots:</p>
          <div className="time-slot-container">
            {timeSlots.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time-slot ${
                  selectedTimes.includes(time) ? 'selected-time' : ''
                }`}
              >
                {`${time}:00 - ${time + 1}:00`}
              </div>
            ))}
          </div>
        </div>
        <div>{selectedTimesJSX}</div>
        <div>
          {selectedTimes.length > 0 && (
            <p className="price">
              Total Price: <span>{selectedTimes.length * 1000}</span>
            </p>
          )}
        </div>
          <div className="content">
              <form onSubmit={handleSubmit}>
                <label htmlFor="Time">Time:</label>
                <input type="text" id="Time" name="Time" value={formData.Time} readOnly required />
                <label htmlFor="Price">Price:</label>
                <input type="number" id="Price" name="Price" value={formData.Price} readOnly required />
                <label htmlFor="GroundId">Futsal:</label>
                <input type="number" id="GroundId" name="GroundId" value={formData.GroundId} readOnly required />
                <button type="submit">Book</button>
              </form>
          </div>

      </div>

     </>
  );
};

export default Book;
