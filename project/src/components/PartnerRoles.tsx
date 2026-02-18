import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Store, 
    Truck, 
    Package, 
    TrendingUp, 
    Coins, 
    ShoppingCart, 
    BarChart3, 
    Bell, 
    CreditCard, 
    Users, 
    Warehouse,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Zap,
    Target,
    Building2,
    Percent,
    DollarSign,
    Headphones
} from 'lucide-react';
import { useRef, useState } from 'react';

export default function PartnerRoles() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const roles = [
        {
            id: 'pharmacy',
            icon: Store,
            title: 'Pharmacy Partner',
            tag: 'For Pharmacies & Stores',
            tagIcon: Store,
            description: 'Stock sustainable menstrual health products that your customers are actively seeking. Benefit from competitive wholesale pricing, easy ordering, and real-time inventory support.',
            gradient: 'from-pink-500 via-rose-500 to-red-500',
            bgGradient: 'from-pink-50 to-rose-50',
            accentColor: 'pink',
            features: [
                { icon: Package, text: 'Direct product ordering with bulk discounts' },
                { icon: BarChart3, text: 'Real-time order tracking & delivery status' },
                { icon: Coins, text: 'Earn EcoCoins on every purchase' },
                { icon: ShoppingCart, text: 'Browse curated product catalog with eco scores' },
                { icon: CreditCard, text: 'Digital identity card with license details' },
                { icon: Bell, text: 'Instant notifications for order updates' }
            ],
            stats: [
                { icon: Building2, value: '500+', label: 'Active Pharmacies' },
                { icon: Percent, value: '15%', label: 'Avg. Margin' },
                { icon: Headphones, value: '24/7', label: 'Support' }
            ]
        },
        {
            id: 'distributor',
            icon: Truck,
            title: 'Distributor Partner',
            tag: 'For Distributors',
            tagIcon: Truck,
            description: 'Build your distribution business with CareSakhi\'s innovative supply chain. Manage orders, inventory, and deliveries — all from a single app with powerful analytics and rewards.',
            gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
            bgGradient: 'from-emerald-50 to-teal-50',
            accentColor: 'emerald',
            features: [
                { icon: CheckCircle2, text: 'Accept, reject, and fulfill incoming orders' },
                { icon: Warehouse, text: 'Full inventory management with low-stock alerts' },
                { icon: TrendingUp, text: 'Higher margins + volume-based bonuses' },
                { icon: Users, text: 'Refer pharmacies & earn 50 EcoCoins per referral' },
                { icon: BarChart3, text: 'Dashboard with real-time stats & analytics' },
                { icon: CreditCard, text: 'Redeem EcoCoins directly to bank or UPI' }
            ],
            stats: [
                { icon: Truck, value: '100+', label: 'Distributors' },
                { icon: Percent, value: '25%', label: 'Avg. Margin' },
                { icon: DollarSign, value: '₹50K+', label: 'Monthly Avg.' }
            ]
        }
    ];

    return (
        <section className="partner-roles-redesigned" id="roles" ref={sectionRef}>
            {/* Animated Background */}
            <div className="roles-bg-elements">
                <motion.div 
                    className="roles-bg-orb roles-orb-1"
                    style={{ y }}
                />
                <motion.div 
                    className="roles-bg-orb roles-orb-2"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
                />
            </div>

            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                    className="roles-header-redesigned"
                >
                    <motion.div 
                        className="roles-badge"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles size={16} />
                        <span>Partner With Us</span>
                    </motion.div>
                    <h2 className="roles-title-redesigned">
                        Choose Your{' '}
                        <span className="gradient-text-animated">Partnership Path</span>
                    </h2>
                    <p className="roles-subtitle-redesigned">
                        Whether you're a pharmacy store or a distribution company, CareSakhi has a
                        customized partnership model designed for your growth.
                    </p>
                </motion.div>

                {/* Role Cards */}
                <div className="roles-cards-grid">
                    {roles.map((role, index) => {
                        const RoleIcon = role.icon;
                        const TagIcon = role.tagIcon;
                        const isHovered = hoveredCard === role.id;
                        
                        return (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className={`role-card-redesigned role-${role.id}`}
                                onMouseEnter={() => setHoveredCard(role.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Animated Background Gradient */}
                                <motion.div 
                                    className={`role-card-bg bg-gradient-to-br ${role.bgGradient}`}
                                    animate={{
                                        scale: isHovered ? 1.05 : 1,
                                        opacity: isHovered ? 1 : 0.5
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Floating Icon */}
                                <motion.div
                                    className={`role-floating-icon bg-gradient-to-br ${role.gradient}`}
                                    animate={{
                                        y: isHovered ? -10 : 0,
                                        rotate: isHovered ? 360 : 0,
                                        scale: isHovered ? 1.1 : 1
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <RoleIcon size={32} strokeWidth={2.5} />
                                </motion.div>

                                {/* Tag */}
                                <motion.div 
                                    className={`role-tag-redesigned tag-${role.accentColor}`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <TagIcon size={14} strokeWidth={2.5} />
                                    <span>{role.tag}</span>
                                </motion.div>

                                {/* Content */}
                                <div className="role-content-redesigned">
                                    <h3>{role.title}</h3>
                                    <p>{role.description}</p>

                                    {/* Stats Row */}
                                    <div className="role-stats-row">
                                        {role.stats.map((stat, idx) => {
                                            const StatIcon = stat.icon;
                                            return (
                                                <motion.div
                                                    key={stat.label}
                                                    className="role-stat-item"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 + 0.5 }}
                                                >
                                                    <div className={`stat-icon-wrapper stat-icon-${role.accentColor}`}>
                                                        <StatIcon size={20} strokeWidth={2.5} />
                                                    </div>
                                                    <div className="stat-value">{stat.value}</div>
                                                    <div className="stat-label">{stat.label}</div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Features List */}
                                    <div className="role-features-redesigned">
                                        {role.features.map((feature, idx) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    className="role-feature-item"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 + 0.7 }}
                                                    whileHover={{ x: 8 }}
                                                >
                                                    <div className={`feature-icon-wrapper icon-${role.accentColor}`}>
                                                        <FeatureIcon size={16} strokeWidth={2.5} />
                                                    </div>
                                                    <span>{feature.text}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.a
                                        href="https://github.com/piyush-lingwal/Partner/releases/download/Partner_Apk/CareSakhi-Partner.3.1.apk"
                                        download
                                        className={`role-cta-button cta-${role.accentColor}`}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Download Partner App</span>
                                        <motion.div
                                            animate={{ x: isHovered ? 5 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRight size={18} strokeWidth={2.5} />
                                        </motion.div>
                                    </motion.a>
                                </div>

                                {/* Animated Corner Accent */}
                                <div className={`role-corner-accent accent-${role.accentColor}`}>
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? [1, 1.2, 1] : 1,
                                            rotate: isHovered ? [0, 180, 360] : 0
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Zap size={16} />
                                    </motion.div>
                                </div>

                                {/* Hover Glow Effect */}
                                <motion.div
                                    className={`role-hover-glow glow-${role.accentColor}`}
                                    animate={{
                                        opacity: isHovered ? 0.6 : 0,
                                        scale: isHovered ? 1 : 0.8
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="roles-bottom-cta"
                >
                    <div className="cta-content">
                        <Target size={24} className="cta-icon" />
                        <div className="cta-text">
                            <h4>Not sure which path is right for you?</h4>
                            <p>Our team will help you choose the best partnership model for your business</p>
                        </div>
                        <motion.a
                            href="#help"
                            className="cta-help-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Guidance
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
