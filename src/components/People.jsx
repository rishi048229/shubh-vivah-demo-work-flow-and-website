import React, { useState } from 'react';
import { UserPlus, MessageCircle, MapPin, Briefcase, Check, Filter, Heart, Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PROFILES } from '../data';
import './People.css';

export default function People() {
    const [connectedIds, setConnectedIds] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleConnect = (id) => {
        if (!connectedIds.includes(id)) {
            setConnectedIds([...connectedIds, id]);
        }
    };

    const filters = ['All', 'New', 'Nearby', 'Premium', 'Shortlisted'];

    return (
        <div className="people-page-wrapper">
            {/* HEADER */}
            <header className="people-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover Matches
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Find your perfect companion from our curated community.
                </motion.p>
            </header>

            {/* STICKY FILTER BAR */}
            <div className="sticky-filter-bar">
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
                            className="premium-profile-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* IMAGE SECTION */}
                            <div className="card-image-wrapper">
                                <div className="profile-image" style={{ backgroundImage: `url(${profile.image})` }}></div>
                                <div className="card-overlay"></div>
                                
                                {/* Match Badge */}
                                <div className="match-badge">
                                    <span className="match-score">95%</span> Match
                                </div>

                                {/* Like Button */}
                                <button className="card-action-btn like-btn">
                                    <Heart size={18} />
                                </button>
                            </div>

                            {/* CONTENT SECTION */}
                            <div className="card-content">
                                <div className="profile-main-info">
                                    <h3>{profile.name}, {profile.age}</h3>
                                    <span className="verified-badge"><Check size={12} /> Verified</span>
                                </div>
                                
                                <div className="profile-details">
                                    <p><Briefcase size={14} /> {profile.occupation}</p>
                                    <p><MapPin size={14} /> {profile.location}</p>
                                </div>

                                <div className="profile-tags">
                                    <span>Gujarati</span>
                                    <span>5'6"</span>
                                    <span>Never Married</span>
                                </div>

                                {/* ACTIONS */}
                                <div className="card-actions">
                                    {connectedIds.includes(profile.id) ? (
                                        <button className="action-btn connected">
                                            <Check size={18} /> Request Sent
                                        </button>
                                    ) : (
                                        <button className="action-btn connect" onClick={() => handleConnect(profile.id)}>
                                            <UserPlus size={18} /> Connect
                                        </button>
                                    )}
                                    <button className="action-btn message">
                                        <MessageCircle size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
