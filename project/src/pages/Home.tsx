import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import PartnerRoles from '../components/PartnerRoles';
import Earnings from '../components/Earnings';
import EcoCoins from '../components/EcoCoins';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <HowItWorks />
            <PartnerRoles />
            <Earnings />
            <EcoCoins />
            <Stats />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
