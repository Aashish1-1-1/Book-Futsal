import React, { useState, useEffect } from 'react';
import './Book.css';
import SuccessToast from '../Toast/success';
import ErrorToast from '../Toast/err';

const Book = () => {
  const [formData, setFormData] = useState({
    Time: "",
    Price: '',
  });
  const [futsaldetails, setFutsaldetails] = useState({
    opentime: 0,
    closetime: 0,
    bookedtimes: [],
  });
  const [selectedTimes, setSelectedTimes] = useState([]);

  const timeSlots = Array.from({ length: (futsaldetails.closetime - futsaldetails.opentime) }, (_, index) => futsaldetails.opentime + index);

  useEffect(() => {
    const fetchFutsaldetails = async () => {
      try {
        const response = await fetch("http://localhost:6996/api/book/4", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFutsaldetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFutsaldetails();
  }, []);

useEffect(() => {
  setFormData({
    ...formData,
    Time: selectedTimes.join(', '), // Join selected times into a string
    Price: selectedTimes.length * 1000,
  });
}, [formData, selectedTimes]); // Update form data when selected times or formData change

  const handleTimeClick = (time) => {
    if (futsaldetails.bookedtimes.includes(time)) {
      return; 
    }

    setSelectedTimes(prevSelected => {
      if (prevSelected.includes(time)) {
        return prevSelected.filter(selected => selected !== time);
      } else {
        return [...prevSelected, time];
      }
    });
  };

  const selectedTimesJSX = (
    <div>
      {selectedTimes.length > 0 && (
        <p className="selected-time">
          Selected Times:{' '}
          {selectedTimes.map(selected => (
            <span key={selected}>{`${selected}:00 - ${selected + 1}:00, `}</span>
          ))}
        </p>
      )}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6996/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        SuccessToast(result.message);
      } else {
        console.error('Failed to submit form');
        ErrorToast('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      ErrorToast('Error submitting form')
    }
  }

  return (
    <>
      <div className="booking-container">
        <h1>Futsal Booking Page</h1>
        <div>
          <p>Select time slots:</p>
          <div className="time-slot-container">
            {timeSlots.map(time => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`time-slot ${futsaldetails.bookedtimes.includes(time) ? 'time-slot-booked' : (selectedTimes.includes(time) ? 'selected-time' : '')}`}
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
            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
