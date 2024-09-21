import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './BlogNews.css';
import event from "../assets/images/event.jpg";
import perform from "../assets/images/perform.jpg";
import tips from "../assets/images/tips.jpg";

const posts = [
    {
        id: 1,
        title: 'The Rise of Cultural Festivals',
        date: 'September 1, 2024',
        summary: 'Explore how cultural festivals are gaining popularity worldwide and the impact they have on local communities.',
        image: event
    },
    {
        id: 2,
        title: 'Top 5 Tips for Planning a Successful Cultural Event',
        date: 'August 25, 2024',
        summary: 'Learn the key strategies for organizing a memorable cultural event that resonates with attendees.',
        image: tips
    },
    {
        id: 3,
        title: 'Cultural Performances to Watch in 2024',
        date: 'August 15, 2024',
        summary: 'A curated list of must-see cultural performances that will take place this year.',
        image: perform
    }
];

const BlogNews = () => {
    useEffect(() => {
        ScrollReveal().reveal('.blog-news__card', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            interval: 200, // Delay between revealing each card
            reset: true // Ensures the reveal happens only once when scrolling down
        });

        ScrollReveal().reveal('.blog-news__image-box', {
            duration: 1000,
            distance: '30px',
            origin: 'top',
            easing: 'ease-in-out',
            delay: 500, // Delay to sync image reveal with card
            scale: 0.85, // Slight zoom effect
            reset: true
        });
    }, []);

    return (
        <section id="blog-news" className="blog-news">
            <div className="blog-news__container">
                <h2>Latest News & Articles</h2>
                <div className="blog-news__list">
                    {posts.map(post => (
                        <div key={post.id} className="blog-news__card">
                            <div className="blog-news__image-box">
                                <img src={post.image} alt={post.title} className="blog-news__image" />
                            </div>
                            <div className="blog-news__content">
                                <h3 className="blog-news__title">{post.title}</h3>
                                <p className="blog-news__date">{post.date}</p>
                                <p className="blog-news__summary">{post.summary}</p>
                                <a href="#!" className="blog-news__link">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogNews;
