'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-center">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className={styles.description}>
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                </div>

                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Information</h3>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>📧</div>
                            <div>
                                <h4>Email</h4>
                                <p>support@evchargefinder.com</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>🌍</div>
                            <div>
                                <h4>Coverage</h4>
                                <p>All 50 United States</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>⏰</div>
                            <div>
                                <h4>Support Hours</h4>
                                <p>24/7 Online Support</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        {submitted ? (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>✓</div>
                                <h3>Thank you!</h3>
                                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us what's on your mind..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
