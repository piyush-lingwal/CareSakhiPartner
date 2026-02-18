import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Phone, Mail, ArrowRight, BookOpen, Video, FileText, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');

    const quickHelp = [
        {
            icon: MessageCircle,
            title: 'Live Chat Support',
            desc: 'Chat with our support team in real-time',
            action: 'Start Chat',
            color: 'from-purple-500 to-pink-500',
            available: 'Available 9 AM - 9 PM IST'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            desc: 'Speak directly with a support agent',
            action: 'Call Now',
            color: 'from-blue-500 to-cyan-500',
            available: '+91 98765 43210'
        },
        {
            icon: Mail,
            title: 'Email Support',
            desc: 'Send us your query via email',
            action: 'Send Email',
            color: 'from-emerald-500 to-teal-500',
            available: 'partners@caresakhi.com'
        },
        {
            icon: Video,
            title: 'Video Tutorials',
            desc: 'Watch step-by-step video guides',
            action: 'Watch Now',
            color: 'from-amber-500 to-orange-500',
            available: '50+ tutorials available'
        }
    ];

    const helpTopics = [
        {
            category: 'Account & Setup',
            icon: BookOpen,
            color: 'text-purple-600',
            articles: [
                'How to create a partner account',
                'Completing KYC verification',
                'Setting up your profile',
                'Understanding account types',
                'Resetting your password'
            ]
        },
        {
            category: 'Orders & Fulfillment',
            icon: FileText,
            color: 'text-blue-600',
            articles: [
                'How to place an order (Pharmacy)',
                'Accepting and processing orders (Distributor)',
                'Order tracking and status updates',
                'Modifying or canceling orders',
                'Handling order disputes'
            ]
        },
        {
            category: 'Payments & EcoCoins',
            icon: FileText,
            color: 'text-emerald-600',
            articles: [
                'Understanding EcoCoins rewards',
                'How to redeem EcoCoins',
                'Payment methods and schedules',
                'Viewing earnings and transactions',
                'Tax and invoice information'
            ]
        },
        {
            category: 'Products & Inventory',
            icon: FileText,
            color: 'text-amber-600',
            articles: [
                'Browsing the product catalog',
                'Understanding product eco-scores',
                'Managing inventory levels',
                'Stock replenishment process',
                'Product quality and returns'
            ]
        },
        {
            category: 'Technical Issues',
            icon: FileText,
            color: 'text-pink-600',
            articles: [
                'App not loading or crashing',
                'Login and authentication issues',
                'Notification problems',
                'Data sync issues',
                'Reporting bugs and errors'
            ]
        },
        {
            category: 'Policies & Guidelines',
            icon: FileText,
            color: 'text-indigo-600',
            articles: [
                'Partner terms and conditions',
                'Privacy policy',
                'Delivery and fulfillment policies',
                'Return and refund policy',
                'Code of conduct for partners'
            ]
        }
    ];

    const popularArticles = [
        { title: 'How to complete KYC verification', views: '12.5K views' },
        { title: 'Understanding the EcoCoin redemption process', views: '10.2K views' },
        { title: 'Troubleshooting login issues', views: '8.7K views' },
        { title: 'How to track order status', views: '7.9K views' },
        { title: 'Setting up bank account for payments', views: '6.5K views' }
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
                            Help <span className="gradient-text">Center</span>
                        </h1>
                        <p className="page-subtitle">
                            Find answers, get support, and learn how to make the most of your CareSakhi partnership.
                        </p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="help-search"
                        >
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search for help articles, guides, or FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn-primary">Search</button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Help Options */}
            <section className="page-section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '40px', textAlign: 'center' }}>
                        Get <span className="gradient-text">Instant Help</span>
                    </h2>
                    <div className="quick-help-grid">
                        {quickHelp.map((help, i) => {
                            const Icon = help.icon;
                            return (
                                <motion.div
                                    key={help.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="quick-help-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`quick-help-icon bg-gradient-to-br ${help.color}`}>
                                        <Icon size={28} color="white" />
                                    </div>
                                    <h3>{help.title}</h3>
                                    <p>{help.desc}</p>
                                    <span className="help-available">{help.available}</span>
                                    <button className="btn-outline">{help.action} →</button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Popular Articles */}
            <section className="page-section bg-cream">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '32px' }}>
                        Popular <span className="gradient-text">Articles</span>
                    </h2>
                    <div className="popular-articles">
                        {popularArticles.map((article, i) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="popular-article-item"
                                whileHover={{ x: 8 }}
                            >
                                <HelpCircle size={20} className="text-purple-600" />
                                <div className="popular-article-content">
                                    <h4>{article.title}</h4>
                                    <span>{article.views}</span>
                                </div>
                                <ArrowRight size={18} className="article-arrow" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Topics */}
            <section className="page-section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '48px', textAlign: 'center' }}>
                        Browse by <span className="gradient-text">Topic</span>
                    </h2>
                    <div className="help-topics-grid">
                        {helpTopics.map((topic, i) => {
                            const Icon = topic.icon;
                            return (
                                <motion.div
                                    key={topic.category}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="help-topic-card"
                                >
                                    <div className="help-topic-header">
                                        <Icon className={topic.color} size={24} />
                                        <h3>{topic.category}</h3>
                                    </div>
                                    <ul className="help-topic-articles">
                                        {topic.articles.map((article) => (
                                            <li key={article}>
                                                <ArrowRight size={14} />
                                                <span>{article}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="help-topic-more">
                                        View All Articles →
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Still Need Help CTA */}
            <section className="page-section bg-cream">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="page-cta"
                    >
                        <Headphones size={48} className="text-purple-600" />
                        <h3>Still Need Help?</h3>
                        <p>Our dedicated support team is available to assist you with any questions or issues</p>
                        <div className="cta-btns">
                            <a href="mailto:partners@caresakhi.com" className="btn-primary">
                                Contact Support Team →
                            </a>
                            <Link to="/partner-guide" className="btn-outline">
                                View Partner Guide
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
