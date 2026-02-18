import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Users, Lightbulb, Target, Heart, TrendingUp, Award, Globe, Recycle, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const sectionRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const mainFeatures = [
        {
            icon: Leaf,
            title: 'Sustainability First',
            desc: 'Every product in our catalog is eco-friendly, reusable, and designed to reduce the 12 billion pads that end up in Indian landfills each year.',
            stat: '12B+',
            statLabel: 'Pads Saved Annually',
            color: 'emerald',
            gradient: 'from-emerald-400 via-teal-400 to-cyan-500',
            bgPattern: 'leaf',
            features: [
                { icon: Recycle, label: '100% Eco-Friendly' },
                { icon: ShieldCheck, label: 'Certified Products' },
                { icon: Sparkles, label: 'Zero Waste Goal' }
            ]
        },
        {
            icon: Users,
            title: 'Women\'s Empowerment',
            desc: 'We empower women entrepreneurs by providing them with the tools, products, and support they need to build successful businesses.',
            stat: '500+',
            statLabel: 'Women Empowered',
            color: 'pink',
            gradient: 'from-pink-400 via-rose-400 to-red-400',
            bgPattern: 'circle',
            features: [
                { icon: Target, label: 'Business Training' },
                { icon: TrendingUp, label: 'Growth Support' }
            ]
        },
        {
            icon: Lightbulb,
            title: 'Innovation Driven',
            desc: 'From medical-grade silicone cups to ultra-absorbent reusable pads, we invest in R&D to bring the world\'s best technology to India.',
            stat: '50+',
            statLabel: 'Innovative Products',
            color: 'amber',
            gradient: 'from-amber-400 via-orange-400 to-red-500',
            bgPattern: 'grid',
            features: [
                { icon: Zap, label: 'Latest Technology' },
                { icon: Award, label: 'Quality Assured' }
            ]
        }
    ];

    const impactStats = [
        { icon: Target, value: '50+', label: 'Cities', color: 'text-purple-600', bg: 'bg-purple-100' },
        { icon: Heart, value: '100K+', label: 'Lives', color: 'text-pink-600', bg: 'bg-pink-100' },
        { icon: TrendingUp, value: '300%', label: 'Growth', color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { icon: Award, value: '#1', label: 'Platform', color: 'text-blue-600', bg: 'bg-blue-100' }
    ];

    return (
        <section className="about-redesigned" id="about" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="about-bg-elements">
                <motion.div 
                    className="about-bg-orb about-bg-orb-1"
                    style={{ y }}
                />
                <motion.div 
                    className="about-bg-orb about-bg-orb-2"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                />
            </div>

            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                    className="about-header-redesigned"
                >
                    <motion.div 
                        className="about-badge"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Globe size={16} />
                        <span>Our Mission</span>
                    </motion.div>
                    <h2 className="about-title-redesigned">
                        Making Sustainable Menstrual Health{' '}
                        <span className="gradient-text-animated">Accessible to All</span>
                    </h2>
                    <p className="about-subtitle-redesigned">
                        CareSakhi is revolutionizing India's menstrual health ecosystem by building a
                        technology-driven supply chain that puts sustainability, affordability, and accessibility first.
                    </p>
                </motion.div>

                {/* Main Features - Bento Grid Style */}
                <div className="about-bento-grid">
                    {mainFeatures.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className={`about-bento-card about-bento-${i === 0 ? 'large' : 'small'}`}
                            >
                                <div className={`about-card-pattern pattern-${feature.bgPattern}`}></div>
                                
                                <motion.div
                                    className={`about-feature-icon-new bg-gradient-to-br ${feature.gradient}`}
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon size={28} strokeWidth={2.5} />
                                </motion.div>

                                <div className="about-feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                    
                                    {/* Feature Icons List */}
                                    <div className="feature-icons-list">
                                        {feature.features.map((item, idx) => {
                                            const FeatureIcon = item.icon;
                                            return (
                                                <motion.div
                                                    key={item.label}
                                                    className="feature-icon-item"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ duration: 0.5, delay: i * 0.2 + idx * 0.1 + 0.5 }}
                                                    whileHover={{ x: 4 }}
                                                >
                                                    <div className="feature-icon-circle">
                                                        <FeatureIcon size={16} strokeWidth={2.5} />
                                                    </div>
                                                    <span>{item.label}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <motion.div 
                                    className="about-feature-stat"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="stat-number">{feature.stat}</div>
                                    <div className="stat-label">{feature.statLabel}</div>
                                </motion.div>

                                {/* Animated corner accent */}
                                <div className={`about-card-accent accent-${feature.color}`}></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Impact Stats - Floating Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="about-impact-stats"
                >
                    {impactStats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                className="about-impact-card"
                                whileHover={{ y: -8, scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className={`impact-icon-wrapper ${stat.bg}`}>
                                    <Icon className={stat.color} size={24} strokeWidth={2.5} />
                                </div>
                                <div className="impact-value">{stat.value}</div>
                                <div className="impact-label">{stat.label}</div>
                                
                                {/* Animated pulse ring */}
                                <motion.div
                                    className="impact-pulse"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Vision Statement - Modern Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 1 }}
                    className="about-vision-modern"
                >
                    <div className="vision-decoration">
                        <motion.div
                            className="vision-quote-mark"
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            "
                        </motion.div>
                    </div>
                    
                    <div className="vision-content">
                        <p className="vision-text">
                            Our vision is simple — no woman in India should have to compromise on her health
                            due to lack of access to safe, sustainable, and affordable menstrual products.
                            Through our partner network, we're turning this vision into reality, one city at a time.
                        </p>
                        
                        <div className="vision-author-card">
                            <div className="author-avatar">
                                <span>PL</span>
                            </div>
                            <div className="author-info">
                                <div className="author-name">Piyush Lingwal</div>
                                <div className="author-title">Founder & CEO, CareSakhi</div>
                            </div>
                        </div>
                    </div>

                    {/* Animated gradient border */}
                    <div className="vision-border-animation"></div>
                </motion.div>
            </div>
        </section>
    );
}
