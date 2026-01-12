import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // This ensures the main site Navbar and Footer disappear on the Login page
  const isLoginPage = location.pathname === "/login";

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