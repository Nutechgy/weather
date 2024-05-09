// AlarmForm.jsx
import React, { useState } from 'react';

const AlarmForm = ({ onSubmit }) => {
  const [time, setTime] = useState('');
  const [days, setDays] = useState([]);

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleDayChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDays([...days, value]);
    } else {
      setDays(days.filter((day) => day !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ time, days });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Time:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      <label>
        Days:
        <label>
          <input type="checkbox" value="Sunday" onChange={handleDayChange} />
          Sunday
        </label>
        <label>
          <input type="checkbox" value="Monday" onChange={handleDayChange} />
          Monday
        </label>
        {/* Repeat for other days */}
      </label>
      <button type="submit">Set Alarm</button>
    </form>
  );
};

export default AlarmForm;
