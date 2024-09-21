import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './FeaturedEvents.css';
import cultural2 from "../assets/images/cultural2.jpg";
import music from "../assets/images/music.jpg";
import food from "../assets/images/food.jpg";

const events = [
    {
        id: 1,
        title: 'Cultural Festival 2024',
        date: 'October 15, 2024',
        description: 'Join us for a day of vibrant performances, traditional food, and cultural showcases from around the world.',
        image: cultural2,
        className: 'event-card--right'
    },
    {
        id: 2,
        title: 'Art & Music Gala',
        date: 'November 12, 2024',
        description: 'A night of art, music, and dance celebrating the fusion of traditional and modern cultures.',
        image: music,
        className: 'event-card--top'
    },
    {
        id: 3,
        title: 'International Food Expo',
        date: 'December 5, 2024',
        description: 'Taste the world with a variety of international dishes and culinary experiences.',
        image: food,
        className: 'event-card--left'
    }
];

const FeaturedEvents = () => {
    useEffect(() => {
        ScrollReveal().reveal('.event-card--right', {
            duration: 1000,
            distance: '30px',
            origin: 'right',
            easing: 'ease-in-out',
        });
        ScrollReveal().reveal('.event-card--top', {
            duration: 1000,
            distance: '30px',
            origin: 'top',
            easing: 'ease-in-out',
        });
        ScrollReveal().reveal('.event-card--left', {
            duration: 1000,
            distance: '30px',
            origin: 'left',
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section id="events" className="featured-events">
            <div className="featured-events__container">
                <h2>Upcoming Events</h2>
                <div className="featured-events__list">
                    {events.map(event => (
                        <div key={event.id} className={`event-card ${event.className}`}>
                            <img src={event.image} alt="" className="event-card__image" />
                            <div className="event-card__content">
                                <h3 className="event-card__title">{event.title}</h3>
                                <p className="event-card__date">{event.date}</p>
                                <p className="event-card__description">{event.description}</p>
                                <a href="#!" className="event-card__link">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedEvents;
