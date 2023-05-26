import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MoodReasonPage() {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const navigate = useNavigate();
  const reasons = [
    'Family',
    'Work',
    'Relationship',
    'Health',
    'Finances',
    'Friends',
    'Weather',
    'Hobbies',
    'Other',
  ];

  const getRandomImageUrl = () => {
    const width = 800;
    const height = 600;
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${randomId}/${width}/${height}`;
  };

  const handleReasonSelect = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit(selectedReasons);
    navigate("/moodreason");
  };

  return (
    <div className="container">
      <h2>Reasons for Your Mood</h2>
      <form onSubmit={handleSubmit}>
        <div className="reasons-container">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reason ${selectedReasons.includes(reason) ? 'selected' : ''}`}
              onClick={() => handleReasonSelect(reason)}
              style={{
                backgroundImage: `url(${getRandomImageUrl()})`,
              }}
            >
              <span className="reason-text">{reason}</span>
            </div>
          ))}
        </div>
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

      <style jsx>{`
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 20px;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
}

.reasons-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
}

.reason {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 18px;
  color: #fff;
  background-color: #333;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  background-size: cover;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.reason.selected {
  background-color: #FFD700;
  color: #fff;
  border-color: #FFD700;
}

.reason-text {
  font-weight: bold;
}

.reason.selected {
  background-color: #FFD700;
  color: #fff;
  border-color: #FFD700;
}

.submit-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.submit-button:hover {
  background-color: #ffc700;
}
`}</style>
    </div>
  );
}

export default MoodReasonPage;

