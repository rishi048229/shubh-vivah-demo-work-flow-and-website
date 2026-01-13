import React, { useState, useEffect } from "react";
import { Save, User, MapPin, Briefcase, GraduationCap, Ruler, Phone, Camera } from "lucide-react";
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

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            // Load from session
            setFormData(prev => ({ ...prev, ...storedUser }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Mock Upload: Read as Base64 Data URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!storedUser) {
            alert("Please login to save changes.");
            return;
        }

        // 1. Update Session
        const updatedUser = { ...storedUser, ...formData };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        // 2. Update "Database" (users array)
        const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const newUsersList = allUsers.map(u => u.email === storedUser.email ? updatedUser : u);
        localStorage.setItem("users", JSON.stringify(newUsersList));

        setFormData(prev => ({ ...prev, ...updatedUser }));
        alert("Profile Updated Successfully!");
    };

    return (
        <div className="profile-page-wrapper" style={{
            background: 'linear-gradient(135deg, #fffcf5 0%, #f7f3e8 100%)', // Premium Cream/Warm White
            minHeight: '100vh',
            paddingTop: '30px'
        }} data-aos="fade-in">
            <div className="profile-page-overlay" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                minHeight: '100vh',
                paddingTop: '60px',
                paddingBottom: '60px'
            }}>
                <div className="user-profile-container">
                    <header className="profile-page-header" data-aos="fade-down">
                        <h1>Edit Your Profile</h1>
                        <p>Keep your details fresh to attract the best matches.</p>
                    </header>

                    <form className="profile-layout-grid" onSubmit={handleSave}>

                        {/* LEFT COLUMN: PHOTO & STATUS */}
                        <aside className="profile-sidebar-card" data-aos="fade-right">
                            <div className="profile-photo-upload">
                                <div
                                    className="photo-preview"
                                    style={{ backgroundImage: `url(${formData.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"})` }}
                                >
                                    <label className="upload-overlay">
                                        <Camera size={24} color="white" />
                                        <span>Change Photo</span>
                                        <input
                                            type="file"
                                            className="hidden-input"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="sidebar-section">
                                <h3>Profile Status</h3>
                                <div className="status-badge">85% Completed</div>
                                <p className="status-text">Add more details to reach 100% visibility.</p>
                            </div>

                            <div className="sidebar-section">
                                <h3>Contact Details</h3>
                                <div className="input-with-icon">
                                    <User size={16} />
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                                </div>
                                <div className="input-with-icon">
                                    <MapPin size={16} />
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" />
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT COLUMN: MAIN DETAILS */}
                        <main className="profile-main-card" data-aos="fade-left">

                            {/* SECTION 1: ABOUT */}
                            <section className="form-section">
                                <h3><User size={18} /> About Me</h3>
                                <textarea
                                    name="bio"
                                    rows="4"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Write something nice about yourself..."
                                ></textarea>
                            </section>

                            {/* SECTION 2: BASIC DETAILS */}
                            <section className="form-section">
                                <h3><Ruler size={18} /> Basic Details</h3>
                                <div className="form-row-2">
                                    <div className="form-group-pro">
                                        <label>Age</label>
                                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Height</label>
                                        <select name="height" value={formData.height} onChange={handleChange}>
                                            <option value="">Select</option>
                                            <option value="5'0">5'0"</option>
                                            <option value="5'5">5'5"</option>
                                            <option value="6'0">6'0"</option>
                                        </select>
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Religion</label>
                                        <select name="religion" value={formData.religion} onChange={handleChange}>
                                            <option value="">Select</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Sikh">Sikh</option>
                                            <option value="Christian">Christian</option>
                                        </select>
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Caste</label>
                                        <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 3: CAREER & FAMILY */}
                            <section className="form-section">
                                <h3><Briefcase size={18} /> Career & Family</h3>
                                <div className="form-row-2">
                                    <div className="form-group-pro">
                                        <label>Education</label>
                                        <select name="education" value={formData.education} onChange={handleChange}>
                                            <option value="">Select</option>
                                            <option value="B.Tech">B.Tech</option>
                                            <option value="MBA">MBA</option>
                                            <option value="MBBS">MBBS</option>
                                        </select>
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Occupation</label>
                                        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Annual Income</label>
                                        <input type="text" name="income" value={formData.income} onChange={handleChange} />
                                    </div>
                                    <div className="form-group-pro">
                                        <label>Family Type</label>
                                        <select name="familyType" value={formData.familyType} onChange={handleChange}>
                                            <option value="Nuclear">Nuclear</option>
                                            <option value="Joint">Joint</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            <div className="form-actions">
                                <button type="submit" className="save-btn-pro">
                                    Save Changes <Save size={18} />
                                </button>
                            </div>

                        </main>
                    </form>
                </div>
            </div>
        </div>
    );
}
