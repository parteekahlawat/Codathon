import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function MoodReasonPage({ mood, rating }) {
  const [reason, setReason] = useState('');
  const navigate = useNavigate();
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Mood:', mood);
    console.log('Rating:', rating);
    console.log('Reason:', reason);
    window.alert('Successfully Submitted!!');
    navigate("/");
  };

  const getBackgroundColor = () => {
    switch (mood) {
      case '😃':
        return '#FFD700'; // Yellow
      case '😔':
        return '#4285F4'; // Blue
      case '😊':
        return '#FF4081'; // Pink
      default:
        return '#f5f5f5'; // Default background color
    }
  };

  return (
    <div className="container" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="content">
        <h2>Share the Reason for Your Mood</h2>
        <div className="previous-info">
          <p>Mood: {mood}</p>
          <p>Rating: {rating}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="reason-input"
            placeholder="Enter the reason for your mood..."
            value={reason}
            onChange={handleReasonChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .content {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }

        .previous-info {
          margin-bottom: 20px;
          text-align: center;
        }

        .reason-input {
          width: 100%;
          height: 120px;
          padding: 12px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          resize: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .reason-input:focus {
          outline: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .submit-button {
          width: 100%;
          padding: 10px 20px;
          font-size: 16px;
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
