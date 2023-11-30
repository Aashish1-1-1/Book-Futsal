import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const timeSlots = Array.from({ length: 18 }, (_, index) => index + 4);

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
        <div>
          {selectedTimes.length > 0 && (
            <p className="selected-time">
              Selected Times:{' '}
              {selectedTimes.map((selected) => (
                <span key={selected}>{`${selected}:00 - ${
                  selected + 1
                }:00, `}</span>
              ))}
            </p>
          )}
        </div>
        <div>
          {selectedTimes.length>0&&(
          <p className='price'>
              Total Price:{' '}
              <span>{selectedTimes.length*1000}</span>
            </p>
          )}
        </div>
      </div>

      <div className="content">
        <div className="container">
          {/* The rest of your existing JSX code for the DoctorBooking component */}
        </div>
      </div>
    </>
  );
};

export default Book;
