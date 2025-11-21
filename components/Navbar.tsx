'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <span className="gradient-text">⚡ EV Charge Finder</span>
                    </div>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('search')}>Find Charging</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('faq')}>FAQ</a></li>
                        <li><a onClick={() => scrollToSection('blog')}>Blog</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
