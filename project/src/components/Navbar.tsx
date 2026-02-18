import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                {isHomePage ? (
                    <a href="#" className="nav-logo">
                        <div className="nav-logo-icon">🤝</div>
                        CareSakhi <span>Partner</span>
                    </a>
                ) : (
                    <Link to="/" className="nav-logo">
                        <div className="nav-logo-icon">🤝</div>
                        CareSakhi <span>Partner</span>
                    </Link>
                )}

                <div className={`nav-links${mobileMenuOpen ? ' mobile-open' : ''}`}>
                    {isHomePage ? (
                        <>
                            <a href="#about" onClick={closeMobileMenu}>About</a>
                            <a href="#how-it-works" onClick={closeMobileMenu}>How It Works</a>
                            <a href="#earnings" onClick={closeMobileMenu}>Earnings</a>
                            <a href="#ecocoins" onClick={closeMobileMenu}>EcoCoins</a>
                            <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
                            <a href="#join" className="btn-primary nav-cta" onClick={closeMobileMenu}>Become a Partner</a>
                        </>
                    ) : (
                        <>
                            <Link to="/#about" onClick={closeMobileMenu}>About</Link>
                            <Link to="/#how-it-works" onClick={closeMobileMenu}>How It Works</Link>
                            <Link to="/#earnings" onClick={closeMobileMenu}>Earnings</Link>
                            <Link to="/#ecocoins" onClick={closeMobileMenu}>EcoCoins</Link>
                            <Link to="/#faq" onClick={closeMobileMenu}>FAQ</Link>
                            <Link to="/#join" className="btn-primary nav-cta" onClick={closeMobileMenu}>Become a Partner</Link>
                        </>
                    )}
                </div>

                <button 
                    className={`mobile-toggle${mobileMenuOpen ? ' active' : ''}`} 
                    aria-label="Menu"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
}
