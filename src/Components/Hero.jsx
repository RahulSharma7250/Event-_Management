import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Hero.css';
import cultural3 from '../assets/images/cultural3.jpg';
import cultural from '../assets/images/cultural.jpg';
import cultural2 from '../assets/images/cultural2.jpg';
import diwali from '../assets/images/diwali.jpg';
import diwali2 from '../assets/images/diwali2.jpg';

const Hero = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1000,
      distance: '50px',
      easing: 'ease-out',
      reset: true,
    });

    sr.reveal('.text-content', { origin: 'left', delay: 200 });
    sr.reveal('.center-image', { origin: 'bottom', delay: 400 });
    sr.reveal('.corner-image.top-left', { origin: 'top', delay: 600 });
    sr.reveal('.corner-image.top-right', { origin: 'top', delay: 600 });
    sr.reveal('.corner-image.bottom-left', { origin: 'bottom', delay: 600 });
    sr.reveal('.corner-image.bottom-right', { origin: 'bottom', delay: 600 });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1 className="hero-title">Experience the Magic of Culture and Tradition</h1>
          <p className="hero-subtitle">Join us for unforgettable moments at [Rose Event].</p>
          <a href="#events" className="hero-button">Explore Events</a>
        </div>
        <div className="image-container">
          <img src={cultural3} alt="Cultural Event" className="center-image" />
          <img src={cultural} alt="Cultural Event 1" className="corner-image top-left" />
          <img src={cultural2} alt="Cultural Event 2" className="corner-image top-right" />
          <img src={diwali} alt="Cultural Event 4" className="corner-image bottom-left" />
          <img src={diwali2} alt="Cultural Event 5" className="corner-image bottom-right" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
