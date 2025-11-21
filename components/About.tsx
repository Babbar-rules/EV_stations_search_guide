import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h2>About <span className="gradient-text">EV Charge Finder</span></h2>
                        <p>
                            We're on a mission to accelerate the adoption of electric vehicles by making it
                            easier than ever to find reliable charging stations across the United States.
                        </p>
                        <p>
                            Our comprehensive database includes thousands of charging locations, complete with
                            real-time availability, user ratings, pricing information, and detailed specifications.
                            Whether you're planning a road trip or just need a quick charge around town, we've got you covered.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>10,000+</div>
                                <div className={styles.statLabel}>Charging Stations</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>50</div>
                                <div className={styles.statLabel}>States Covered</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>24/7</div>
                                <div className={styles.statLabel}>Updated Data</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔋</div>
                            <h3>Comprehensive Coverage</h3>
                            <p>Access information on thousands of charging stations across all 50 states.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3>Real-Time Data</h3>
                            <p>Get up-to-date information on availability, pricing, and station status.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🌟</div>
                            <h3>User Ratings</h3>
                            <p>Make informed decisions with ratings and reviews from the EV community.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🗺️</div>
                            <h3>Easy Navigation</h3>
                            <p>Find stations by city, filter by rating, and get exactly what you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
