import React, { useState } from 'react';

const MoodOMeter = () => {
  const [moods, setMoods] = useState([]);

  const addMood = (event) => {
    event.preventDefault();
    const moodInput = event.target.elements.mood;
    const newMood = moodInput.value.trim();

    if (newMood !== '') {
      setMoods([...moods, newMood]);
      moodInput.value = '';
    }
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <form onSubmit={addMood}>
        <label htmlFor="mood-input">Enter your mood:</label>
        <input type="text" id="mood-input" name="mood" required />
        <button type="submit">Add Mood</button>
      </form>
      {moods.length > 0 && (
        <ul>
          {moods.map((mood, index) => (
            <li key={index}>{mood}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodOMeter;
