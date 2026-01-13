import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import PreviousEvents from './components/PreviousEvents';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import UserProfile from './components/UserProfile';
import Chat from './components/Chat';
import Shortlist from './components/Shortlist';
import Membership from './components/Membership';
import AdminDashboard from './components/AdminDashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();
  console.log("App rendering, location:", location);

  // This ensures the main site Navbar and Footer disappear on the Login and Register page
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <div className="animated-bg"></div>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <Services />
            <WhyUs />
            <PreviousEvents />
            <Partners />
            <Contact />
          </>
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