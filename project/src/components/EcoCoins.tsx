import { motion } from 'framer-motion';
import { Package, Users, Leaf, Clock, Coins, Wallet, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function EcoCoins() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const ways = [
        {
            icon: Package,
            bg: 'rgba(5,150,105,0.08)',
            title: 'Complete Orders',
            desc: 'Earn EcoCoins for every order you successfully deliver.',
            coins: '+10-50',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            icon: Users,
            bg: 'rgba(240,83,182,0.08)',
            title: 'Refer Partners',
            desc: '50 EcoCoins for every new pharmacy your referral code brings in.',
            coins: '+50',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: Leaf,
            bg: 'rgba(217,119,6,0.08)',
            title: 'Sustainability Goals',
            desc: 'Bonus coins when you hit eco-friendly product distribution targets.',
            coins: '+25-100',
            color: 'from-amber-500 to-orange-500'
        },
        {
            icon: Clock,
            bg: 'rgba(37,99,235,0.08)',
            title: 'Timely Deliveries',
            desc: 'Additional rewards for maintaining on-time delivery streaks.',
            coins: '+15-30',
            color: 'from-blue-500 to-cyan-500'
        },
    ];

    const redeemOptions = [
        { icon: Wallet, label: 'Bank Account', color: 'text-emerald-600' },
        { icon: Smartphone, label: 'UPI Transfer', color: 'text-blue-600' },
        { icon: Coins, label: 'Min. 1,000 Coins', color: 'text-amber-600' }
    ];

    return (
        <section className="ecocoins" id="ecocoins">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <div className="section-tag">Rewards Program</div>
                    <h2 className="section-title">
                        Earn <span className="gradient-text">EcoCoins</span> With Every Transaction
                    </h2>
                    <p className="section-desc">
                        Our unique EcoCoin rewards system incentivizes sustainable business practices.
                        Earn coins, redeem for real money — it's that simple.
                    </p>
                </motion.div>

                <div className="ecocoins-layout-enhanced">
                    <div className="ecocoins-info-enhanced">
                        <div className="eco-ways-enhanced">
                            {ways.map((w, i) => {
                                const Icon = w.icon;
                                return (
                                    <motion.div
                                        key={w.title}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        whileHover={{ x: 8, transition: { duration: 0.3 } }}
                                        className="eco-way-enhanced"
                                    >
                                        <motion.div
                                            className={`eco-way-icon-enhanced bg-gradient-to-br ${w.color}`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Icon size={24} color="white" strokeWidth={2} />
                                        </motion.div>
                                        <div className="eco-way-content">
                                            <h4>{w.title}</h4>
                                            <p>{w.desc}</p>
                                        </div>
                                        <motion.div
                                            className="eco-coins-badge"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {w.coins} 🪙
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Redeem Options */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="redeem-options"
                        >
                            <h4 className="redeem-title">Redeem Your Coins</h4>
                            <div className="redeem-grid">
                                {redeemOptions.map((option) => {
                                    const Icon = option.icon;
                                    return (
                                        <motion.div
                                            key={option.label}
                                            className="redeem-option"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Icon className={option.color} size={20} />
                                            <span>{option.label}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="ecocoins-visual-enhanced"
                    >
                        <motion.div
                            className="eco-coin-circle-enhanced"
                            animate={{
                                boxShadow: [
                                    '0 0 40px rgba(125, 0, 157, 0.1)',
                                    '0 0 80px rgba(125, 0, 157, 0.2)',
                                    '0 0 40px rgba(125, 0, 157, 0.1)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <motion.div
                                className="coin-icon"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            >
                                🪙
                            </motion.div>
                            <h3 className="eco-label">EcoCoins</h3>
                            <p className="eco-sub">Earn • Save • Redeem</p>

                            {/* Floating particles */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="coin-particle"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 120],
                                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 120],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: 'easeOut'
                                    }}
                                >
                                    🪙
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats Cards */}
                        <motion.div
                            className="eco-stat-card"
                            style={{ top: '10%', right: '-20px' }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="eco-stat-value">2,500+</div>
                            <div className="eco-stat-label">Avg. Monthly Coins</div>
                        </motion.div>

                        <motion.div
                            className="eco-stat-card"
                            style={{ bottom: '15%', left: '-20px' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="eco-stat-value">₹2,500</div>
                            <div className="eco-stat-label">Cash Value</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
