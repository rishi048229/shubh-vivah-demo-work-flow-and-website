import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="animated-bg"></div>
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
