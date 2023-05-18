import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MoodDetector() {
    const [mood, setMood] = useState('');
    const navigate = useNavigate();
  
    const handleMoodSelect = (selectedMood) => {
      setMood(selectedMood);
      navigate("/moodoptions");
    };
  
  const emojiList = [
    '😃', '😔', '😍', '😎', '😂',
    '😊', '😢', '🥰', '😞', '😭', '😌', '🙃'
  ];

  
    const column1 = emojiList.slice(0, emojiList.length / 3);
    const column2 = emojiList.slice(emojiList.length / 3, (emojiList.length / 3) * 2);
    const column3 = emojiList.slice((emojiList.length / 3) * 2);
  
    return (
      <div className="container">
        <h2>Mood Detector</h2>
        <div className="emojis">
          <div className="column">
            {column1.map((emoji) => (
              <div
                className="emoji"
                key={emoji}
                onClick={() => handleMoodSelect(emoji)}
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="column">
            {column2.map((emoji) => (
              <div
                className="emoji"
                key={emoji}
                onClick={() => handleMoodSelect(emoji)}
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="column">
            {column3.map((emoji) => (
              <div
                className="emoji"
                key={emoji}
                onClick={() => handleMoodSelect(emoji)}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
        {mood && (
          <div className="selected-mood">
            You selected: <span className="mood">{mood}</span>
          </div>
        )}
  
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
  
          .emojis {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
  
          .column {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 20px;
          }
  
          .emoji {
            font-size: 60px;
            margin-bottom: 10px;
            cursor: pointer;
            color: #333;
            transition: transform 0.2s ease-in-out;
          }
  
          .emoji:hover {
            transform: scale(1.2);
          }
  
          .selected-mood {
            font-size: 18px;
            margin-top: 20px;
            color: #333;
          }
  
          .mood {
            font-size: 24px;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
}
  
export default MoodDetector;  