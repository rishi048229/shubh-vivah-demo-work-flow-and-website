import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Heart, MapPin, GraduationCap, Briefcase, Check, Star, User, ChevronRight, ChevronLeft, X, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PROFILES } from "../../data";
import "./Dashboard.css";

// --- MATCH SCORE LOGIC (MOCK) ---
const calculateMatchScore = (profile) => {
    // In a real app, this would compare user preferences with profile data
    // For demo, we generate a consistent random-ish score based on ID
    const baseScore = 60;
    const randomFactor = (profile.id * 7) % 35; 
    const score = baseScore + randomFactor;
    
    const reasons = [];
    if (score > 80) reasons.push({ icon: <Star size={14} />, text: "High Compatibility" });
    if (profile.location.includes("Mumbai") || profile.location.includes("Pune")) reasons.push({ icon: <MapPin size={14} />, text: "Preferred Location" });
    if (profile.religion === "Hindu") reasons.push({ icon: <Check size={14} />, text: "Same Religion" });
    
    return { score, reasons };
};

// --- MATCH CARD COMPONENT ---
const MatchCard = ({ profile, onShortlist, isShortlisted }) => {
    const { score, reasons } = calculateMatchScore(profile);
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <motion.div 
            className="match-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="card-header">
                <div className="profile-img-wrapper">
                    <img src={profile.image} alt={profile.name} />
                </div>
                
                {/* Animated Score Ring */}
                <div className="match-score-wrapper">
                    <svg className="score-svg" width="70" height="70">
                        <circle
                            className="score-circle-bg"
                            strokeWidth="5"
                            fill="transparent"
                            r={radius}
                            cx="35"
                            cy="35"
                        />
                        <motion.circle
                            className="score-circle-fg"
                            strokeWidth="5"
                            fill="transparent"
                            r={radius}
                            cx="35"
                            cy="35"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <span className="score-text">{score}%</span>
                </div>
            </div>

            <div className="card-content">
                <h3>{profile.name}</h3>
                <div className="location">
                    <MapPin size={14} /> {profile.location}
                </div>

                {/* Intelligent Insights Tooltip */}
                <div className="match-reasons">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="reason-tag">
                            {reason.icon} {reason.text}
                        </div>
                    ))}
                </div>

                <div className="card-details">
                    <div className="detail-item"><Briefcase /> {profile.occupation}</div>
                    <div className="detail-item"><GraduationCap /> {profile.education}</div>
                    <div className="detail-item"><User /> {profile.age} Yrs, {profile.height}</div>
                </div>

                <div className="card-actions">
                    <button 
                        className={`action-btn ${isShortlisted ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => onShortlist(profile.id)}
                    >
                        <Heart size={18} fill={isShortlisted ? "white" : "none"} />
                        {isShortlisted ? "Shortlisted" : "Shortlist"}
                    </button>
                    <button className="action-btn btn-primary">
                        Connect
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN DASHBOARD COMPONENT ---
export default function Dashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("best");
    const [shortlisted, setShortlisted] = useState([]);
    const [showWizard, setShowWizard] = useState(false);
    
    // Wizard State
    const [wizardStep, setWizardStep] = useState(0);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        setShortlisted(saved);
    }, []);

    const toggleShortlist = (id) => {
        let newShortlist;
        if (shortlisted.includes(id)) {
            newShortlist = shortlisted.filter(sid => sid !== id);
        } else {
            newShortlist = [...shortlisted, id];
        }
        setShortlisted(newShortlist);
        localStorage.setItem("shortlistedProfiles", JSON.stringify(newShortlist));
    };

    // Filter Logic (Simplified for Demo)
    const getFilteredProfiles = () => {
        let profiles = [...MOCK_PROFILES];
        if (activeTab === "nearby") {
            profiles = profiles.filter(p => p.location.includes("Mumbai") || p.location.includes("Pune"));
        } else if (activeTab === "new") {
            profiles = profiles.slice(0, 3); // Just show first 3 as "new"
        }
        // "best" shows all sorted by score (mocked by ID for stability)
        return profiles;
    };

    const wizardSteps = [
        { id: 'age', question: "What age range are you looking for?", type: 'range' },
        { id: 'location', question: "Preferred Location?", type: 'select', options: ["Mumbai", "Pune", "Delhi", "Bangalore"] },
        { id: 'religion', question: "Religion?", type: 'select', options: ["Hindu", "Muslim", "Sikh", "Christian"] },
    ];

    const handleWizardNext = () => {
        if (wizardStep < wizardSteps.length - 1) {
            setWizardStep(wizardStep + 1);
        } else {
            setShowWizard(false);
            setWizardStep(0);
            // Apply filters logic here
        }
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
                
                {/* HEADER */}
                <header className="dashboard-header">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Your Perfect Matches
                    </motion.h1>
                    <p style={{ color: '#666' }}>Based on your preferences and family values.</p>

                    {/* TABS */}
                    <div className="match-tabs">
                        {['Best Matches', 'New Profiles', 'Nearby', 'Shortlisted'].map((tab) => {
                            const key = tab.split(' ')[0].toLowerCase();
                            return (
                                <button 
                                    key={key}
                                    className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                        <button className="tab-btn" onClick={() => setShowWizard(true)}>
                            <Filter size={16} /> Filters
                        </button>
                    </div>
                </header>

                {/* KUNDALI MATCHING CARD */}
                <motion.div 
                    className="kundali-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="kundali-bg-pattern"></div>
                    <div className="kundali-content">
                        <div className="kundali-header">
                            <h2><Star size={24} className="spin-slow" /> Vedic Kundali Matching</h2>
                            <p>Upload your horoscope to find scientifically compatible matches.</p>
                        </div>
                        
                        <div className="kundali-actions">
                            <button className="upload-btn">
                                <Upload size={18} /> Upload Kundali
                            </button>
                            <div className="match-score-preview">
                                <div className="score-ring-mini">
                                    <svg width="40" height="40">
                                        <circle cx="20" cy="20" r="18" stroke="#eee" strokeWidth="3" fill="none" />
                                        <motion.circle 
                                            cx="20" cy="20" r="18" 
                                            stroke="var(--dash-gold)" 
                                            strokeWidth="3" 
                                            fill="none" 
                                            strokeDasharray="113"
                                            initial={{ strokeDashoffset: 113 }}
                                            animate={{ strokeDashoffset: 20 }}
                                            transition={{ duration: 2 }}
                                        />
                                    </svg>
                                    <span>32/36</span>
                                </div>
                                <span>Gunas Matched</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* MATCH GRID */}
                <motion.div 
                    className="match-grid"
                    layout
                >
                    <AnimatePresence>
                        {getFilteredProfiles().map((profile) => (
                            <MatchCard 
                                key={profile.id} 
                                profile={profile} 
                                onShortlist={toggleShortlist}
                                isShortlisted={shortlisted.includes(profile.id)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* FILTER WIZARD OVERLAY */}
                <AnimatePresence>
                    {showWizard && (
                        <motion.div 
                            className="wizard-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div 
                                className="wizard-card"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <button className="close-wizard" onClick={() => setShowWizard(false)}><X /></button>
                                
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill" 
                                        style={{ width: `${((wizardStep + 1) / wizardSteps.length) * 100}%` }}
                                    ></div>
                                </div>

                                <h2>{wizardSteps[wizardStep].question}</h2>
                                
                                <div className="wizard-options">
                                    {wizardSteps[wizardStep].options?.map((opt) => (
                                        <button key={opt} className="wizard-btn" onClick={handleWizardNext}>
                                            {opt}
                                        </button>
                                    ))}
                                    {wizardSteps[wizardStep].type === 'range' && (
                                        <button className="wizard-btn active" onClick={handleWizardNext}>21 - 35 Years</button>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
