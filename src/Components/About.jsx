import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import cultural from "../assets/images/cultural2.jpg";
import personal from "../assets/images/personal.jpg";
import party from "../assets/images/party.jpg";
import wedding from "../assets/images/wedding.jpg";
import holi from "../assets/images/holi.jpg";
import party2 from "../assets/images/party2.jpg";
import './About.css';

const About = () => {
    const [mainImage, setMainImage] = useState(cultural);  // Initialize with the cultural image

    const handleImageClick = (image) => {
        setMainImage(image);  // Update the main image when a rotating image is clicked
    };

    useEffect(() => {
        ScrollReveal().reveal('.about__text', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });
        
        ScrollReveal().reveal('.main-image', {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });
        
        ScrollReveal().reveal('.rotating-images', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        // Reveal rotating images individually with delays
        ScrollReveal().reveal('.rotating-image-1', {
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 200,  // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        ScrollReveal().reveal('.rotating-image-2', {
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 400,  // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        ScrollReveal().reveal('.rotating-image-3', {
            origin: 'top',
            distance: '50px',
            duration: 1500,
            delay: 600,  // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        ScrollReveal().reveal('.rotating-image-4', {
            origin: 'top',
            distance: '50px',
            duration: 1500,
            delay: 800,  // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        ScrollReveal().reveal('.rotating-image-5', {
            origin: 'top',
            distance: '50px',
            duration: 1500,
            delay: 1000, // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

        ScrollReveal().reveal('.rotating-image-6', {
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 1200, // Stagger the reveal
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
        });

    }, []);

    return (
        <section id="about" className="about">
            <div className="about__container">
                <div className="about__text">
                    <h2>Who We Are</h2>
                    <p>
                        At CulturalEvents, we are dedicated to crafting unforgettable experiences that celebrate the richness and diversity of cultures around the world.
                    </p>
                    <p>
                        From intimate cultural ceremonies to grand festivals, we handle every detail with care and expertise.
                    </p>
                    <a href="#contact" className="btn-learn-more">Learn More About Us</a>
                </div>
                <div className="about__image">
                    <div className="rotating-images">
                        <img
                            src={personal}
                            alt="Rotating 1"
                            className="rotating-image rotating-image-1"
                            onClick={() => handleImageClick(personal)}  // Add onClick event
                        />
                        <img
                            src={party}
                            alt="Rotating 2"
                            className="rotating-image rotating-image-2"
                            onClick={() => handleImageClick(party)}  // Add onClick event
                        />
                        <img
                            src={wedding}
                            alt="Rotating 3"
                            className="rotating-image rotating-image-3"
                            onClick={() => handleImageClick(wedding)}  // Add onClick event
                        />
                        <img
                            src={holi}
                            alt="Rotating 4"
                            className="rotating-image rotating-image-4"
                            onClick={() => handleImageClick(holi)}  // Add onClick event
                        />
                        <img
                            src={party2}
                            alt="Rotating 5"
                            className="rotating-image rotating-image-5"
                            onClick={() => handleImageClick(party2)}  // Add onClick event
                        />
                         <img
                            src={cultural}
                            alt="Rotating 6"
                            className="rotating-image rotating-image-6"
                            onClick={() => handleImageClick(cultural)}  // Add onClick event
                        />
                    </div>
                    <img src={mainImage} alt="Main Cultural Event" className="main-image" />
                </div>
            </div>
        </section>
    );
};

export default About;
