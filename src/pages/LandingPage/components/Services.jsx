import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useTime, useSpring } from 'framer-motion';
import { Camera, Utensils, Calendar, Sparkles, ShieldCheck, Users, Lock, ScrollText, Mail, Music, Plane, ClipboardCheck, Gem } from 'lucide-react';
import './Services.css';

export default function Services() {
    const [activeCategory, setActiveCategory] = useState('Photography & Videography'); // Default active
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    // Service Data for Highlight Card
    const serviceDetails = {
        'Photography & Videography': { vendors: 150, price: '₹40,000', label: 'Capture every moment' },
        'Fashion & Jewelry': { vendors: 80, price: 'On Request', label: 'Bridal wear & Accessories' },
        'Catering': { vendors: 200, price: '₹500/plate', label: 'Exquisite culinary delights' },
        'Entertainment & Music': { vendors: 90, price: '₹25,000', label: 'DJs, Bands & Performers' },
        'Horoscope': { vendors: 'AI', price: 'FREE', label: 'Vedic Matchmaking' },
        'Venue': { vendors: 300, price: '₹1,00,000', label: 'Palaces, Halls & Lawns' },
        'Honeymoon Planning': { vendors: 40, price: '₹50,000', label: 'Romantic Getaways' },
        'E-invites': { vendors: 50, price: '₹500', label: 'Eco-friendly & Stylish' },
        'Event Management': { vendors: 70, price: '₹1,00,000', label: 'End-to-end Planning' },
    };

    const currentService = serviceDetails[activeCategory] || serviceDetails['Photography & Videography'];

    // 1. Scroll Progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth out the scroll progress to prevent lag/jerkiness
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });

    // 2. Time for ambient rotation
    const time = useTime();
    
    // Ambient Rotation: Continuous slow rotation
    const ambientRotation = useTransform(time, (t) => t / 100);

    // Scroll Rotation: Map smooth scroll progress to degrees
    const scrollRotation = useTransform(smoothScroll, [0, 1], [-100, 100]);
    
    // Combine rotations
    const totalRotation = useTransform(
        [ambientRotation, scrollRotation],
        ([ambient, scroll]) => ambient + scroll
    );

    // Negative rotation for icons to keep them upright
    const negativeRotation = useTransform(totalRotation, value => -value);

    const categories = [
        { name: 'Photography & Videography', icon: <Camera size={24} /> },
        { name: 'Fashion & Jewelry', icon: <Gem size={24} /> },
        { name: 'Catering', icon: <Utensils size={24} /> },
        { name: 'Entertainment & Music', icon: <Music size={24} /> },
        { name: 'Horoscope', icon: <ScrollText size={24} /> },
        { name: 'Venue', icon: <Calendar size={24} /> },
        { name: 'Honeymoon Planning', icon: <Plane size={24} /> },
        { name: 'E-invites', icon: <Mail size={24} /> },
        { name: 'Event Management', icon: <ClipboardCheck size={24} /> },
    ];

    return (
        <div className="services-container" ref={containerRef} id="services">
            
            {/* BACKGROUND GLOW */}
            <div className="radial-glow"></div>

            {/* LEFT SIDE: CONTEXT & STORY */}
            <div className="services-left">
                <motion.div 
                    className="intro-block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>The Circle of Celebration</h3>
                    <p>
                        Every ritual, every detail, orbits around your happiness. 
                        Explore our curated circle of premium services designed to make your 
                        Shubh Vivah truly auspicious and unforgettable.
                    </p>
                    
                    {/* Cultural SVG Background (Subtle) */}
                    <div className="cultural-bg">
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 0C100 0 120 50 150 50C180 50 200 100 200 100C200 100 150 120 150 150C150 180 100 200 100 200C100 200 80 150 50 150C20 150 0 100 0 100C0 100 50 80 50 50C50 20 100 0 100 0Z" fill="#800000" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* CENTER: RANGOLI (Untouched Logic, just wrapped in grid cell) */}
            <div className="rangoli-grid-cell" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                
                {/* CENTER TEXT (Static) */}
                <div className="center-text">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span>Shubh</span>
                        <h2>Vivah</h2>
                        <p style={{ letterSpacing: '3px', fontSize: '0.8rem', marginTop: '10px', color: '#800000' }}>SERVICES</p>
                    </motion.div>
                </div>

                {/* ROTATING RANGOLI WRAPPER */}
                <motion.div 
                    className="rangoli-wrapper"
                    style={{ rotate: totalRotation }}
                >
                    {/* SVG RANGOLI BACKGROUND */}
                    <svg className="rangoli-svg" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Outer Glow Ring */}
                        <circle cx="300" cy="300" r="280" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                        <circle cx="300" cy="300" r="260" stroke="#D4AF37" strokeWidth="1" strokeDasharray="10 10" />
                        
                        {/* Petals Pattern */}
                        {[...Array(12)].map((_, i) => (
                            <path
                                key={i}
                                d="M300 300 Q 320 200 300 120 Q 280 200 300 300"
                                fill="#FF9933"
                                fillOpacity="0.1"
                                stroke="#800000"
                                strokeWidth="1"
                                transform={`rotate(${i * 30} 300 300)`}
                            />
                        ))}
                        
                        {/* Inner Circles (Breathing) */}
                        <motion.circle 
                            cx="300" cy="300" r="140" 
                            fill="#FFF8E1" 
                            stroke="#D4AF37" 
                            strokeWidth="2"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.circle 
                            cx="300" cy="300" r="120" 
                            stroke="#800000" 
                            strokeWidth="1" 
                            strokeDasharray="5 5"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                        />
                    </svg>

                    {/* SERVICE ICONS */}
                    {categories.map((cat, index) => {
                        const angle = (index * 360) / categories.length;
                        
                        return (
                            <div
                                key={cat.name}
                                className={`service-item ${activeCategory === cat.name ? 'active' : ''}`}
                                style={{
                                    transform: `rotate(${angle}deg) translate(38vmin) rotate(-${angle}deg)`
                                }}
                                onMouseEnter={() => { setIsHovering(true); setActiveCategory(cat.name); }}
                                onMouseLeave={() => { setIsHovering(false); }}
                            >
                                <motion.div 
                                    className="icon-box"
                                    style={{ rotate: negativeRotation }}
                                >
                                    {cat.icon}
                                </motion.div>
                                <motion.div 
                                    className="service-label"
                                    style={{ rotate: negativeRotation }} 
                                >
                                    {cat.name}
                                </motion.div>
                            </div>
                        );
                    })}

                </motion.div>
            </div>

            {/* RIGHT SIDE: INTERACTION & TRUST */}
            <div className="services-right">
                
                {/* Dynamic Highlight Card */}
                <motion.div 
                    className="service-highlight-card"
                    key={activeCategory} // Re-animate on change
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h4>{activeCategory}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{currentService.label}</p>
                    
                    <div className="stat-row">
                        <div className="stat-item">
                            <span className="stat-label">Vendors</span>
                            <span className="stat-value">{currentService.vendors}+</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Starting</span>
                            <span className="stat-value">{currentService.price}</span>
                        </div>
                    </div>
                </motion.div>

                {/* How It Works Micro-Guide */}
                <div className="how-it-works">
                    <motion.div className="step-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <div className="step-number">1</div>
                        <span className="step-text">Hover to explore services</span>
                    </motion.div>
                    <motion.div className="step-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <div className="step-number">2</div>
                        <span className="step-text">Click to view top vendors</span>
                    </motion.div>
                    <motion.div className="step-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                        <div className="step-number">3</div>
                        <span className="step-text">Book your perfect match</span>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <div className="trust-badges">
                    <div className="trust-badge"><ShieldCheck size={16} /> Verified</div>
                    <div className="trust-badge"><Users size={16} /> Trusted</div>
                    <div className="trust-badge"><Lock size={16} /> Secure</div>
                </div>

            </div>

        </div>
    );
}
