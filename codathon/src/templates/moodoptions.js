import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function MoodReasonPage({ mood, rating, onSubmit }) {
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
    navigate("/moodrating");
  };

  return (
    <div className="container">
      <h2>Reasons for Your Mood</h2>
      <div className="previous-info">
        <p>Mood: {mood}</p>
        <p>Rating: {rating}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="reasons-container">
          {reasons.map((reason) => (
            <div
              key={reason}
              className={`reason ${selectedReasons.includes(reason) ? 'selected' : ''}`}
              onClick={() => handleReasonSelect(reason)}
            >
              {reason}
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
          background-color: #f2f2f2;
          background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
          padding: 20px;
        }

        h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }

        .previous-info {
          margin-bottom: 20px;
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
          color: #333;
          background-color: #fff;
          border: 2px solid #ccc;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
          transition: background-color 0.2sease-in-out;
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