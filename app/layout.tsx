import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'EV Charging Stations Finder - Find Electric Vehicle Charging Near You',
    description: 'Discover electric vehicle charging stations across the USA. Search by city, filter by rating, and find the perfect charging spot for your EV.',
    keywords: 'EV charging, electric vehicle, charging stations, EV charger finder, electric car charging',
    authors: [{ name: 'EV Charging Network' }],
    openGraph: {
        title: 'EV Charging Stations Finder',
        description: 'Find electric vehicle charging stations near you',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google AdSense - Add your client ID */}
                {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
                    <script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
                        crossOrigin="anonymous"
                    ></script>
                )}
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
