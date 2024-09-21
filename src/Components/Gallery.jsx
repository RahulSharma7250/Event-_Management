import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Gallery.css';
import diwali from "../assets/images/diwali.jpg";
import event2 from "../assets/images/event2.jpg";
import nav from "../assets/images/nav.jpg";
import diwali2 from "../assets/images/diwali2.jpg";
import nav2 from "../assets/images/nav2.jpg";
import holi2 from "../assets/images/holi2.jpg";
import cultural from "../assets/images/cultural.jpg";
import cultural2 from "../assets/images/cultural2.jpg";

const images = [
    { id: 1, src: diwali, alt: 'Cultural Event 1' },
    { id: 2, src: event2, alt: 'Cultural Event 2' },
    { id: 3, src: nav, alt: 'Cultural Event 3' },
    { id: 4, src: diwali2, alt: 'Cultural Event 4' },
    { id: 5, src: nav2, alt: 'Cultural Event 5' },
    { id: 6, src: cultural, alt: 'Cultural Event 6' },
    { id: 7, src: cultural2, alt: 'Cultural Event 7' },
    { id: 8, src: holi2, alt: 'Cultural Event 8' },
];

const Gallery = () => {
    useEffect(() => {
        ScrollReveal().reveal('.gallery__item', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: true
        });
    }, []);

    return (
        <section id="gallery" className="gallery">
            <div className="gallery__container">
                <h2>Our Past Events</h2>
                <div className="gallery__grid">
                    {images.map(image => (
                        <div key={image.id} className="gallery__item">
                            <img src={image.src} alt={image.alt} className="gallery__image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
