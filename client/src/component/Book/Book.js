import React, { useState } from 'react';

const Book = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = Array.from({ length: 18 }, (_, index) => index + 4);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <div>
        <h1>Futsal Booking Page</h1>
        <div>
          <p>Select a time slot:</p>
          <div style={{ display: 'flex' }}>
            {timeSlots.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  margin: '5px',
                  cursor: 'pointer',
                  backgroundColor: selectedTime === time ? '#007bff' : '#fff',
                  color: selectedTime === time ? '#fff' : '#000',
                }}
              >
                {`${time}:00 - ${time + 1}:00`}
              </div>
            ))}
          </div>
        </div>
        <div>
          {selectedTime && (
            <p>Selected Time: {`${selectedTime}:00 - ${selectedTime + 1}:00`}</p>
          )}
        </div>
      </div>

      <div class="content">
        <div class="container">
          {/* The rest of your existing JSX code for the DoctorBooking component */}
        </div>
      </div>
    </>
  );
};

export default Book;
