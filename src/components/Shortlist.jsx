import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin, GraduationCap, Briefcase, ArrowLeft } from "lucide-react";
import { MOCK_PROFILES } from "../data";
import "./Dashboard.css"; // Reuse dashboard styles

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
        <div className="dashboard-container" style={{ paddingLeft: '0' }}>
            {/* Reuse dashboard container but remove sidebar spacing if reusing css that expects sidebar */}

            <main className="results-area" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <header className="results-header">
                    <button className="back-btn" onClick={() => navigate("/dashboard")} style={{ marginBottom: '1rem', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1rem', color: '#666' }}>
                        <ArrowLeft size={18} /> Back to Dashboard
                    </button>
                    <h1><Heart className="text-red-600" fill="#d32f2f" /> Shortlisted Matches</h1>
                    <p>{shortlistedProfiles.length} profiles saved</p>
                </header>

                <div className="profiles-grid">
                    {shortlistedProfiles.map(profile => (
                        <div key={profile.id} className="profile-card">
                            <div className="profile-image" style={{ backgroundImage: `url(${profile.image})` }}></div>
                            <div className="profile-info">
                                <h3>{profile.name}, {profile.age}</h3>
                                <p className="profile-detail"><MapPin size={14} /> {profile.location}</p>
                                <p className="profile-detail"><GraduationCap size={14} /> {profile.education}</p>
                                <p className="profile-detail"><Briefcase size={14} /> {profile.occupation}</p>

                                <div className="tags">
                                    <span>{profile.height}</span>
                                    <span>{profile.family} Family</span>
                                </div>

                                <div className="card-actions">
                                    <button
                                        className="connect-btn"
                                        onClick={() => navigate(`/profile/${profile.id}`)}
                                    >
                                        View Profile
                                    </button>
                                    <button
                                        className="shortlist-btn"
                                        onClick={() => handleRemove(profile.id)}
                                        style={{ background: '#ffebee', borderColor: '#d32f2f' }}
                                    >
                                        <Heart size={20} fill="#d32f2f" color="#d32f2f" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {shortlistedProfiles.length === 0 && (
                        <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
                            <Heart size={48} color="#ddd" />
                            <h3>No shortlisted profiles yet</h3>
                            <p>Go to the Dashboard and click the heart icon to save profiles here.</p>
                            <button onClick={() => navigate("/dashboard")} style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', background: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                Browse Matches
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
