import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define an array of image URLs for each number
const numberImages = [
  // Index 0 is empty
  { imageUrl: 'https://th.bing.com/th/id/OIP.M5VJf9_R1zH4b1vnxCN7aQHaF_?w=264&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7', text: 'Do Yoga' }, // Image URL for number 1
  { imageUrl: 'https://th.bing.com/th/id/OIP.gz0cbAcv4jPBKAb2AXSXaQHaHQ?w=198&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', text: 'Solve a Puzzle' }, // Image URL for number 2
  { imageUrl: 'https://th.bing.com/th/id/OIP.26BE7CFZNZTUBKTx9_KMQAHaGo?w=219&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7', text: 'Listen Music' }, // Image URL for number 3
  { imageUrl: 'https://www.shutterstock.com/image-vector/woman-sport-gym-vector-illustration-260nw-1677799246.jpg', text: 'Exercise' }, // Image URL for number 3
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKhs2h7FenGKN7joWO0Yva5kZgtXFUX6TT44Q6rfBDnUO-ULUDYQX01bAXd-QNIQ1pgU&usqp=CAU', text: 'Talk' }, // Image URL for number 3
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFNCuaeGFUcxST6Hoq3yo96a1ChxCWndSKQ&usqp=CAU', text: 'Outing' }, // Image URL for number 3
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZtq1Y97q2KE0DB5ZWyCpbBnFs_3Qv0SEMCDn_4I4rw&s', text: 'Meditate' }, // Image URL for number 3
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQhsP9v8ZL6pzWU7polzsHsDlte_C5DpWMA&usqp=CAU', text: 'Eat' }, // Image URL for number 3
];

const DialingPad = () => {
  const navigate = useNavigate();

  const handleNumberClick = (index) => {
    navigate(`/thankyou`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }}>
      <h1>Suggestions</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {numberImages.map((number, index) => (
          <div className="image-block"
            key={index}
            style={{
              margin: '10px',
              padding: '10px',
              border: '2px solid black',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#F8F8FF',
              borderColor: '#F8F8FF',
            }}
            onClick={() => handleNumberClick(index)}
          >
            <img
              src={number.imageUrl}
              alt={`Number ${index}`}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px' }}>{number.text}</p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
        h1 {
            color: #F8F8FF;
            font-size: 60px;
          }
          .image-block {
            width: 140px; /* Adjust the width as desired */
            height: 140px; /* Adjust the height as desired */
          }
          
        `}
      </style>
    </div>
  );
};

export default DialingPad;
