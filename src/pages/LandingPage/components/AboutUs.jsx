import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Store, ShieldCheck, CalendarHeart, TrendingUp, UserCheck, Smartphone, IndianRupee } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    const points = [
        {
            icon: <Store size={28} />,
            title: "One-Stop Wedding Ecosystem",
            desc: "We provide everything under one roof — from matchmaking to complete wedding planning."
        },
        {
            icon: <Users size={28} />,
            title: "For Singles & Families",
            desc: "We help individuals find their soulmates while supporting families through the entire wedding journey."
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Vendor-Friendly Platform",
            desc: "We empower local wedding vendors by giving them a digital platform to grow and reach the right customers."
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "No Hidden Charges",
            desc: "Transparency is our core value — no hidden fees, no last-minute surprises."
        },
        {
            icon: <CalendarHeart size={28} />,
            title: "Complete Wedding Planning",
            desc: "From matchmaking, kundali matching, vendors, venues, rituals, and celebrations — we manage it all."
        },
        {
            icon: <Heart size={28} />,
            title: "Support for Local Businesses",
            desc: "We actively promote and uplift local vendors, helping them scale their services ethically."
        },
        {
            icon: <UserCheck size={28} />,
            title: "Personalized & Trusted Matches",
            desc: "Matches are curated with care, compatibility, and cultural values in mind."
        },
        {
            icon: <Smartphone size={28} />,
            title: "Tradition + Technology",
            desc: "We blend Indian traditions with modern technology to deliver a seamless, respectful, and secure experience."
        },
        {
            icon: <IndianRupee size={28} />,
            title: "Affordable for All",
            desc: "We offer flexible and low-cost plans to ensure that finding your soulmate is accessible to everyone."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    return (
        <section className="about-us-section">
            <div className="about-us-container">
                
                {/* Header */}
                <motion.div 
                    className="about-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="about-subtitle">Where Traditions Meet Modern Harmony</h4>
                    <h2 className="about-title">About Shubh Vivah</h2>
                    <div className="about-divider"></div>
                </motion.div>

                {/* Intro */}
                <motion.p 
                    className="about-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    At Shubh Vivah, we believe that a wedding is not just a union of two souls but a celebration of families, culture, and lifelong promises. We are dedicated to making this journey seamless, transparent, and memorable for everyone involved.
                </motion.p>

                {/* Grid */}
                <motion.div 
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {points.map((point, index) => (
                        <motion.div 
                            key={index} 
                            className="about-card"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="about-icon-wrapper">
                                {point.icon}
                            </div>
                            <h3 className="about-card-title">{point.title}</h3>
                            <p className="about-card-desc">{point.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default AboutUs;
