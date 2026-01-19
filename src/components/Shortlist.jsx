import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Search } from "lucide-react";
import { MOCK_PROFILES } from "../data";
import "./Dashboard.css"; // Reuse dashboard styles
import { motion, AnimatePresence } from "framer-motion";

export default function Shortlist() {
    const navigate = useNavigate();
    const [shortlistedProfiles, setShortlistedProfiles] = useState([]);

    useEffect(() => {
        // Load shortlisted IDs
        const savedIds = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        const filtered = MOCK_PROFILES.filter(p => savedIds.includes(p.id));
        setShortlistedProfiles(filtered);
    }, []);

    const handleRemove = (id) => {
        const savedIds = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        const newIds = savedIds.filter(savedId => savedId !== id);
        localStorage.setItem("shortlistedProfiles", JSON.stringify(newIds));

        // Update local state
        setShortlistedProfiles(shortlistedProfiles.filter(p => p.id !== id));
    };

    return (
        <motion.div className="dashboard-container" style={{ paddingLeft: '0' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <main className="results-area" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <header className="results-header">
                    <motion.button 
                        whileHover={{ x: -5 }}
                        className="back-btn" 
                        onClick={() => navigate("/dashboard")} 
                        style={{ marginBottom: '1rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1rem', color: '#666' }}
                    >
                        <ArrowLeft size={18} /> Back to Dashboard
                    </motion.button>
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontFamily: 'var(--font-decorative)', fontSize: '3rem', color: '#D32F2F' }}
                    >
                        <Heart className="text-red-600" fill="#d32f2f" style={{ display: 'inline', marginRight: '10px' }} /> 
                        Shortlisted Matches
                    </motion.h1>
                    <p>{shortlistedProfiles.length} profiles saved</p>
                </header>

                <motion.div layout className="circular-grid">
                    <AnimatePresence>
                        {shortlistedProfiles.map(profile => (
                            <motion.div 
                                key={profile.id} 
                                className="circular-card"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    rotateY: 10, 
                                    rotateX: 10, 
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)" 
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="circular-image" style={{ backgroundImage: `url(${profile.image})` }}>
                                    <div className="hover-details">
                                        <h3>{profile.name}, {profile.age}</h3>
                                        <p>{profile.location}</p>
                                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                                            <button onClick={() => navigate(`/profile/${profile.id}`)}>View</button>
                                            <button onClick={() => handleRemove(profile.id)} style={{ color: '#D32F2F' }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-badge">95% Match</div>
                                
                                <div className="card-content-below" style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{profile.name}</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>{profile.occupation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {shortlistedProfiles.length === 0 && (
                        <motion.div 
                            className="no-results" 
                            style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Heart size={48} color="#ddd" />
                            <h3 style={{ fontFamily: 'var(--font-royal)' }}>No shortlisted profiles yet</h3>
                            <p>Go to the Dashboard and click the heart icon to save profiles here.</p>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/dashboard")} 
                                style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', background: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                            >
                                Browse Matches
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            </main>
        </motion.div>
    );
}