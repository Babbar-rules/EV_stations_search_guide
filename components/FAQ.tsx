'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'How do I find charging stations near me?',
        answer: 'Simply enter your city name in the search box above and click "Search". You can also filter results by minimum rating to find the best-rated stations in your area.'
    },
    {
        question: 'Are the charging station listings updated in real-time?',
        answer: 'Yes! Our database is continuously updated to provide you with the most accurate information about charging station availability, pricing, and status.'
    },
    {
        question: 'What types of EV chargers are available?',
        answer: 'Charging stations offer various connector types including CHAdeMO, CCS (Combined Charging System), Tesla Supercharger, and Level 2 AC chargers. Each station listing shows which connector types are available.'
    },
    {
        question: 'How are charging stations rated?',
        answer: 'Stations are rated by EV drivers based on factors like reliability, ease of use, location convenience, and overall charging experience. Ratings range from 1 to 5 stars.'
    },
    {
        question: 'Is this service free to use?',
        answer: 'Yes, our charging station finder is completely free to use. We help you find stations, but pricing for actual charging services is set by the station operators.'
    },
    {
        question: 'Can I filter by charging speed?',
        answer: 'Yes! Each station listing shows the power output in kW. Higher kW ratings mean faster charging speeds. You can see this information in the search results.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.faqSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-center">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className={styles.description}>
                        Find answers to common questions about our EV charging station finder
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
