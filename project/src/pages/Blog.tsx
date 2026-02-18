import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Leaf, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const featuredPost = {
        title: 'The Future of Sustainable Menstrual Health in India',
        excerpt: 'How CareSakhi is revolutionizing the menstrual health supply chain with technology and sustainability at its core.',
        author: 'Shubham Goyal',
        date: 'Feb 15, 2026',
        readTime: '8 min read',
        category: 'Industry Insights',
        image: 'https://images.pexels.com/photos/6942070/pexels-photo-6942070.jpeg?auto=compress&cs=tinysrgb&w=800'
    };

    const posts = [
        {
            title: 'How to Build a Profitable Pharmacy Business with Sustainable Products',
            excerpt: 'Learn the strategies that helped 500+ pharmacies increase their revenue by 40% with eco-friendly menstrual products.',
            author: 'Priya Sharma',
            date: 'Feb 12, 2026',
            readTime: '6 min read',
            category: 'Business Tips',
            icon: TrendingUp,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Understanding the EcoCoin Rewards System: A Complete Guide',
            excerpt: 'Maximize your earnings with our comprehensive guide to the EcoCoin rewards program.',
            author: 'Rajesh Kumar',
            date: 'Feb 10, 2026',
            readTime: '5 min read',
            category: 'Rewards',
            icon: Lightbulb,
            color: 'from-amber-500 to-orange-500'
        },
        {
            title: 'Success Story: How Mumbai Distributor Scaled to 50+ Pharmacies',
            excerpt: 'Meet Anjali, who built a thriving distribution network in just 6 months using CareSakhi platform.',
            author: 'CareSakhi Team',
            date: 'Feb 8, 2026',
            readTime: '7 min read',
            category: 'Success Stories',
            icon: Users,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'The Environmental Impact of Switching to Reusable Menstrual Products',
            excerpt: 'Data-driven insights on how our partner network is reducing plastic waste across India.',
            author: 'Dr. Meera Patel',
            date: 'Feb 5, 2026',
            readTime: '10 min read',
            category: 'Sustainability',
            icon: Leaf,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            title: '10 Tips for Effective Inventory Management in Menstrual Health Products',
            excerpt: 'Optimize your stock levels and reduce waste with these proven inventory management strategies.',
            author: 'Vikram Singh',
            date: 'Feb 3, 2026',
            readTime: '8 min read',
            category: 'Operations',
            icon: TrendingUp,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Customer Education: Breaking Taboos Around Menstrual Health',
            excerpt: 'How to have meaningful conversations with customers about sustainable menstrual products.',
            author: 'Neha Gupta',
            date: 'Feb 1, 2026',
            readTime: '6 min read',
            category: 'Education',
            icon: Users,
            color: 'from-pink-500 to-rose-500'
        }
    ];

    const categories = [
        'All Posts',
        'Business Tips',
        'Success Stories',
        'Sustainability',
        'Rewards',
        'Operations',
        'Industry Insights'
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
                            Partner <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="page-subtitle">
                            Insights, tips, and success stories from the CareSakhi partner community.
                            Stay updated with the latest in sustainable menstrual health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="page-section">
                <div className="container">
                    <div className="blog-categories">
                        {categories.map((category, i) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`category-pill ${i === 0 ? 'active' : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="page-section bg-cream">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="featured-post"
                    >
                        <div className="featured-post-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <span className="featured-badge">Featured</span>
                        </div>
                        <div className="featured-post-content">
                            <span className="post-category">{featuredPost.category}</span>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="post-meta">
                                <div className="post-meta-item">
                                    <User size={16} />
                                    <span>{featuredPost.author}</span>
                                </div>
                                <div className="post-meta-item">
                                    <Calendar size={16} />
                                    <span>{featuredPost.date}</span>
                                </div>
                                <div className="post-meta-item">
                                    <Clock size={16} />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                            </div>
                            <button className="btn-primary">Read Article →</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="page-section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '48px' }}>
                        Latest <span className="gradient-text">Articles</span>
                    </h2>
                    <div className="blog-grid">
                        {posts.map((post, i) => {
                            const Icon = post.icon;
                            return (
                                <motion.div
                                    key={post.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="blog-card"
                                    whileHover={{ y: -8 }}
                                >
                                    <div className={`blog-card-icon bg-gradient-to-br ${post.color}`}>
                                        <Icon size={24} color="white" />
                                    </div>
                                    <span className="post-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-meta">
                                        <div className="post-meta-item">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="post-meta-item">
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <div className="post-meta-item">
                                        <Clock size={14} />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <button className="blog-read-more">
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="page-section bg-cream">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="newsletter-cta"
                    >
                        <h3>Stay Updated with Partner Insights</h3>
                        <p>Get the latest tips, success stories, and industry news delivered to your inbox</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button className="btn-primary">Subscribe →</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
