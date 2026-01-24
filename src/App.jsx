import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Services from './pages/LandingPage/components/Services';
import Horoscope from './pages/LandingPage/components/Horoscope';

import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import People from './pages/People/People';
import ScrollToHash from './components/ScrollToHash';
import AIPanditBot from './components/AIPanditBot';

import Membership from './pages/Membership/Membership';
import Dashboard from './pages/Dashboard/Dashboard';
import Messages from './pages/Messages/Messages';
import Shortlist from './pages/Shortlist/Shortlist';
import UserProfile from './pages/UserProfile/UserProfile';
import ProfileDetails from './pages/UserProfile/ProfileDetails';

import ReviewSystem from './components/ReviewSystem';

const ReviewButton = () => (
    <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
            position: 'fixed',
            bottom: '90px', // Above footer/bot
            left: '20px', // Bottom Left
            right: 'auto',
            zIndex: 99,
            background: 'var(--color-gold)',
            color: 'var(--color-maroon)',
            border: 'none',
            borderRadius: '50px',
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}
    >
        <MessageSquare size={18} /> Review Us
    </motion.button>
);

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app-container">
      <ScrollToHash />
      
      {!isAuthPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/people" element={<People />} />
          <Route path="/services" element={<Services />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/shortlist" element={<Shortlist />} />
          <Route path="/my-profile" element={<UserProfile />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="*" element={
            <div style={{ textAlign: "center", padding: "100px 20px", color: "var(--color-maroon)" }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <p>Current Path: {location.pathname}</p>
            </div>
          } />
        </Routes>
      </main>

      <AIPanditBot />
      {!isAuthPage && <Footer />}
      {!isAuthPage && <ReviewSystem />}
    </div>
  );
}

export default App;