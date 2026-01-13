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
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();
  console.log("App rendering, location:", location);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <div className="animated-bg"></div>

      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Stats />
            <Services />
            <WhyUs />
            <PreviousEvents />
            <Partners />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;