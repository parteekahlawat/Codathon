import React, { useState } from 'react';
import { Slider, Typography, Alert } from '@mui/material';

function HoursSleptSlider({ warningMessage }) {
  const [hoursSlept, setHoursSlept] = useState(6);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (event, newValue) => {
    setHoursSlept(newValue);
    setShowWarning(newValue < 7);
  };

  const sliderStyles = {
    width: 400,
    margin: 'auto',
    marginTop: "10px",
    marginBottom: 20,
    textTransform: "uppercase",
    color: ""
  };

  const alertStyles = {
    marginTop: 20,
    backgroundColor: 'pink',
    color: '#333',
  };

  return (
    <div style={sliderStyles}>
      <Typography id="hours-slept-slider" gutterBottom>
        Hours Slept: {hoursSlept}
      </Typography>
      <Slider
        value={hoursSlept}
        min={1}
        max={12}
        step={0.5}
        onChange={handleChange}
        aria-labelledby="hours-slept-slider"
      />
      {showWarning && (
        <Alert severity="warning" style={alertStyles}>
          {warningMessage || 'Less than 7 hours of sleep can affect your health and well-being.'}
        </Alert>
      )}
    </div>
  );
}

export default HoursSleptSlider;
