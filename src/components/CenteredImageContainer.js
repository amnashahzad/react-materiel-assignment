import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CenteredImageContainer.css';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function CenteredImageContainer() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };

  return (
    <div className="centered-image-container" style={containerStyle}>
      <div className="centre">
        <img
          className="centre"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxYU7YdoXvfcFY4ikZk_7uZ6IrAAXuuxa1f0BdlmmntqjmlHD2YEpoD9kB9HPN7yh4oM&usqp=CAU"
          alt="My Image"
        />
        <h1 className="font">Amna Shahzad</h1>
        <h3 className="font">SOFTWARE ENGINEER</h3>
        <div>
          <ul>
            <li className="social">
              <a className="ficon" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="ficon" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="ficon" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <p className="para">
        "I'm a dedicated software engineer, committed to building robust and user-friendly applications that make a positive impact on the digital landscape."
        </p>
        <button className="theme-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default CenteredImageContainer;
