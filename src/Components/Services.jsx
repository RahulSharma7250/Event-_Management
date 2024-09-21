import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Services.css';
import eventplan from "../assets/png/eventplan.png";
import venue from "../assets/png/venue.png";
import performance from "../assets/png/performance.png";
import vendor from "../assets/png/vendor.png";

const services = [
    {
        id: 1,
        title: 'Event Planning',
        description: 'Comprehensive event planning services to ensure your cultural event runs smoothly from start to finish.',
        icon: eventplan,
        position: 'left'
    },
    {
        id: 2,
        title: 'Venue Management',
        description: 'Expert management of venues to create the perfect setting for your cultural celebrations.',
        icon: venue,
        position: 'left'
    },
    {
        id: 3,
        title: 'Cultural Performances',
        description: 'Arranging spectacular cultural performances that bring vibrancy and authenticity to your event.',
        icon: performance,
        position: 'right'
    },
    {
        id: 4,
        title: 'Vendor Coordination',
        description: 'Seamless coordination with vendors to provide everything you need for a successful event.',
        icon: vendor,
        position: 'right'
    }
];

const Services = () => {
    useEffect(() => {
        
        ScrollReveal().reveal('.service-card.left', {
            duration: 1000,
            distance: '50px',
            origin: 'left',
            opacity: 0,
            interval: 200,
        });

        // Reveal cards coming from the right
        ScrollReveal().reveal('.service-card.right', {
            duration: 1000,
            distance: '50px',
            origin: 'right',
            opacity: 0,
            interval: 200,
        });
    }, []);

    return (
        <section id="services" className="services">
            <div className="services__container">
                <h2>Our Services</h2>
                <div className="services__list">
                    {services.map(service => (
                        <div key={service.id} className={`service-card ${service.position}`}>
                            <img src={service.icon} alt={service.title} className="service-card__icon" />
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
