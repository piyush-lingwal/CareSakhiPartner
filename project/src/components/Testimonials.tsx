export default function Testimonials() {
    const testimonials = [
        {
            stars: '★★★★★',
            quote: 'CareSakhi transformed my pharmacy business. I now offer sustainable menstrual products that my customers love, and the EcoCoins program adds a fantastic extra income stream. Best decision I made this year.',
            name: 'Dr. Priya Mehta',
            role: 'Pharmacy Partner, Mumbai',
            earning: '₹25,000/mo',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        {
            stars: '★★★★★',
            quote: 'The distribution model is incredibly well designed. I manage 40+ pharmacy accounts through the app, and the order fulfillment pipeline makes it easy to track everything. My revenue has grown 3x since joining.',
            name: 'Rajesh Kumar',
            role: 'Distributor Partner, Delhi NCR',
            earning: '₹65,000/mo',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        {
            stars: '★★★★★',
            quote: 'What sets CareSakhi apart is their commitment to sustainability. My customers appreciate the eco-friendly products, and the digital identity card gives us a professional edge. The referral bonus is amazing too!',
            name: 'Anjali Sharma',
            role: 'Pharmacy Partner, Jaipur',
            earning: '₹18,000/mo',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
    ];

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="reveal">
                    <div className="section-tag">Partner Stories</div>
                    <h2 className="section-title">
                        Hear From Our <span className="gradient-text">Successful Partners</span>
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        Real stories from real partners who are building sustainable businesses with CareSakhi.
                    </p>
                </div>

                <div className="testimonials-grid stagger-children">
                    {testimonials.map((t, i) => (
                        <div key={t.name} className="premium-card testimonial-card reveal" style={{ '--i': i } as React.CSSProperties}>
                            <div className="testimonial-stars">{t.stars}</div>
                            <blockquote>"{t.quote}"</blockquote>
                            <div className="testimonial-author">
                                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                                <div>
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                    <div className="testimonial-earning">💰 Earning {t.earning}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
