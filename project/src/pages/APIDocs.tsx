import { motion } from 'framer-motion';
import { Code, Terminal, Book, Key, Zap, Shield, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function APIDocs() {
    const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

    const features = [
        {
            icon: Zap,
            title: 'RESTful API',
            desc: 'Simple, predictable REST endpoints',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Shield,
            title: 'Secure Authentication',
            desc: 'OAuth 2.0 and API key support',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Terminal,
            title: 'Webhooks',
            desc: 'Real-time event notifications',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            icon: Book,
            title: 'Comprehensive Docs',
            desc: 'Detailed guides and examples',
            color: 'from-amber-500 to-orange-500'
        }
    ];

    const endpoints = [
        {
            category: 'Authentication',
            color: 'text-purple-600',
            apis: [
                { method: 'POST', path: '/api/v1/auth/login', desc: 'Authenticate and get access token' },
                { method: 'POST', path: '/api/v1/auth/refresh', desc: 'Refresh expired access token' },
                { method: 'POST', path: '/api/v1/auth/logout', desc: 'Invalidate current session' }
            ]
        },
        {
            category: 'Orders',
            color: 'text-blue-600',
            apis: [
                { method: 'GET', path: '/api/v1/orders', desc: 'List all orders' },
                { method: 'GET', path: '/api/v1/orders/:id', desc: 'Get order details' },
                { method: 'POST', path: '/api/v1/orders', desc: 'Create new order' },
                { method: 'PATCH', path: '/api/v1/orders/:id', desc: 'Update order status' },
                { method: 'DELETE', path: '/api/v1/orders/:id', desc: 'Cancel order' }
            ]
        },
        {
            category: 'Products',
            color: 'text-emerald-600',
            apis: [
                { method: 'GET', path: '/api/v1/products', desc: 'List all products' },
                { method: 'GET', path: '/api/v1/products/:id', desc: 'Get product details' },
                { method: 'GET', path: '/api/v1/products/search', desc: 'Search products' }
            ]
        },
        {
            category: 'EcoCoins',
            color: 'text-amber-600',
            apis: [
                { method: 'GET', path: '/api/v1/ecocoins/balance', desc: 'Get current balance' },
                { method: 'GET', path: '/api/v1/ecocoins/transactions', desc: 'List transactions' },
                { method: 'POST', path: '/api/v1/ecocoins/redeem', desc: 'Redeem coins' }
            ]
        },
        {
            category: 'Partner Profile',
            color: 'text-pink-600',
            apis: [
                { method: 'GET', path: '/api/v1/partner/profile', desc: 'Get partner profile' },
                { method: 'PATCH', path: '/api/v1/partner/profile', desc: 'Update profile' },
                { method: 'GET', path: '/api/v1/partner/stats', desc: 'Get performance stats' }
            ]
        }
    ];

    const codeExample = `// Initialize CareSakhi API Client
const CareSakhi = require('@caresakhi/api-client');

const client = new CareSakhi({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Fetch orders
async function getOrders() {
  try {
    const orders = await client.orders.list({
      status: 'pending',
      limit: 10
    });
    
    console.log('Orders:', orders);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Create new order
async function createOrder() {
  const order = await client.orders.create({
    products: [
      { id: 'prod_123', quantity: 10 },
      { id: 'prod_456', quantity: 5 }
    ],
    delivery_address: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001'
    }
  });
  
  return order;
}`;

    const copyToClipboard = (text: string, endpoint: string) => {
        navigator.clipboard.writeText(text);
        setCopiedEndpoint(endpoint);
        setTimeout(() => setCopiedEndpoint(null), 2000);
    };

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
                            API <span className="gradient-text">Documentation</span>
                        </h1>
                        <p className="page-subtitle">
                            Build powerful integrations with the CareSakhi Partner API. Access orders, products,
                            EcoCoins, and more programmatically.
                        </p>
                        <div className="api-version-badge">
                            <Code size={16} />
                            <span>API Version 1.0</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="page-section">
                <div className="container">
                    <div className="api-features-grid">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="api-feature-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`api-feature-icon bg-gradient-to-br ${feature.color}`}>
                                        <Icon size={24} color="white" />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="page-section bg-cream">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>
                            Getting <span className="gradient-text">Started</span>
                        </h2>
                        
                        <div className="api-getting-started">
                            <div className="api-step">
                                <div className="api-step-number">1</div>
                                <div className="api-step-content">
                                    <h3>Get Your API Key</h3>
                                    <p>Generate your API key from the partner dashboard under Settings → API Access</p>
                                    <button className="btn-outline">
                                        <Key size={16} />
                                        Generate API Key
                                    </button>
                                </div>
                            </div>

                            <div className="api-step">
                                <div className="api-step-number">2</div>
                                <div className="api-step-content">
                                    <h3>Install SDK</h3>
                                    <p>Install our official SDK for your preferred language</p>
                                    <div className="code-block">
                                        <code>npm install @caresakhi/api-client</code>
                                        <button
                                            className="copy-btn"
                                            onClick={() => copyToClipboard('npm install @caresakhi/api-client', 'npm')}
                                        >
                                            {copiedEndpoint === 'npm' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="api-step">
                                <div className="api-step-number">3</div>
                                <div className="api-step-content">
                                    <h3>Make Your First Request</h3>
                                    <p>Start building with our comprehensive API</p>
                                    <div className="code-block-large">
                                        <pre><code>{codeExample}</code></pre>
                                        <button
                                            className="copy-btn"
                                            onClick={() => copyToClipboard(codeExample, 'code')}
                                        >
                                            {copiedEndpoint === 'code' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="page-section">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '48px', textAlign: 'center' }}>
                        API <span className="gradient-text">Endpoints</span>
                    </h2>
                    <div className="api-endpoints">
                        {endpoints.map((endpoint, i) => (
                            <motion.div
                                key={endpoint.category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="api-endpoint-category"
                            >
                                <h3 className={endpoint.color}>{endpoint.category}</h3>
                                <div className="api-endpoint-list">
                                    {endpoint.apis.map((api) => (
                                        <div key={api.path} className="api-endpoint-item">
                                            <span className={`api-method method-${api.method.toLowerCase()}`}>
                                                {api.method}
                                            </span>
                                            <code className="api-path">{api.path}</code>
                                            <span className="api-desc">{api.desc}</span>
                                            <button
                                                className="api-try-btn"
                                                onClick={() => copyToClipboard(api.path, api.path)}
                                            >
                                                {copiedEndpoint === api.path ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="page-section bg-cream">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="api-resources"
                    >
                        <h3>Additional Resources</h3>
                        <div className="api-resources-grid">
                            <div className="api-resource-card">
                                <Book size={24} className="text-purple-600" />
                                <h4>API Reference</h4>
                                <p>Complete API reference documentation</p>
                                <button className="btn-outline">View Docs →</button>
                            </div>
                            <div className="api-resource-card">
                                <Terminal size={24} className="text-blue-600" />
                                <h4>Postman Collection</h4>
                                <p>Import our Postman collection</p>
                                <button className="btn-outline">Download →</button>
                            </div>
                            <div className="api-resource-card">
                                <Code size={24} className="text-emerald-600" />
                                <h4>Code Examples</h4>
                                <p>Sample code in multiple languages</p>
                                <button className="btn-outline">Browse →</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="page-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="page-cta"
                    >
                        <h3>Need API Support?</h3>
                        <p>Our developer support team is here to help you integrate successfully</p>
                        <div className="cta-btns">
                            <a href="mailto:api@caresakhi.com" className="btn-primary">
                                Contact API Support →
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
