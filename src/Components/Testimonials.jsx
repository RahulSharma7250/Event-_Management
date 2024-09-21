import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Testimonials.css';
import Organizer from '../assets/images/Organizer.jpg'
import Rahul from '../assets/images/Rahul.jpg'
import Eeshaan from '../assets/images/Eeshaan.jpg'

const testimonials = [
    {
        id: 1,
        name: 'Shubham Patil',
        title: 'Event Organizer',
        quote: 'CulturalEvents made our festival a grand success! The team was professional, and every detail was perfect. We couldn’t have asked for a better partner.',
        image: Organizer
    },
    {
        id: 2,
        name: 'Rahul Sharma',
        title: 'Cultural Ambassador',
        quote: 'The attention to cultural authenticity and the level of engagement were truly outstanding. It was an unforgettable experience.',
        image: Rahul 
    },
    {
        id: 3,
        name: 'Eeshaan Khambete',
        title: 'Performer',
        quote: 'Performing at a CulturalEvents-organized festival was a joy. The atmosphere, organization, and audience were fantastic.',
        image: Eeshaan
    }
];

const Testimonials = () => {
    useEffect(() => {
        ScrollReveal().reveal('.testimonial-card', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            interval: 200
        });
    }, []);

    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__container">
                <h2>What Our Clients Say</h2>
                <div className="testimonials__list">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-card__image" />
                            <blockquote className="testimonial-card__quote">“{testimonial.quote}”</blockquote>
                            <p className="testimonial-card__name">{testimonial.name}</p>
                            <p className="testimonial-card__title">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
