export default function Marquee() {
    const items = [
        { icon: '🏥', text: 'Pharmacy Partners', sub: '200+ stores onboarded' },
        { icon: '🚚', text: 'Fast Delivery', sub: '24-48 hours nationwide' },
        { icon: '🌿', text: 'Eco-Friendly Products', sub: '100% sustainable catalog' },
        { icon: '💰', text: 'Competitive Margins', sub: 'Up to 35% profit' },
        { icon: '🪙', text: 'EcoCoin Rewards', sub: 'Earn on every transaction' },
        { icon: '📱', text: 'Digital Platform', sub: 'Order, track & manage' },
        { icon: '🤝', text: 'Distributor Network', sub: '300+ active distributors' },
        { icon: '🔒', text: 'Secure Payments', sub: 'Bank & UPI redemption' },
        { icon: '📦', text: 'Bulk Ordering', sub: 'Wholesale pricing tiers' },
        { icon: '📊', text: 'Real-Time Analytics', sub: 'Dashboard insights' },
        { icon: '🏆', text: 'Referral Bonus', sub: '50 EcoCoins per referral' },
        { icon: '🇮🇳', text: 'Made in India', sub: '50+ cities covered' },
    ];

    // Duplicate for seamless infinite scroll
    const allItems = [...items, ...items];

    return (
        <section className="marquee-section">
            <div className="marquee-label">Trusted by partners across India</div>
            <div className="marquee-track">
                {allItems.map((item, idx) => (
                    <div key={idx} className="marquee-item">
                        <span className="marquee-icon">{item.icon}</span>
                        <span className="marquee-text">
                            {item.text}
                            <small>{item.sub}</small>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
