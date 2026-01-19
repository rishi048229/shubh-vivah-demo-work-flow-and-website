import React, { useState, useEffect } from "react";
import { Save, User, MapPin, Briefcase, GraduationCap, Ruler, Phone, Camera, Heart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./UserProfile.css";

export default function UserProfile() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        height: "",
        location: "",
        education: "",
        occupation: "",
        income: "",
        religion: "",
        caste: "",
        familyType: "Nuclear",
        bio: "",
        image: ""
    });

    const [completion, setCompletion] = useState(0);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            setFormData(prev => ({ ...prev, ...storedUser }));
        }
    }, []);

    // Calculate Completion Percentage
    useEffect(() => {
        const totalFields = Object.keys(formData).length;
        const filledFields = Object.values(formData).filter(val => val && val.toString().trim() !== "").length;
        const percent = Math.round((filledFields / totalFields) * 100);
        setCompletion(percent);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!storedUser) {
            alert("Please login to save changes.");
            setIsSaving(false);
            return;
        }

        setTimeout(() => {
            // 1. Update Session
            const updatedUser = { ...storedUser, ...formData };
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));

            // 2. Update "Database" (users array)
            const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
            const newUsersList = allUsers.map(u => u.email === storedUser.email ? updatedUser : u);
            localStorage.setItem("users", JSON.stringify(newUsersList));

            setFormData(prev => ({ ...prev, ...updatedUser }));
            setIsSaving(false);
            alert("Profile Updated Successfully!");
        }, 1000); // Simulate network request
    };

    // Circular Progress Props
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (completion / 100) * circumference;

    return (
        <div className="profile-page-wrapper">
            <div className="user-profile-container">
                <header className="profile-page-header">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Edit Your Profile
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2 }}
                    >
                        Complete your profile to get 3x more matches
                    </motion.p>
                </header>

                <form className="profile-layout-grid" onSubmit={handleSave}>
                    
                    {/* LEFT COLUMN: PHOTO & STATUS */}
                    <motion.aside 
                        className="profile-sidebar-card"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="profile-photo-section">
                            {/* SVG Progress Ring */}
                            <svg className="progress-ring" width="180" height="180">
                                <circle
                                    className="progress-ring__circle-bg"
                                    strokeWidth="6"
                                    fill="transparent"
                                    r={radius}
                                    cx="90"
                                    cy="90"
                                />
                                <circle
                                    className="progress-ring__circle"
                                    strokeWidth="6"
                                    fill="transparent"
                                    r={radius}
                                    cx="90"
                                    cy="90"
                                    style={{ strokeDasharray: circumference, strokeDashoffset }}
                                />
                            </svg>

                            <div className="photo-container">
                                <img 
                                    src={formData.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"} 
                                    alt="Profile" 
                                />
                                <label className="upload-overlay">
                                    <Camera size={32} />
                                    <span>Change</span>
                                    <input
                                        type="file"
                                        className="hidden-input"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="completion-text">
                            <h3>{completion}%</h3>
                            <p>Profile Completed</p>
                        </div>

                        <div className="sidebar-divider"></div>

                        <div className="sidebar-contact-info">
                            <div className="info-item">
                                <User size={18} />
                                <span>{formData.name || "Your Name"}</span>
                            </div>
                            <div className="info-item">
                                <MapPin size={18} />
                                <span>{formData.location || "Your Location"}</span>
                            </div>
                        </div>
                    </motion.aside>

                    {/* RIGHT COLUMN: MAIN DETAILS */}
                    <motion.main 
                        className="profile-main-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* SECTION 1: ABOUT */}
                        <section className="form-section-card">
                            <div className="section-header">
                                <Heart size={24} color="#D32F2F" />
                                <h3>About Me</h3>
                            </div>
                            <div className="input-group">
                                <label>Bio</label>
                                <textarea
                                    name="bio"
                                    rows="4"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Write something nice about yourself..."
                                ></textarea>
                            </div>
                        </section>

                        {/* SECTION 2: BASIC DETAILS */}
                        <section className="form-section-card">
                            <div className="section-header">
                                <Ruler size={24} color="#D32F2F" />
                                <h3>Basic Details</h3>
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                                </div>
                                <div className="input-group">
                                    <label>Location</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" />
                                </div>
                                <div className="input-group">
                                    <label>Age</label>
                                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label>Height</label>
                                    <select name="height" value={formData.height} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="5'0">5'0"</option>
                                        <option value="5'5">5'5"</option>
                                        <option value="6'0">6'0"</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Religion</label>
                                    <select name="religion" value={formData.religion} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Caste</label>
                                    <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: CAREER & FAMILY */}
                        <section className="form-section-card">
                            <div className="section-header">
                                <Briefcase size={24} color="#D32F2F" />
                                <h3>Career & Family</h3>
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Education</label>
                                    <select name="education" value={formData.education} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="MBA">MBA</option>
                                        <option value="MBBS">MBBS</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Occupation</label>
                                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label>Annual Income</label>
                                    <input type="text" name="income" value={formData.income} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label>Family Type</label>
                                    <select name="familyType" value={formData.familyType} onChange={handleChange}>
                                        <option value="Nuclear">Nuclear</option>
                                        <option value="Joint">Joint</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* FLOATING SAVE BAR */}
                        <motion.div 
                            className="save-action-bar"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span style={{ color: '#666', fontSize: '0.9rem' }}>
                                {completion < 100 ? `${100 - completion}% more to go!` : "Profile Complete!"}
                            </span>
                            <button type="submit" className="save-btn" disabled={isSaving}>
                                {isSaving ? "Saving..." : (
                                    <>
                                        Save Changes <Save size={18} />
                                    </>
                                )}
                            </button>
                        </motion.div>

                    </motion.main>
                </form>
            </div>
        </div>
    );
}
