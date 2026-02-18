import { motion } from 'framer-motion';
import { BookOpen, Download, CheckCircle2, ArrowRight, FileText, Video, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerGuide() {
    const guides = [
        {
            category: 'Getting Started',
            icon: BookOpen,
            color: 'from-purple-500 to-pink-500',
            items: [
                { title: 'Quick Start Guide', desc: 'Get up and running in 10 minutes', duration: '5 min read' },
                { title: 'Account Setup', desc: 'Complete your profile and KYC verification', duration: '8 min read' },
                { title: 'First Order Walkthrough', desc: 'Step-by-step guide to your first order', duration: '10 min read' },
                { title: 'Understanding the Dashboard', desc: 'Navigate your partner dashboard like a pro', duration: '7 min read' }
            ]
        },
        {
            category: 'For Pharmacies',
            icon: FileText,
            color: 'from-blue-500 to-cyan-500',
            items: [
                { title: 'Product Catalog Guide', desc: 'Browse and order from our sustainable product range', duration: '6 min read' },
                { title: 'Order Management', desc: 'Track, modify, and manage your orders', duration: '8 min read' },
                { title: 'Inventory Best Practices', desc: 'Optimize your stock levels for maximum profit', duration: '12 min read' },
                { title: 'Customer Education Tips', desc: 'Help your customers choose the right products', duration: '10 min read' }
            ]
        },
        {
            category: 'For Distributors',
            icon: FileText,
            color: 'from-emerald-500 to-teal-500',
            items: [
                { title: 'Order Fulfillment Process', desc: 'Accept, process, and deliver orders efficiently', duration: '10 min read' },
                { title: 'Inventory Management', desc: 'Track stock levels and manage replenishment', duration: '12 min read' },
                { title: 'Pharmacy Network Building', desc: 'Grow your pharmacy partner network', duration: '15 min read' },
                { title: 'Delivery Optimization', desc: 'Route planning and timely delivery tips', duration: '10 min read' }
            ]
        },
        {
            category: 'EcoCoins & Rewards',
            icon: FileText,
            color: 'from-amber-500 to-orange-500',
            items: [
                { title: 'EcoCoins Explained', desc: 'Everything about earning and redeeming coins', duration: '8 min read' },
                { title: 'Maximizing Rewards', desc: 'Tips to earn more EcoCoins', duration: '10 min read' },
                { title: 'Redemption Process', desc: 'How to redeem coins to bank or UPI', duration: '5 min read' },
                { title: 'Referral Program Guide', desc: 'Earn 50 coins per pharmacy referral', duration: '7 min read' }
            ]
        }
    ];

    const resources = [
        {
            icon: Download,
            title: 'Download PDF Guides',
            desc: 'Complete partner handbook in PDF format',
            action: 'Download (2.5 MB)',
            color: 'text-purple-600'
        },
        {
            icon: Video,
            title: 'Video Tutorials',
            desc: 'Watch step-by-step video guides',
            action: 'Watch Now',
            color: 'text-blue-600'
        },
        {
            icon: Headphones,
            title: 'Live Training Sessions',
            desc: 'Join our weekly partner training webinars',
            action: 'Register',
            color: 'text-emerald-600'
        }
    ];

    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="page-hero-content"
                    >
                        <Link to="/" className="back-link">
                            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                            Back to Home
                        </Link>
                        <h1 className="page-title">
                            Partner <span className="gradient-text">Guide</span>
                        </h1>
                        <p className="page-subtitle">
                            Everything you need to succeed as a CareSakhi partner. From setup to scaling,
                            we've got you covered with comprehensive guides and resources.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Resources */}
            <section className="page-section">
                <div className="container">
                    <div className="resources-grid">
                        {resources.map((resource, i) => {
                            const Icon = resource.icon;
                            return (
                                <motion.div
                                    key={resource.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="resource-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icon className={resource.color} size={32} />
                                    <h3>{resource.title}</h3>
                                    <p>{resource.desc}</p>
                                    <button className="btn-outline">{resource.action} →</button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Guides by Category */}
            <section className="page-section bg-cream">
                <div className="container">
                    {guides.map((guide, i) => {
                        const Icon = guide.icon;
                        return (
                            <motion.div
                                key={guide.category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="guide-category"
                            >
                                <div className="guide-category-header">
                                    <div className={`guide-icon bg-gradient-to-br ${guide.color}`}>
                                        <Icon size={24} color="white" />
                                    </div>
                                    <h2>{guide.category}</h2>
                                </div>
                                <div className="guide-items">
                                    {guide.items.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            className="guide-item"
                                            whileHover={{ x: 8 }}
                                        >
                                            <CheckCircle2 size={20} className="text-emerald-500" />
                                            <div className="guide-item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                            <span className="guide-duration">{item.duration}</span>
                                            <ArrowRight size={20} className="guide-arrow" />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="page-cta"
                    >
                        <h3>Need Personalized Help?</h3>
                        <p>Our partner success team is here to guide you every step of the way</p>
                        <div className="cta-btns">
                            <a href="mailto:partners@caresakhi.com" className="btn-primary">
                                Contact Support Team →
                            </a>
                            <Link to="/help-center" className="btn-outline">
                                Visit Help Center
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
