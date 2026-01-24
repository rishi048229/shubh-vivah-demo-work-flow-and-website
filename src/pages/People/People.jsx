import React, { useState, useEffect } from 'react';
import { UserPlus, MessageCircle, MapPin, Briefcase, Check, Filter, Heart, ChevronDown, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PROFILES } from "../../data";
import './People.css';

export default function People() {
    const [connectedIds, setConnectedIds] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showFilterBar, setShowFilterBar] = useState(true);

    // Smart Navbar Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowFilterBar(false); // Hide on scroll down
            } else {
                setShowFilterBar(true); // Show on scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleConnect = (id) => {
        if (!connectedIds.includes(id)) {
            setConnectedIds([...connectedIds, id]);
        }
    };

    const filters = ['All', 'New', 'Nearby', 'Premium', 'Shortlisted', 'Doctors', 'Engineers'];

    return (
        <div className="people-page-wrapper">
            {/* HEADER */}
            <header className="people-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Find Your Perfect Match
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Browse curated profiles with ease.
                </motion.p>
            </header>

            {/* SMART FILTER BAR */}
            <div className={`smart-filter-bar ${showFilterBar ? '' : 'hidden'}`}>
                <div className="filter-container">
                    <div className="filter-scroll">
                        {filters.map(filter => (
                            <button 
                                key={filter}
                                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <button className="advanced-filter-btn">
                        <Filter size={16} /> Filters <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* PROFILES GRID */}
            <div className="people-grid-container">
                <div className="people-grid">
                    {MOCK_PROFILES.map((profile, index) => (
                        <motion.div
                            key={profile.id}
                            className="compact-profile-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            {/* LEFT: AVATAR */}
                            <div className="card-avatar-section">
                                <div className="avatar-wrapper">
                                    <div className="profile-avatar" style={{ backgroundImage: `url(${profile.image})` }}></div>
                                </div>
                                <div className="match-badge-compact">
                                    95%
                                </div>
                            </div>

                            {/* RIGHT: INFO */}
                            <div className="card-info-section">
                                <div className="info-header">
                                    <h3>{profile.name}, {profile.age} <Check size={14} className="verified-icon" /></h3>
                                </div>
                                
                                <div className="info-details">
                                    <p><Briefcase size={12} style={{display:'inline'}} /> {profile.occupation}</p>
                                    <p><MapPin size={12} style={{display:'inline'}} /> {profile.location}</p>
                                </div>

                                <div className="info-tags">
                                    <span className="compact-tag">Gujarati</span>
                                    <span className="compact-tag">5'6"</span>
                                </div>
                            </div>

                            {/* ACTIONS */}
                            <div className="card-actions-compact">
                                <button className="icon-btn like-active">
                                    <Heart size={18} />
                                </button>
                                <button className="icon-btn">
                                    <Eye size={18} />
                                </button>
                                {connectedIds.includes(profile.id) ? (
                                    <button className="icon-btn" style={{color: '#4CAF50'}}>
                                        <Check size={18} />
                                    </button>
                                ) : (
                                    <button className="icon-btn" onClick={() => handleConnect(profile.id)}>
                                        <UserPlus size={18} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
