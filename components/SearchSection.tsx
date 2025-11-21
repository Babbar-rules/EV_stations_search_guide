'use client';

import { useState } from 'react';
import { searchChargingStations, ChargingStation } from '@/lib/supabase';
import styles from './SearchSection.module.css';

export default function SearchSection() {
    const [searchText, setSearchText] = useState('');
    const [rating, setRating] = useState<number | ''>('');
    const [results, setResults] = useState<ChargingStation[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSearched(true);

        const stations = await searchChargingStations(
            searchText || undefined,
            rating ? Number(rating) : undefined
        );

        setResults(stations);
        setLoading(false);
    };

    return (
        <section id="search" className={styles.searchSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-center">Find <span className="gradient-text">Charging Stations</span></h2>
                    <p className={styles.description}>
                        Search for EV charging stations by location and minimum rating
                    </p>
                </div>

                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Search by city, state, or address"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value ? Number(e.target.value) : '')}
                        >
                            <option value="">All Ratings</option>
                            <option value="4.5">4.5+ Stars</option>
                            <option value="4.0">4.0+ Stars</option>
                            <option value="3.0">3.0+ Stars</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </form>

                {searched && (
                    <div className={styles.results}>
                        {loading ? (
                            <div className={styles.loadingState}>
                                <div className={styles.spinner}></div>
                                <p>Searching for charging stations...</p>
                            </div>
                        ) : results.length > 0 ? (
                            <>
                                <h3 className={styles.resultsTitle}>
                                    Found {results.length} charging station{results.length !== 1 ? 's' : ''}
                                </h3>
                                <div className={styles.stationGrid}>
                                    {results.map((station) => (
                                        <div key={station.id} className={`card ${styles.stationCard}`}>
                                            <div className={styles.cardHeader}>
                                                <h4>{station.name}</h4>
                                                <div className={styles.rating}>
                                                    <span className={styles.star}>⭐</span>
                                                    <span>{station.rating.toFixed(1)}</span>
                                                </div>
                                            </div>

                                            <div className={styles.cardBody}>
                                                <p className={styles.address}>
                                                    📍 {station.address}
                                                </p>

                                                <div className={styles.details}>
                                                    <div className={styles.detail}>
                                                        <span className={styles.label}>Reviews:</span>
                                                        <span>{station.total_reviews} reviews</span>
                                                    </div>
                                                    <div className={styles.detail}>
                                                        <span className={styles.label}>Country:</span>
                                                        <span>{station.country_code}</span>
                                                    </div>
                                                    {station.telephone && (
                                                        <div className={styles.detail}>
                                                            <span className={styles.label}>Phone:</span>
                                                            <span>{station.telephone}</span>
                                                        </div>
                                                    )}
                                                    {station.website && (
                                                        <div className={styles.detail}>
                                                            <span className={styles.label}>Website:</span>
                                                            <a href={station.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                                                Visit Site
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className={styles.coordinates}>
                                                    <span className={styles.badge}>📍 {station.lat.toFixed(4)}, {station.lon.toFixed(4)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}>🔍</div>
                                <h3>No charging stations found</h3>
                                <p>Try adjusting your search criteria or check that your Supabase database is set up correctly.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
