import React, { useState, useEffect } from "react";
import { Save, User, MapPin, Briefcase, GraduationCap, Ruler, Phone, Camera, Heart, CheckCircle, Edit2, Sparkles, Home, Settings } from "lucide-react";
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

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] // Custom easeOutCubic-like curve for "luxurious" feel
            }
        }
    };

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

                <motion.form 
                    className="profile-layout-grid" 
                    onSubmit={handleSave}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    
                    {/* LEFT COLUMN: SIDEBAR */}
                    <motion.aside className="profile-sidebar-card neumorphic-card" variants={cardVariants}>
                        <div className="profile-photo-wrapper">
                            <div className="profile-photo-container">
                                <img 
                                    src={formData.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"} 
                                    alt="Profile" 
                                />
                            </div>
                            <label className="edit-photo-btn">
                                <Camera size={20} />
                                <input
                                    type="file"
                                    className="hidden-input"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>

                        <h2 className="profile-name">{formData.name || "Your Name"}</h2>
                        
                        <div className="profile-location">
                            <MapPin size={18} />
                            <span>{formData.location || "Add Location"}</span>
                        </div>

                        <div className="completion-bar-container">
                            <div 
                                className="completion-bar-fill" 
                                style={{ width: `${completion}%` }}
                            ></div>
                        </div>
                        <div className="completion-text">
                            {completion}% Profile Completed
                        </div>
                    </motion.aside>

                    {/* RIGHT COLUMN: MAIN CONTENT */}
                    <main className="profile-main-card">
                        
                        {/* CARD 1: ABOUT ME */}
                        <motion.div className="neumorphic-card" variants={cardVariants}>
                            <div className="card-header">
                                <div className="card-icon-box">
                                    <Heart size={24} />
                                </div>
                                <h3 className="card-title">About Me</h3>
                            </div>
                            <div className="input-group">
                                <label>Bio</label>
                                <textarea
                                    className="soft-input"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Write something nice about yourself..."
                                ></textarea>
                            </div>
                        </motion.div>

                        {/* CARD 2: BASIC DETAILS */}
                        <motion.div className="neumorphic-card" variants={cardVariants}>
                            <div className="card-header">
                                <div className="card-icon-box">
                                    <User size={24} />
                                </div>
                                <h3 className="card-title">Basic Details</h3>
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input className="soft-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                                </div>
                                <div className="input-group">
                                    <label>Location</label>
                                    <input className="soft-input" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" />
                                </div>
                                <div className="input-group">
                                    <label>Age</label>
                                    <input className="soft-input" type="number" name="age" value={formData.age} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label>Height</label>
                                    <select className="soft-input" name="height" value={formData.height} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="5'0">5'0"</option>
                                        <option value="5'5">5'5"</option>
                                        <option value="6'0">6'0"</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Religion</label>
                                    <select className="soft-input" name="religion" value={formData.religion} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Caste</label>
                                    <input className="soft-input" type="text" name="caste" value={formData.caste} onChange={handleChange} />
                                </div>
                            </div>
                        </motion.div>

                        {/* CARD 3: CAREER & EDUCATION */}
                        <motion.div className="neumorphic-card" variants={cardVariants}>
                            <div className="card-header">
                                <div className="card-icon-box">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="card-title">Career & Education</h3>
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Education</label>
                                    <select className="soft-input" name="education" value={formData.education} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="MBA">MBA</option>
                                        <option value="MBBS">MBBS</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Occupation</label>
                                    <input className="soft-input" type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label>Annual Income</label>
                                    <input className="soft-input" type="text" name="income" value={formData.income} onChange={handleChange} />
                                </div>
                            </div>
                        </motion.div>

                        {/* CARD 4: FAMILY DETAILS */}
                        <motion.div className="neumorphic-card" variants={cardVariants}>
                            <div className="card-header">
                                <div className="card-icon-box">
                                    <Home size={24} />
                                </div>
                                <h3 className="card-title">Family Details</h3>
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Family Type</label>
                                    <select className="soft-input" name="familyType" value={formData.familyType} onChange={handleChange}>
                                        <option value="Nuclear">Nuclear</option>
                                        <option value="Joint">Joint</option>
                                    </select>
                                </div>
                                {/* Add more family fields as needed */}
                            </div>
                        </motion.div>

                        {/* FLOATING ACTION BAR */}
                        <motion.div 
                            className="action-bar"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                        >
                            <button type="submit" className="save-btn-floating" disabled={isSaving}>
                                {isSaving ? (
                                    "Saving..."
                                ) : (
                                    <>
                                        <Save size={20} /> Save Changes
                                    </>
                                )}
                            </button>
                        </motion.div>

                    </main>
                </motion.form>
            </div>
        </div>
    );
}
