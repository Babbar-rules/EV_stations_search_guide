import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className="gradient-text">⚡ EV Charge Finder</h3>
                        <p>Your trusted guide to finding electric vehicle charging stations across the United States.</p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#search">Find Charging</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Newsletter</h4>
                        <p>Stay updated with the latest charging stations and EV news.</p>
                        <div className={styles.newsletter}>
                            <input type="email" placeholder="Your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} EV Charge Finder. All rights reserved.</p>
                    <p>Made with ❤️ for the EV community</p>
                </div>
            </div>
        </footer>
    );
}
