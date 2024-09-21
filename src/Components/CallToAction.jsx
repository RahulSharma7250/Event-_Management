import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section id="call-to-action" className="call-to-action">
            <div className="call-to-action__container">
                <h2 className="call-to-action__title">Join Us at Our Next Cultural Event!</h2>
                <p className="call-to-action__description">
                    Don't miss out on an unforgettable experience filled with vibrant performances, diverse cultures, and lasting memories.
                </p>
                <a href="#!" className="call-to-action__button">Get Tickets Now</a>
            </div>
        </section>
    );
}

export default CallToAction;
