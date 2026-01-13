import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    MapPin, Briefcase, GraduationCap, Ruler, Heart, ArrowLeft, Mail, Phone, Users
} from "lucide-react";
import "./ProfileDetails.css";
import { MOCK_PROFILES } from "../data";

export default function ProfileDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [isShortlisted, setIsShortlisted] = useState(false);

    useEffect(() => {
        // Find profile
        const found = MOCK_PROFILES.find(p => p.id === parseInt(id));
        setProfile(found);

        // Check isShortlisted
        const savedIds = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        if (found) setIsShortlisted(savedIds.includes(found.id));
    }, [id]);

    const toggleShortlist = () => {
        const savedIds = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        let newIds;

        if (isShortlisted) {
            newIds = savedIds.filter(sid => sid !== profile.id);
            setIsShortlisted(false);
        } else {
            newIds = [...savedIds, profile.id];
            setIsShortlisted(true);
        }
        localStorage.setItem("shortlistedProfiles", JSON.stringify(newIds));
    };

    if (!profile) return <div className="loading">Loading...</div>;

    return (
        <div className="profile-details-container" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1544819667-977a71e8f2e2?q=80&w=2070&auto=format&fit=crop)`, // Consistent Wedding Theme
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
        }}>
            <div className="profile-details-overlay" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                minHeight: '100vh',
                padding: '2rem'
            }}>
                <button className="back-btn" onClick={() => navigate("/dashboard")} style={{ margin: '0 0 20px 50px', padding: '10px 20px', background: 'transparent', border: '1px solid #ddd', borderRadius: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <ArrowLeft size={16} /> Back to Matches
                </button>

                {/* HERO SECTION */}
                <div className="profile-header-card">
                    <div className="profile-hero-image" style={{ backgroundImage: `url(${profile.image})` }}></div>
                    <div className="profile-hero-info">
                        <h1>{profile.name}</h1>
                        <div className="location">
                            <MapPin size={18} /> {profile.location}
                        </div>

                        <div className="quick-stats">
                            <div className="stat-item"><Briefcase size={16} /> {profile.occupation}</div>
                            <div className="stat-item"><GraduationCap size={16} /> {profile.education}</div>
                            <div className="stat-item"><Ruler size={16} /> {profile.height}</div>
                        </div>

                        <div className="action-buttons">
                            <button className="connect-action-btn" onClick={() => alert("Interest Sent Successfully!")}>
                                Connect Now <Mail size={16} />
                            </button>
                            <button
                                className="shortlist-action-btn"
                                onClick={toggleShortlist}
                                style={{ borderColor: isShortlisted ? '#d32f2f' : '#ddd' }}
                            >
                                <Heart size={20} fill={isShortlisted ? "#d32f2f" : "none"} color={isShortlisted ? "#d32f2f" : "#666"} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* DETAILS GRID */}
                <div className="profile-info-grid">

                    {/* LEFT COL: BIO & PERSONAL */}
                    <div className="main-info">
                        <section className="info-section">
                            <h3>About {profile.name.split(" ")[0]}</h3>
                            <p className="bio-text">{profile.bio}</p>
                        </section>

                        <section className="info-section">
                            <h3>Basic Details</h3>
                            <div className="info-row"><div className="info-label">Age</div><div className="info-value">{profile.age} Years</div></div>
                            <div className="info-row"><div className="info-label">Marital Status</div><div className="info-value">{profile.maritalStatus || "Never Married"}</div></div>
                            <div className="info-row"><div className="info-label">Mother Tongue</div><div className="info-value">{profile.motherTongue || "Hindi"}</div></div>
                            <div className="info-row"><div className="info-label">Religion</div><div className="info-value">{profile.religion}</div></div>
                            <div className="info-row"><div className="info-label">Caste</div><div className="info-value">{profile.caste}</div></div>
                            <div className="info-row"><div className="info-label">Height</div><div className="info-value">{profile.height}</div></div>
                        </section>

                        <section className="info-section">
                            <h3>Lifestyle & Interests</h3>
                            <div className="info-row"><div className="info-label">Diet</div><div className="info-value">{profile.diet || "Veg"}</div></div>
                            <div className="info-row"><div className="info-label">Drink</div><div className="info-value">{profile.drink || "No"}</div></div>
                            <div className="info-row"><div className="info-label">Smoke</div><div className="info-value">{profile.smoke || "No"}</div></div>
                        </section>

                        <section className="info-section">
                            <h3>Education & Career</h3>
                            <div className="info-row"><div className="info-label">Degree</div><div className="info-value">{profile.education}</div></div>
                            <div className="info-row"><div className="info-label">Occupation</div><div className="info-value">{profile.occupation}</div></div>
                            <div className="info-row"><div className="info-label">Annual Income</div><div className="info-value">{profile.income}</div></div>
                        </section>
                    </div>

                    {/* RIGHT COL: FAMILY SIDEBAR */}
                    <div className="sidebar-info">
                        <section className="info-section">
                            <h3>Family Details</h3>
                            <div className="info-row" style={{ flexDirection: 'column', gap: '5px' }}>
                                <div className="info-label" style={{ width: 'auto', marginBottom: '5px' }}>Family Type</div>
                                <div className="info-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Users size={16} color="#d32f2f" /> {profile.family}
                                </div>
                            </div>
                            <br />
                            <div className="info-row"><div className="info-label">Father</div><div className="info-value">Businessman</div></div>
                            <div className="info-row"><div className="info-label">Mother</div><div className="info-value">Homemaker</div></div>
                            <div className="info-row"><div className="info-label">Siblings</div><div className="info-value">1 Brother</div></div>
                        </section>

                        <section className="info-section" style={{ background: '#fef2f2' }}>
                            <h3>Contact Info</h3>
                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                                Upgrade to Premium to view contact details.
                            </div>
                            <button style={{ width: '100%', padding: '10px', background: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                View Plans
                            </button>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}
