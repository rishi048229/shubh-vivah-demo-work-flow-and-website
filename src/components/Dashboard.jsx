import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Search, MapPin, Briefcase, GraduationCap, Users, Ruler, Heart, Star, UserCircle2, Filter, LayoutGrid, List
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Dashboard.css";
import { MOCK_PROFILES } from "../data";

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");
    const [shortlistedIds, setShortlistedIds] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

    // Filters State
    const [filters, setFilters] = useState({
        minAge: 18,
        maxAge: 40,
        education: "",
        occupation: "",
        familyType: "",
        location: "",
        minHeight: "",
        religion: "",
        caste: "",
        maritalStatus: "",
        income: "",
        motherTongue: "",
        diet: "",
        drink: "",
        smoke: ""
    });

    useEffect(() => {
        const savedShortlist = JSON.parse(localStorage.getItem("shortlistedProfiles") || "[]");
        setShortlistedIds(savedShortlist);

        const user = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(user);
    }, []);

    const toggleShortlist = (id) => {
        let newIds;
        if (shortlistedIds.includes(id)) {
            newIds = shortlistedIds.filter(sid => sid !== id);
        } else {
            newIds = [...shortlistedIds, id];
        }
        setShortlistedIds(newIds);
        localStorage.setItem("shortlistedProfiles", JSON.stringify(newIds));
    };

    // Filter Logic
    const filteredProfiles = MOCK_PROFILES.filter(profile => {
        if (profile.age < filters.minAge || profile.age > filters.maxAge) return false;

        // Text/Select Filters (Case insensitive check for string matches)
        const checkMatch = (filterVal, profileVal) => {
            if (!filterVal) return true;
            if (!profileVal) return false;
            return profileVal.toLowerCase().includes(filterVal.toLowerCase());
        };

        if (filters.familyType && profile.family !== filters.familyType) return false;
        if (filters.maritalStatus && profile.maritalStatus !== filters.maritalStatus) return false;
        if (!checkMatch(filters.location, profile.location)) return false;
        if (!checkMatch(filters.education, profile.education)) return false;
        if (!checkMatch(filters.occupation, profile.occupation)) return false;
        if (filters.religion && profile.religion !== filters.religion) return false;
        if (filters.caste && profile.caste !== filters.caste) return false;
        if (filters.income && profile.income !== filters.income) return false;

        // New Filters
        if (filters.motherTongue && profile.motherTongue !== filters.motherTongue) return false;
        if (filters.diet && profile.diet !== filters.diet) return false;
        if (filters.drink && profile.drink !== filters.drink) return false;
        if (filters.smoke && profile.smoke !== filters.smoke) return false;

        return true;
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="dashboard-wrapper" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80)`, // Wedding-specific background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            paddingTop: '80px'
        }} data-aos="fade-in">
            <div className="dashboard-overlay" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                minHeight: '100vh',
                backdropFilter: 'blur(5px)'
            }}>
                <div className="dashboard-container">
                    {/* SIDEBAR FILTERS */}
                    <aside className="filters-sidebar" data-aos="fade-right">

                        {/* --- MINI PROFILE SECTION --- */}
                        {currentUser && (
                            <div className="mini-profile-card">
                                <div className="mini-avatar">
                                    {currentUser.image ?
                                        <img src={currentUser.image} alt="Me" /> :
                                        <UserCircle2 size={40} color="#888" />
                                    }
                                </div>
                                <div className="mini-info">
                                    <h4>{currentUser.name || "Guest User"}</h4>
                                    <p onClick={() => navigate("/my-profile")}>Edit Profile</p>
                                </div>
                            </div>
                        )}

                        <div className="sidebar-header">
                            <h2 className="filter-heading"><Filter size={20} /> Filters</h2>
                            <span className="reset-link" onClick={() => setFilters({ minAge: 18, maxAge: 60, education: "", occupation: "", familyType: "", location: "", minHeight: "", religion: "", caste: "", maritalStatus: "", income: "", motherTongue: "", diet: "", drink: "", smoke: "" })}>Reset</span>
                        </div>

                        {/* Advanced Filters */}
                        <div className="filter-group">
                            <label>Age Range</label>
                            <div className="range-inputs">
                                <input type="number" name="minAge" value={filters.minAge} onChange={handleFilterChange} min="18" placeholder="Min" />
                                <span>-</span>
                                <input type="number" name="maxAge" value={filters.maxAge} onChange={handleFilterChange} max="60" placeholder="Max" />
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Marital Status</label>
                            <select name="maritalStatus" onChange={handleFilterChange} value={filters.maritalStatus}>
                                <option value="">Any</option>
                                <option value="Never Married">Never Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Awaiting Divorce">Awaiting Divorce</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Location</label>
                            <div className="input-icon-wrapper">
                                <MapPin size={16} />
                                <input type="text" name="location" value={filters.location} placeholder="City, State" onChange={handleFilterChange} />
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Religion</label>
                            <select name="religion" onChange={handleFilterChange} value={filters.religion}>
                                <option value="">Any</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Christian">Christian</option>
                                <option value="Sikh">Sikh</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Annual Income</label>
                            <select name="income" onChange={handleFilterChange} value={filters.income}>
                                <option value="">Any</option>
                                <option value="0-5 LPA">0-5 LPA</option>
                                <option value="5-10 LPA">5-10 LPA</option>
                                <option value="10-20 LPA">10-20 LPA</option>
                                <option value="20+ LPA">20+ LPA</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Education</label>
                            <div className="input-icon-wrapper">
                                <GraduationCap size={16} />
                                <select name="education" onChange={handleFilterChange} value={filters.education}>
                                    <option value="">Any</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MBBS">MBBS</option>
                                    <option value="Ph.D">Ph.D</option>
                                    <option value="M.Com">M.Com</option>
                                    <option value="B.Des">B.Des</option>
                                </select>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Mother Tongue</label>
                            <select name="motherTongue" onChange={handleFilterChange} value={filters.motherTongue}>
                                <option value="">Any</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Marathi">Marathi</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Gujarati">Gujarati</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Tamil">Tamil</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Diet</label>
                            <select name="diet" onChange={handleFilterChange} value={filters.diet}>
                                <option value="">Any</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Eggetarian">Eggetarian</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Drink</label>
                            <select name="drink" onChange={handleFilterChange} value={filters.drink}>
                                <option value="">Any</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                                <option value="Occasional">Occasional</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Smoke</label>
                            <select name="smoke" onChange={handleFilterChange} value={filters.smoke}>
                                <option value="">Any</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                    </aside>

                    {/* MAIN CONTENT GRID */}
                    <main className="results-area">
                        <header className="results-header" data-aos="fade-down">
                            <div className="header-left">
                                <h1>Suggested Matches <span className="count-badge">{filteredProfiles.length}</span></h1>
                                <p>
                                    {searchQuery
                                        ? `Showing results for "${searchQuery}"`
                                        : "Profiles matching your preferences"}
                                </p>
                            </div>

                            <div className="view-toggles">
                                <button
                                    className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                    onClick={() => setViewMode('grid')}
                                    title="Grid View"
                                >
                                    <LayoutGrid size={20} />
                                </button>
                                <button
                                    className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                    title="List View"
                                >
                                    <List size={20} />
                                </button>
                            </div>
                        </header>

                        <motion.div
                            layout
                            className={`profiles-grid ${viewMode === 'list' ? 'list-view' : ''}`}
                        >
                            <AnimatePresence>
                                {filteredProfiles.map((profile, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        key={profile.id}
                                        className="profile-card"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="profile-image" style={{ backgroundImage: `url(${profile.image})` }}>
                                            <div className="gradient-overlay"></div>
                                        </div>
                                        <div className="profile-info">
                                            <div className="info-header">
                                                <h3>{profile.name}, {profile.age}</h3>
                                                <button
                                                    className="shortlist-icon-btn"
                                                    onClick={(e) => { e.stopPropagation(); toggleShortlist(profile.id); }}
                                                >
                                                    <Heart
                                                        size={22}
                                                        fill={shortlistedIds.includes(profile.id) ? "#d32f2f" : "none"}
                                                        color={shortlistedIds.includes(profile.id) ? "#d32f2f" : "#ddd"}
                                                    />
                                                </button>
                                            </div>

                                            <div className="core-details">
                                                <p><MapPin size={14} /> {profile.location}</p>
                                                <p><Briefcase size={14} /> {profile.occupation}</p>
                                                <p><GraduationCap size={14} /> {profile.education}</p>
                                            </div>

                                            <div className="tags">
                                                <span>{profile.height}</span>
                                                <span>{profile.family} Family</span>
                                                <span>{profile.caste}</span>
                                            </div>

                                            <div className="card-actions">
                                                <button
                                                    className="connect-btn"
                                                    onClick={() => navigate(`/profile/${profile.id}`)}
                                                >
                                                    View Full Profile
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {filteredProfiles.length === 0 && (
                                <div className="no-results">
                                    <h3>No matches found</h3>
                                    <p>Try adjusting your search criteria.</p>
                                </div>
                            )}
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    );
}
