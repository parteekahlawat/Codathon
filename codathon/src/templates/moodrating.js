import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RatingPage() {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();
  const handleRatingChange = (value) => {
    setRating(value);
    navigate("/moodreason");
  };

  const emoji = '😃';

  const renderRatingButtons = () => {
    const ratingButtons = [];

    for (let i = 1; i <= 10; i++) {
      ratingButtons.push(
        <button
          key={i}
          className={`rating-button ${rating === i ? 'selected' : ''}`}
          onClick={() => handleRatingChange(i)}
        >
          {i}
        </button>
      );
    }

    return ratingButtons;
  };

  return (
    <div className="container">
      <h2>Strength Of Emotions</h2>
      <div className="emoji">{emoji}</div>
      <div className="rating-buttons">{renderRatingButtons()}</div>
      {rating && <div className="selected-rating">Your rating: {rating}</div>}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f5f5f5;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }

        .emoji {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .rating-buttons {
          display: flex;
          justify-content: center;
        }

        .rating-button {
          padding: 12px 16px;
          font-size: 18px;
          margin: 0 8px;
          background-color: #fff;
          color: #333;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        }

        .rating-button.selected {
          background-color: #FFD700;
          color: #333;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .selected-rating {
          margin-top: 20px;
          font-size: 18px;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default RatingPage;
