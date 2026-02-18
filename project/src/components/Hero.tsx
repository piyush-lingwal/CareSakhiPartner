export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-orb hero-orb-3" />
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        🚀 Now Onboarding Partners Across India
                    </div>

                    <h1>
                        Join India's Fastest Growing{' '}
                        <span className="gradient-text">Menstrual Health</span> Supply Chain
                    </h1>

                    <p className="hero-sub">
                        Partner with CareSakhi to distribute sustainable menstrual health products.
                        Earn competitive margins, EcoCoins rewards, and make a real impact on
                        women's health across India.
                    </p>

                    <div className="hero-ctas">
                        <a href="https://github.com/piyush-lingwal/Partner/releases/download/Partner_Apk/CareSakhi-Partner.3.1.apk" className="btn-primary" download>
                            📱 Download Partner App
                        </a>
                        <a href="#roles" className="btn-outline">
                            📋 View Partnership Options
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">500<span>+</span></div>
                            <div className="hero-stat-label">Active Partners</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">10K<span>+</span></div>
                            <div className="hero-stat-label">Orders Fulfilled</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-value">₹2Cr<span>+</span></div>
                            <div className="hero-stat-label">Revenue Generated</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-glow-ring">
                        <div className="hero-float-card">
                            <div className="float-card-label">Avg. Monthly Earning</div>
                            <div className="float-card-value green">₹45,000</div>
                        </div>
                        <div className="hero-float-card">
                            <div className="float-card-label">EcoCoins Earned</div>
                            <div className="float-card-value pink">2,500 🪙</div>
                        </div>
                        <div className="hero-float-card">
                            <div className="float-card-label">Orders This Month</div>
                            <div className="float-card-value">156</div>
                        </div>

                        <div className="hero-inner-ring">
                            <span className="ring-label">Partner Network</span>
                            <span className="ring-value">50+</span>
                            <span className="ring-unit">Cities in India</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
