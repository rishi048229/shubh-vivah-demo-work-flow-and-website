import React from 'react';
import { Check, Star, Crown, Shield, Gem, Heart, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './Membership.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Membership() {
    const plans = [
        {
            id: 1,
            name: "Silver",
            price: "₹299",
            period: "3 Months",
            icon: <Star size={32} />,
            features: ["Send 20 Messages", "View 50 Contact Numbers", "Basic Profile Highlight"],
            buttonText: "Get Silver",
            recommended: false,
            color: '#E0E0E0' // Soft Silver
        },
        {
            id: 2,
            name: "Gold",
            price: "₹599",
            period: "6 Months",
            icon: <Shield size={32} />,
            features: ["Unlimited Messages", "View 150 Contact Numbers", "Priority Profile Highlight", "Dedicated Relationship Manager"],
            buttonText: "Get Gold",
            recommended: true,
            color: '#FFD700' // Gold
        },
        {
            id: 3,
            name: "Diamond",
            price: "₹999",
            period: "12 Months",
            icon: <Crown size={32} />,
            features: ["Unlimited Everything", "View Unlimited Contacts", "Top Profile Highlight", "Personal Matchmaker", "Background Verification"],
            buttonText: "Get Diamond",
            recommended: false,
            color: '#FF9800' // Saffron
        },
        {
            id: 4,
            name: "Elite Royal",
            price: "₹1,999",
            period: "Lifetime",
            icon: <Gem size={32} />,
            features: ["Lifetime Validity", "Global Profile Reach", "Celebrity Matchmaking", "Wedding Planner Consultation", "Honeymoon Package Deals"],
            buttonText: "Join Elite",
            recommended: false,
            color: '#D4AF37' // Deep Gold
        }
    ];

    return (
        <div className="membership-page">
            {/* SECTION 1: HERO INTRO */}
            <section className="membership-hero">
                <motion.div 
                    className="hero-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>Invest in Your <span className="highlight">Forever</span></motion.h1>
                    <motion.p variants={fadeInUp}>Unlock premium features to find your soulmate faster, safer, and easier.</motion.p>
                </motion.div>
            </section>

            {/* SECTION 2: FREE VS PREMIUM */}
            <section className="comparison-section">
                <motion.div 
                    className="section-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2>Free vs Premium</h2>
                    <div className="comparison-table">
                        <div className="table-row header">
                            <div className="col-feature">Feature</div>
                            <div className="col-free">Free</div>
                            <div className="col-premium">Premium</div>
                        </div>
                        <div className="table-row">
                            <div className="col-feature">Create Profile</div>
                            <div className="col-free"><Check size={20} color="green" /></div>
                            <div className="col-premium"><Check size={20} color="green" /></div>
                        </div>
                        <div className="table-row">
                            <div className="col-feature">Send Messages</div>
                            <div className="col-free text-muted">Limited</div>
                            <div className="col-premium"><Check size={20} color="green" /> Unlimited</div>
                        </div>
                        <div className="table-row">
                            <div className="col-feature">View Contact Numbers</div>
                            <div className="col-free"><Lock size={16} color="#999" /></div>
                            <div className="col-premium"><Check size={20} color="green" /> Instant Access</div>
                        </div>
                        <div className="table-row">
                            <div className="col-feature">Profile Boost</div>
                            <div className="col-free"><Lock size={16} color="#999" /></div>
                            <div className="col-premium"><Check size={20} color="green" /> 10x Visibility</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: VALUE PROPOSITION */}
            <section className="value-props-section">
                <motion.div 
                    className="props-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="prop-card" variants={fadeInUp}>
                        <div className="icon-box"><Heart size={32} color="#E91E63" /></div>
                        <h3>Smart Matchmaking</h3>
                        <p>Our AI algorithm prioritizes your profile to the most compatible matches.</p>
                    </motion.div>
                    <motion.div className="prop-card" variants={fadeInUp}>
                        <div className="icon-box"><Shield size={32} color="#4CAF50" /></div>
                        <h3>Verified Profiles</h3>
                        <p>Access a community of 100% ID-verified users for a safe experience.</p>
                    </motion.div>
                    <motion.div className="prop-card" variants={fadeInUp}>
                        <div className="icon-box"><Users size={32} color="#2196F3" /></div>
                        <h3>Relationship Manager</h3>
                        <p>Get a dedicated expert to shortlist and contact matches on your behalf.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION 4: PLANS GRID */}
            <section className="plans-section" id="plans">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Choose Your Plan
                </motion.h2>
                <div className="plans-container">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            className={`plan-card-premium ${plan.recommended ? 'recommended' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                        >
                            {plan.recommended && <div className="best-value-badge">Best Value</div>}
                            <div className="plan-header" style={{ borderBottom: `4px solid ${plan.color}` }}>
                                <div className="plan-icon-wrapper" style={{ color: plan.color }}>
                                    {plan.icon}
                                </div>
                                <h3>{plan.name}</h3>
                                <div className="price-tag">
                                    <span className="currency">{plan.price}</span>
                                    <span className="duration">/ {plan.period}</span>
                                </div>
                            </div>
                            <div className="plan-body">
                                <ul>
                                    {plan.features.map((feat, i) => (
                                        <li key={i}><Check size={16} color="green" /> {feat}</li>
                                    ))}
                                </ul>
                                <button className="select-plan-btn" style={{ background: plan.recommended ? 'var(--color-kumkum)' : '#333' }}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
