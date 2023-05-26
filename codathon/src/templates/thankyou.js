import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Switch from 'react-switch';
import "./thankyou.css";

function ThankYouPage() {
  const [feedbackHelpful, setFeedbackHelpful] = useState(false);

  return (
    <div className="container">
      <h2 className="title">Thank You!</h2>
      <p className="message">Your mood selection is complete.</p>
      <p className="message">Thank you for sharing your mood with us!</p>
      <div className="feedback-container">
        <div className="feedback-switch">
          <p className="feedback-text">Did the ways shown help you?</p>
          <Switch
            checked={feedbackHelpful}
            onChange={() => setFeedbackHelpful(!feedbackHelpful)}
            onColor="#ffc700"
            offColor="#eaeaea"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
      <p className="message">
        <Link to="/" className="link">Click here to redirect to home</Link>
      </p>
    </div>
  );
}

export default ThankYouPage;
