import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, HeartHandshake, Users, Lock } from 'lucide-react';
import './WhyUs.css';

const features = [
    {
        icon: <ShieldCheck size={28} />,
        title: 'Verified Profiles',
        subtitle: 'Trusted',
        description: '100% government ID verified profiles to ensure a safe and trustworthy matchmaking experience.',
        ctaText: 'Learn More'
    },
    {
        icon: <UserCheck size={28} />,
        title: 'Kundali Matching',
        subtitle: 'Vedic',
        description: 'Traditional Vedic compatibility checks integrated directly into your partner search.',
        ctaText: 'Check Now'
    },
    {
        icon: <HeartHandshake size={28} />,
        title: 'Personalized Matches',
        subtitle: 'AI Powered',
        description: 'AI-driven recommendations that respect your family values and personal preferences.',
        ctaText: 'Find Match'
    },
    {
        icon: <Users size={28} />,
        title: 'Family Oriented',
        subtitle: 'Community',
        description: 'A platform designed for families, fostering serious connections and lifelong bonds.',
        ctaText: 'Join Us'
    },
    {
        icon: <Lock size={28} />,
        title: 'Privacy First',
        subtitle: 'Secure',
        description: 'Your data is secure with us. You control who sees your photos and contact details.',
        ctaText: 'View Policy'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

import RosePetalBlast from './RosePetalBlast';
import { ArrowRight, MessageCircle, Bell } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="why-us-section" id="why-us">
            {/* ROSE PETAL BLAST EFFECT */}
            <RosePetalBlast />
            
            {/* Background Elements for Depth */}
            <div className="why-us-bg-blob blob-1"></div>
            <div className="why-us-bg-blob blob-2"></div>

            <div className="why-us-container">
                <motion.div 
                    className="why-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2>Why Choose Shubh Vivah?</h2>
                    <p>Building trust through tradition, technology, and transparency.</p>
                </motion.div>

                <motion.div 
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="glass-card"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="glass-card-content">
                                <div className="card-header">
                                    <div className="icon-wrapper-glass">
                                        {feature.icon}
                                    </div>
                                    <span className="card-badge">{feature.subtitle}</span>
                                </div>
                                
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                
                                <div className="card-actions">
                                    <button className="primary-glass-btn">
                                        {feature.ctaText} <ArrowRight size={16} />
                                    </button>
                                    <div className="secondary-actions">
                                        <button className="icon-glass-btn"><MessageCircle size={18} /></button>
                                        <button className="icon-glass-btn"><Bell size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
