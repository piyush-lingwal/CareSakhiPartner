import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            {/* Final CTA */}
            <section className="cta-section" id="join">
                <div className="container">
                    <div className="reveal-scale">
                        <div className="section-tag">Get Started Today</div>
                        <h2>
                            Ready to Transform<br />
                            <span className="gradient-text">Healthcare Distribution?</span>
                        </h2>
                        <p>
                            Join 500+ partners already building profitable, sustainable businesses
                            with CareSakhi. No registration fee. Start earning from day one.
                        </p>
                        <div className="cta-btns">
                            <a href="https://github.com/piyush-lingwal/Partner/releases/download/Partner_Apk/CareSakhi-Partner.3.1.apk" className="btn-primary" download>📱 Download Partner App</a>
                            <a href="mailto:caresakhi06@gmail.com" className="btn-outline">📧 Contact Sales Team</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>CareSakhi <span className="gradient-text">Partner</span></h3>
                            <p>
                                India's first tech-driven B2B supply chain for sustainable menstrual
                                health products. Empowering pharmacies and distributors to build
                                profitable, impactful businesses.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Platform</h4>
                            <a href="#about">About Us</a>
                            <a href="#how-it-works">How It Works</a>
                            <a href="#roles">Partner Roles</a>
                            <a href="#earnings">Earnings</a>
                            <a href="#ecocoins">EcoCoins</a>
                        </div>

                        <div className="footer-col">
                            <h4>Resources</h4>
                            <a href="#faq">FAQ</a>
                            <Link to="/partner-guide">Partner Guide</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/help-center">Help Center</Link>
                            <Link to="/api-docs">API Docs</Link>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href="mailto:partners@caresakhi.com">caresakhi06@gmail.com</a>
                            <a href="tel:+919876543210">+91 86304 73112</a>
                            <a href="#">Dehradun, Uttarakhand</a>
                            <a href="#">India</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2024-2026 CareSakhi. All rights reserved. Built with ❤️ for a sustainable future.</p>
                        <div className="footer-socials">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="Twitter">𝕏</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="YouTube">▶</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
