import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Sparkles, ArrowLeft, KeyRound } from "lucide-react";
import { motion } from "framer-motion";
import "./Login.css";

// ✅ Import the background image
import BgImage from "../assets/hero-bg.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // ✅ State to handle OTP button text
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (!otpSent) {
      setOtpSent(true);
      alert("OTP has been sent to your email!"); // Simple alert for demo
      // You can add your API call here later
      setTimeout(() => setOtpSent(false), 5000); // Reset after 5 seconds
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Get users from mock DB
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // 2. Find user
    const user = existingUsers.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // 3. Save session
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Welcome back, ${user.name}!`);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <motion.div
      className="circle-reveal-root"
      initial={{ clipPath: 'circle(0% at 100% 50%)' }}
      animate={{ clipPath: 'circle(150% at 100% 50%)' }}
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
        background: "linear-gradient(to bottom, rgba(74, 14, 14, 0.6), rgba(0, 0, 0, 0.8))",
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
          <h2 className="slogan-main">Your Journey to <br /><span>Forever Begins Here.</span></h2>
          <p className="slogan-sub">Connecting hearts across traditions, <br /> finding the perfect match for your soul.</p>
        </motion.div>

        {/* RIGHT SIDE: LOGIN CARD */}
        <div className="login-content-side">
          <motion.div
            className="auth-glass-card"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="brand-section">
              <h1 className="brand-title">Shubh <span>Vivah</span></h1>
              <p className="brand-subtitle">MATCHMAKING WITH TRADITION</p>
            </div>

            <form className="auth-form" onSubmit={handleLogin}>

              {/* --- EMAIL SECTION WITH OTP BUTTON --- */}
              <div className="form-field">
                <div className="label-row">
                  <label className="visible-label">EMAIL ADDRESS</label>

                  {/* ✅ ADDED OTP BUTTON HERE */}
                  <button
                    type="button"
                    className={`otp-action-btn ${otpSent ? "sent" : ""}`}
                    onClick={handleSendOtp}
                  >
                    {otpSent ? "✓ OTP Sent" : "Send OTP"}
                  </button>
                </div>

                <div className="input-group-custom">
                  <Mail className="field-icon" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter your registered email"
                    required
                  />
                </div>
              </div>
              {/* ------------------------------------- */}

              {/* --- OPTIONAL: OTP INPUT FIELD (If you want them to enter it) --- */}
              {otpSent && (
                <motion.div
                  className="form-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <label className="visible-label">ENTER OTP</label>
                  <div className="input-group-custom">
                    <KeyRound className="field-icon" size={18} />
                    <input type="text" placeholder="Enter 6-digit code" maxLength="6" />
                  </div>
                </motion.div>
              )}
              {/* ----------------------------------------------------------- */}

              <div className="form-field">
                <div className="label-row">
                  <label className="visible-label">PASSWORD</label>
                  <button type="button" className="forgot-link">Forgot Password?</button>
                </div>
                <div className="input-group-custom">
                  <Lock className="field-icon" size={18} />
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-action-btn">
                SIGN IN <Sparkles size={18} />
              </button>
            </form>

            <p className="switch-auth">
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}