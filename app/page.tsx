import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <SearchSection />
            <About />
            <FAQ />
            <Blog />
            <Contact />
            <Footer />
        </main>
    );
}
