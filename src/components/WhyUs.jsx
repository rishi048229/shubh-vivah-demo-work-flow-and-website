import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, HeartHandshake, Users, Lock } from 'lucide-react';
import './WhyUs.css';

const features = [
    {
        icon: <ShieldCheck size={32} />,
        title: 'Verified Profiles',
        description: '100% government ID verified profiles to ensure a safe and trustworthy matchmaking experience.'
    },
    {
        icon: <UserCheck size={32} />,
        title: 'Kundali Matching',
        description: 'Traditional Vedic compatibility checks integrated directly into your partner search.'
    },
    {
        icon: <HeartHandshake size={32} />,
        title: 'Personalized Matches',
        description: 'AI-driven recommendations that respect your family values and personal preferences.'
    },
    {
        icon: <Users size={32} />,
        title: 'Family Oriented',
        description: 'A platform designed for families, fostering serious connections and lifelong bonds.'
    },
    {
        icon: <Lock size={32} />,
        title: 'Privacy First',
        description: 'Your data is secure with us. You control who sees your photos and contact details.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4 // Wait for blast to start
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

import RosePetalBlast from './RosePetalBlast';

const WhyUs = () => {
    return (
        <section className="why-us-section" id="why-us">
            {/* ROSE PETAL BLAST EFFECT */}
            <RosePetalBlast />

            <div className="why-us-container">
                <motion.div 
                    className="why-header"
                    initial={{ opacity: 0, y: 20 }}
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
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="feature-card"
                            variants={itemVariants}
                        >
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
