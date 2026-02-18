import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Zap, ArrowUpRight, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Earnings() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const cards = [
        {
            icon: DollarSign,
            bg: 'rgba(240,83,182,0.08)',
            title: 'Competitive Margins',
            desc: 'Distributors earn 20-35% margins on every product sold. Our wholesale pricing ensures you stay profitable while offering competitive retail rates to pharmacies.',
            highlight: 'Up to 35% Margin',
            color: 'from-pink-500 to-rose-500',
            stats: [
                { label: 'Avg. Margin', value: '28%' },
                { label: 'Monthly Potential', value: '₹50K+' }
            ]
        },
        {
            icon: TrendingUp,
            bg: 'rgba(5,150,105,0.08)',
            title: 'Volume Bonuses',
            desc: 'Hit monthly volume targets and unlock bonus rewards. The more you sell, the more you earn — with tiered incentives that scale with your business growth.',
            highlight: '₹5,000 Monthly Bonus',
            color: 'from-emerald-500 to-teal-500',
            stats: [
                { label: 'Bonus Tiers', value: '3 Levels' },
                { label: 'Max Bonus', value: '₹15K' }
            ]
        },
        {
            icon: Users,
            bg: 'rgba(217,119,6,0.08)',
            title: 'Referral Income',
            desc: 'Every pharmacy you refer earns you 50 EcoCoins. Build your network and create a passive income stream while expanding the CareSakhi ecosystem.',
            highlight: '50 EcoCoins per Referral',
            color: 'from-amber-500 to-orange-500',
            stats: [
                { label: 'Per Referral', value: '50 Coins' },
                { label: 'Unlimited', value: '∞' }
            ]
        },
    ];

    return (
        <section className="earnings" id="earnings">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <div className="section-tag">Revenue Model</div>
                    <h2 className="section-title">
                        Multiple Ways to <span className="gradient-text">Maximize Earnings</span>
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        Our partner program is designed to help you build a sustainable and
                        profitable business with multiple income streams.
                    </p>
                </motion.div>

                <div className="earnings-grid-enhanced">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="earning-card-enhanced"
                            >
                                <motion.div
                                    className={`earning-icon-enhanced bg-gradient-to-br ${card.color}`}
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Icon size={28} color="white" strokeWidth={2.5} />
                                    <motion.div
                                        className="icon-glow"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>

                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>

                                <div className="earning-stats-grid">
                                    {card.stats.map((stat) => (
                                        <div key={stat.label} className="earning-stat-item">
                                            <div className="earning-stat-value">{stat.value}</div>
                                            <div className="earning-stat-label">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    className="earning-highlight-enhanced"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Sparkles size={16} />
                                    <span>{card.highlight}</span>
                                    <ArrowUpRight size={16} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Earnings Calculator Teaser */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="earnings-calculator-teaser"
                >
                    <Zap className="calculator-icon" size={32} />
                    <div>
                        <h4>Calculate Your Potential Earnings</h4>
                        <p>Based on average partner performance, you could earn ₹45,000 - ₹80,000 monthly</p>
                    </div>
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Try Calculator →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
