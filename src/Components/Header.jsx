import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <h1>Cultural Event</h1>
    </div>
    <nav className="nav">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="cta">
      <a href="#tickets" className="cta-button">Get Tickets</a>
    </div>
    {/* <div className="social-media">
      <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="#twitter"><i className="fab fa-twitter"></i></a>
      <a href="#instagram"><i className="fab fa-instagram"></i></a>
    </div> */}
  </header>
);
};

export default Header;
 