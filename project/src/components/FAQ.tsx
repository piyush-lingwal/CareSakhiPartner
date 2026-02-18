import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle2, Clock, Shield, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const items = [
        {
            q: 'How do I become a CareSakhi partner?',
            a: 'Download the CareSakhi Partner App from the Play Store or App Store. Register with your phone number, complete KYC verification, and choose your role (Pharmacy or Distributor). The entire process takes less than 10 minutes.',
            icon: HelpCircle,
            category: 'Getting Started'
        },
        {
            q: 'What are EcoCoins and how do they work?',
            a: 'EcoCoins are our proprietary reward currency. You earn them by completing orders, referring new partners, meeting sustainability goals, and maintaining timely deliveries. Once you accumulate 1,000+ EcoCoins, you can redeem them directly to your bank account or via UPI.',
            icon: Zap,
            category: 'Rewards'
        },
        {
            q: 'What kind of margins can I expect?',
            a: 'Distributors can earn margins of 20-35% depending on the product category and order volume. Pharmacies benefit from competitive wholesale pricing that allows for healthy retail margins. Volume-based bonuses can add up to ₹5,000+ monthly.',
            icon: CheckCircle2,
            category: 'Earnings'
        },
        {
            q: 'Is there a registration fee?',
            a: 'No, joining the CareSakhi partner network is completely free. There are no registration fees, no hidden charges, and no minimum order requirements to get started.',
            icon: Shield,
            category: 'Getting Started'
        },
        {
            q: 'How does the referral program work?',
            a: 'As a distributor, you get a unique referral code. When a new pharmacy signs up using your code, you earn 50 EcoCoins instantly. There\'s no limit on the number of referrals — the more pharmacies you bring in, the more you earn.',
            icon: CheckCircle2,
            category: 'Rewards'
        },
        {
            q: 'How are orders routed in the system?',
            a: 'When a pharmacy places an order, it\'s automatically routed to their linked distributor. If no distributor is linked, the order goes to the admin dashboard for manual assignment. Distributors can accept or reject orders based on their capacity.',
            icon: Clock,
            category: 'Operations'
        },
        {
            q: 'What products does CareSakhi offer?',
            a: 'We offer a curated range of sustainable menstrual health products including menstrual cups, reusable pads, organic sanitary napkins, menstrual discs, and more. Every product comes with an eco-score rating to help partners and consumers make informed choices.',
            icon: HelpCircle,
            category: 'Products'
        },
        {
            q: 'How do I track my orders and earnings?',
            a: 'The CareSakhi Partner App provides a comprehensive dashboard with real-time order tracking, delivery status updates, earnings breakdown, EcoCoin balance, and performance analytics — all in one place.',
            icon: Clock,
            category: 'Operations'
        },
    ];

    return (
        <section className="faq" id="faq">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <div className="section-tag">Got Questions?</div>
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        Everything you need to know about the CareSakhi Partner Program.
                    </p>
                </motion.div>

                <div className="faq-list-enhanced">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        const isOpen = openIdx === i;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="faq-item-enhanced"
                            >
                                <motion.button
                                    className="faq-question-enhanced"
                                    onClick={() => setOpenIdx(isOpen ? null : i)}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="faq-question-content">
                                        <motion.div
                                            className="faq-icon-wrapper"
                                            animate={{ rotate: isOpen ? 360 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon size={20} className="faq-icon" />
                                        </motion.div>
                                        <div className="faq-question-text">
                                            <span className="faq-category">{item.category}</span>
                                            <span className="faq-question-title">{item.q}</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-chevron-enhanced"
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="faq-answer-enhanced"
                                        >
                                            <motion.p
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                {item.a}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="faq-cta"
                >
                    <HelpCircle size={32} className="faq-cta-icon" />
                    <div>
                        <h4>Still have questions?</h4>
                        <p>Our support team is here to help you get started</p>
                    </div>
                    <motion.a
                        href="mailto:partners@caresakhi.com"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Support →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
