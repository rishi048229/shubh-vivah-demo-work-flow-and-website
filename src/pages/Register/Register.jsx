import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Sparkles, ArrowLeft, KeyRound } from "lucide-react";
import { motion } from "framer-motion";
import "../Login/Login.css"; // Reuse existing styles

// Using the same background image import
import BgImage from "../../assets/R image.jpg";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // 1. Get existing users
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

        // 2. Check overlap
        const userExists = existingUsers.find(u => u.email === formData.email);
        if (userExists) {
            alert("User with this email already exists!");
            return;
        }

        // 3. Create new user
        const newUser = {
            _id: Date.now().toString(), // Mock ID
            name: formData.name,
            email: formData.email,
            password: formData.password,
            bio: "",
            details: {}
        };

        // 4. Save
        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

        alert("Registration Successful! Please Login.");
        navigate("/login");
    };

    return (
        <motion.div
            className="circle-reveal-root"
            initial={{ clipPath: 'circle(0% at 0% 50%)' }}
            animate={{ clipPath: 'circle(150% at 0% 50%)' }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                background: "linear-gradient(to bottom, rgba(74, 14, 14, 0.4), rgba(0, 0, 0, 0.6))",
                zIndex: -1
            }}></div>

            <Link to="/" className="exit-btn">
                <ArrowLeft size={20} />
                <span>Return to Home</span>
            </Link>

            <div className="login-split-layout">

                {/* LEFT SIDE: SLOGAN */}
                <motion.div
                    className="slogan-container"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <h2 className="slogan-main">Begin Your <br /><span>Forever Story.</span></h2>
                    <p className="slogan-sub">Join our community of verified profiles <br /> and find your perfect life partner.</p>
                </motion.div>

                {/* RIGHT SIDE: REGISTER CARD */}
                <div className="login-content-side">
                    <motion.div
                        className="auth-glass-card"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="brand-section">
                            <h1 className="brand-title">Shubh <span>Vivah</span></h1>
                            <p className="brand-subtitle">CREATE YOUR PROFILE</p>
                        </div>

                        <form className="auth-form" onSubmit={handleRegister}>

                            {/* --- NAME SECTION --- */}
                            <div className="form-field">
                                <div className="label-row">
                                    <label className="visible-label">FULL NAME</label>
                                </div>
                                <div className="input-group-custom">
                                    <User className="field-icon" size={18} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* --- EMAIL SECTION --- */}
                            <div className="form-field">
                                <div className="label-row">
                                    <label className="visible-label">EMAIL ADDRESS</label>
                                </div>
                                <div className="input-group-custom">
                                    <Mail className="field-icon" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* --- PASSWORD SECTION --- */}
                            <div className="form-field">
                                <div className="label-row">
                                    <label className="visible-label">PASSWORD</label>
                                </div>
                                <div className="input-group-custom">
                                    <Lock className="field-icon" size={18} />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        required
                                    />
                                </div>
                            </div>

                            {/* --- CONFIRM PASSWORD SECTION --- */}
                            <div className="form-field">
                                <div className="label-row">
                                    <label className="visible-label">CONFIRM PASSWORD</label>
                                </div>
                                <div className="input-group-custom">
                                    <KeyRound className="field-icon" size={18} />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="login-action-btn">
                                REGISTER <Sparkles size={18} />
                            </button>
                        </form>

                        <p className="switch-auth">
                            Already have an account? <Link to="/login">Login Here</Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
