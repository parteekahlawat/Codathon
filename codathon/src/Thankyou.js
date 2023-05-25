import React, { useState } from 'react';

function ThankYouPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'skyblue',
    marginBottom: "20px",
    color: 'grey',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const messageContainerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '20px',
    // textAlign: "left",
    color: 'lightblue',
    textTransform: "uppercase"
  };

  const imageStyle = {
    width: '200px',
    marginTop: '20px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: "absolute", top:"800px" }}>
      {!showMessage ? (
        <button style={buttonStyle} onClick={handleButtonClick}>
          Click to Show Message
        </button>
      ) : (
        <div style={messageContainerStyle}>
          <h1 style={headingStyle}>Thank you for using our website! <br />
          May you have a good day and a good mood ahead</h1>
          <img
            style={imageStyle}
            src="https://th.bing.com/th/id/OIP.NSzWsyk22AdQESdS_cXt-QAAAA?w=151&h=144&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Thank You"
          />
        </div>
      )}
    </div>
  );
}

export default ThankYouPage;
