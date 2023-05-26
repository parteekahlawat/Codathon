import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignInPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);

    //signin redirect
    if (username === 'Admin' && password === '12345') {
        // Successful sign-in
        console.log('Sign-in successful as Admin');
        navigate("/connectpage")
        // Add your code for redirecting to the next page
      }else if(username === 'Employee' && password === 'abcde')  {
        console.log('Sign-in successful as Employee');
        navigate("/moodpage")
      } else {
        // Invalid credentials
        setErrorMessage('Invalid username or password');
        window.alert('Wrong Password');
      }

  };

  return (
    <div className="container">
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
        <div className="form-group">
          <p className="message">
            Forgot your password? <a href="#">Reset it</a>
          </p>
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
    background-size: cover;
    background-position: center;
    color: #fff;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .label {
    color: #555;
  }
  
  form {
    width: 300px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    background-color: #f5f5f5;
  }
  
  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    background-color: #ebebeb;
  }
  
  button {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }    .message {
      font-size: 12px;
      text-align: center;
    }
  
    .message a {
      color: #007bff;
      text-decoration: none;
    }
    .error-message {
        color: red;
        font-size: 14px;
        text-align: center;
      }
    `}
    </style>
    
      </div>
);
}

export default SignInPage;      