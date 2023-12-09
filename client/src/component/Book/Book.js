import React, { useState } from 'react';
import './Book.css';

const Book = () => {

  const [formData, setFormData] = useState({
    Time: "",
    Price: '',
  });
  const [selectedTimes, setSelectedTimes] = useState([]);

  const timeSlots = Array.from({ length: 18 }, (_, index) => index + 4);

  const handleTimeClick = (time) => {
    if (selectedTimes.includes(time)) {
      // Deselect if already selected
      setSelectedTimes((prevSelected) =>
        prevSelected.filter((selected) => selected !== time)
      );
      setFormData({ ...formData, Time: selectedTimes, Price:(selectedTimes.length-1)*1000 })
    } else {
      // Select with Ctrl key or add to a new selection
      setSelectedTimes((prevSelected) =>
        prevSelected.includes(time) ? prevSelected : [...prevSelected, time]
      );
      setFormData({ ...formData, Time: selectedTimes, Price:(selectedTimes.length+1)*1000 })
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
          {selectedTimesJSX}
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
        <form>
             <label for="Time">Time:</label>
        <input type="text" id="Time" name="Time" value={formData.Time}  readOnly required/>
        <label for="Price">Price:</label>
        <input type="number" id="Price" name="Price"  value={formData.Price} readOnly required/>

        <button type="submit">Book</button>
        </form>
      </div>
    </>
  );
};

export default Book;
