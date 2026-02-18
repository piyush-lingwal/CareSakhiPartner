import { motion } from 'framer-motion';
import { UserPlus, ShoppingCart, Truck, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function HowItWorks() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const steps = [
        {
            num: 1,
            icon: UserPlus,
            title: 'Sign Up',
            desc: 'Register as a Pharmacy or Distributor partner on the CareSakhi Partner App. Complete your KYC verification in minutes.',
            color: 'from-purple-500 to-pink-500',
            features: ['Quick KYC', 'No Registration Fee', 'Instant Approval']
        },
        {
            num: 2,
            icon: ShoppingCart,
            title: 'Browse & Order',
            desc: 'Pharmacies browse our curated catalog of sustainable menstrual health products. Place bulk orders directly through the app.',
            color: 'from-blue-500 to-cyan-500',
            features: ['100+ Products', 'Bulk Discounts', 'Easy Ordering']
        },
        {
            num: 3,
            icon: Truck,
            title: 'Fulfill & Deliver',
            desc: 'Distributors receive orders, manage inventory, and fulfill deliveries with real-time tracking at every step.',
            color: 'from-emerald-500 to-teal-500',
            features: ['Real-time Tracking', 'Inventory Management', '24-48hr Delivery']
        },
        {
            num: 4,
            icon: TrendingUp,
            title: 'Earn & Grow',
            desc: 'Both partners earn competitive margins and EcoCoins on every transaction. Redeem coins for cash via bank or UPI.',
            color: 'from-amber-500 to-orange-500',
            features: ['Up to 35% Margin', 'EcoCoin Rewards', 'Instant Redemption']
        },
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <div className="section-tag">Simple Process</div>
                    <h2 className="section-title">
                        How <span className="gradient-text">CareSakhi Partner</span> Works
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        Our streamlined B2B platform connects pharmacies directly with distributors
                        for seamless ordering, fulfillment, and rewards.
                    </p>
                </motion.div>

                <div className="steps-grid-enhanced">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="step-card-enhanced"
                            >
                                <motion.div
                                    className={`step-icon-wrapper bg-gradient-to-br ${step.color}`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Icon size={32} color="white" strokeWidth={2} />
                                    <div className="step-number">{step.num}</div>
                                </motion.div>

                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>

                                <div className="step-features">
                                    {step.features.map((feature) => (
                                        <div key={feature} className="step-feature-item">
                                            <CheckCircle2 size={14} className="text-emerald-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {i < steps.length - 1 && (
                                    <motion.div
                                        className="step-connector"
                                        initial={{ scaleX: 0 }}
                                        animate={inView ? { scaleX: 1 } : {}}
                                        transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                                    >
                                        <ArrowRight size={24} className="text-purple-400" />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Timeline visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="timeline-summary"
                >
                    <div className="timeline-item">
                        <span className="timeline-label">Average Setup Time</span>
                        <span className="timeline-value">10 Minutes</span>
                    </div>
                    <div className="timeline-divider"></div>
                    <div className="timeline-item">
                        <span className="timeline-label">First Order</span>
                        <span className="timeline-value">Same Day</span>
                    </div>
                    <div className="timeline-divider"></div>
                    <div className="timeline-item">
                        <span className="timeline-label">Start Earning</span>
                        <span className="timeline-value">Immediately</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
