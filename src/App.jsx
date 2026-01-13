import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import UserProfile from './components/UserProfile';
import Chat from './components/Chat';
import Shortlist from './components/Shortlist';
import Membership from './components/Membership';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();

  // This ensures the main site Navbar and Footer disappear on the Login and Register page
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="animated-bg"></div>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={
          <main>
            <section id="hero"><Hero /></section>
            <section id="services"><Services /></section>
            <section id="partners"><Partners /></section>
            <section id="contact"><Contact /></section>
          </main>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/shortlist" element={<Shortlist />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;