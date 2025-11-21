'use client';

import styles from './Hero.module.css';

export default function Hero() {
    const scrollToSearch = () => {
        const element = document.getElementById('search');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className="animate-fade-in-up">
                        Find <span className="gradient-text">EV Charging Stations</span> Near You
                    </h1>
                    <p className={styles.subtitle}>
                        Discover thousands of electric vehicle charging stations across the USA.
                        Search by city, filter by rating, and never run out of power on your journey.
                    </p>
                    <div className={styles.ctaButtons}>
                        <button className="btn btn-primary" onClick={scrollToSearch}>
                            Find Charging Stations
                        </button>
                        <button className="btn btn-outline" onClick={() => {
                            const element = document.getElementById('about');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Learn More
                        </button>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🔍</div>
                            <span>Easy Search</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>⭐</div>
                            <span>Rated Stations</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🗺️</div>
                            <span>USA Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bgPattern}></div>
        </section>
    );
}
