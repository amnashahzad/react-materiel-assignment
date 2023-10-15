import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  const navbarStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")`, // Apply the background image
  };

  return (
    
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-logo">
        <a href="/">Material Kit React</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">COMPONENTS</a>
        </li>
        <li>
          <a href="/about">UPGRADE TO PRO</a>
        </li>
        <li>
          <a href="/services">DOWNLOAD</a>
        </li>
        <li className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;