// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    {/* Quick Links */}
                    <div className="footer__column">
                        <h4>Quick Links</h4>
                        <ul className="footer__links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="footer__column">
                        <h4>Follow Us</h4>
                        <div className="footer__socials">
                            <a href="#!" className="footer__social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#!" className="footer__social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#!" className="footer__social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#!" className="footer__social-link"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="footer__column">
                        <h4>Contact Information</h4>
                        <p>123 Cultural Ave, City, Country</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Email: info@culturalevents.com</p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="footer__column">
                        <h4>Newsletter</h4>
                        <form className="footer__newsletter">
                            <input type="email" placeholder="Enter your email" className="footer__input" />
                            <button type="submit" className="footer__button">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="footer__bottom">
                    <p>&copy; 2024 CulturalEvents. All Rights Reserved.</p>
                    <p>Legal Disclaimer: Information provided on this website is for informational purposes only.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
