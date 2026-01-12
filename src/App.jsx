import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import celebrationBg from './assets/celebration-bg.png';

function App() {
  return (
    <div className="App">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        backgroundImage: `url(${celebrationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}></div>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'rgba(255, 255, 255, 0.85)', // Overlay for readability
        backdropFilter: 'blur(3px)',
      }}></div>

      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
