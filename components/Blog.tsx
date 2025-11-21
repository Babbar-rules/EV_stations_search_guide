import styles from './Blog.module.css';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of EV Charging Infrastructure',
        excerpt: 'Exploring how charging networks are expanding across the US and what it means for EV adoption.',
        date: 'Nov 15, 2025',
        category: 'Industry News',
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'Understanding Different EV Connector Types',
        excerpt: 'A comprehensive guide to CHAdeMO, CCS, Tesla, and other charging connector standards.',
        date: 'Nov 10, 2025',
        category: 'Education',
        readTime: '7 min read'
    },
    {
        id: 3,
        title: 'Tips for Planning Your EV Road Trip',
        excerpt: 'Essential tips and tools for planning long-distance travel with your electric vehicle.',
        date: 'Nov 5, 2025',
        category: 'Travel',
        readTime: '6 min read'
    }
];

export default function Blog() {
    return (
        <section id="blog" className={styles.blogSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-center">
                        Latest from Our <span className="gradient-text">Blog</span>
                    </h2>
                    <p className={styles.description}>
                        Stay updated with the latest news, tips, and insights about EV charging
                    </p>
                </div>

                <div className={styles.blogGrid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={`card ${styles.blogCard}`}>
                            <div className={styles.category}>{post.category}</div>
                            <h3>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.meta}>
                                <span className={styles.date}>📅 {post.date}</span>
                                <span className={styles.readTime}>⏱️ {post.readTime}</span>
                            </div>
                            <button className={`btn btn-outline ${styles.readMore}`}>Read More</button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
