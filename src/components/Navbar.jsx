import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Simple SVG Swastik Component
const Swastik = ({ color }) => (
  <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10V90M10 50H90" stroke={color} strokeWidth="8" strokeLinecap="round" />
    <path d="M50 10H90V50" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray="0 40 40 0" />
    <path d="M50 90H10V50" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray="0 40 40 0" />
    <path d="M10 50V10H50" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray="0 40 40 0" />
    <path d="M90 50V90H50" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray="0 40 40 0" />
    <circle cx="30" cy="30" r="4" fill={color} />
    <circle cx="70" cy="30" r="4" fill={color} />
    <circle cx="70" cy="70" r="4" fill={color} />
    <circle cx="30" cy="70" r="4" fill={color} />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  const navbarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.4s ease',
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
    padding: scrolled ? '0.8rem 2rem' : '1.5rem 2rem',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
  };

  const logoColor = scrolled ? 'var(--color-kumkum)' : '#fff';

  return (
    <nav style={navbarStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <Swastik color={scrolled ? 'var(--color-haldi)' : '#FFC107'} />
          <span style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: logoColor,
            fontFamily: 'var(--font-heading)'
          }}>
            <span style={{ color: scrolled ? 'var(--color-haldi)' : '#FFC107' }}>Shubh</span> Vivah
          </span>
        </a>

        {/* Desktop Menu */}
        <ul style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  color: scrolled ? 'var(--color-text)' : '#fff',
                  fontWeight: '500',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            style={{
              padding: '0.6rem 1.8rem',
              backgroundColor: 'var(--color-kumkum)',
              color: '#fff',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(211, 47, 47, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(211, 47, 47, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(211, 47, 47, 0.3)';
            }}
          >
            Login
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ color: scrolled ? 'var(--color-text)' : '#fff', cursor: 'pointer' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', padding: '2rem', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--color-text)', fontSize: '1.2rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-haldi) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-haldi);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
