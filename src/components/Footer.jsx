import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#222', color: '#fff', padding: '4rem 2rem 1rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--color-haldi)' }}>Shubh</span> Vivah
                        </h2>
                        <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Making your dream wedding a reality. We connect hearts and manage celebrations with perfection.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ cursor: 'pointer', color: '#fff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-haldi)'} onMouseLeave={(e) => e.target.style.color = '#fff'}><Facebook size={20} /></div>
                            <div style={{ cursor: 'pointer', color: '#fff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-haldi)'} onMouseLeave={(e) => e.target.style.color = '#fff'}><Twitter size={20} /></div>
                            <div style={{ cursor: 'pointer', color: '#fff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-haldi)'} onMouseLeave={(e) => e.target.style.color = '#fff'}><Instagram size={20} /></div>
                            <div style={{ cursor: 'pointer', color: '#fff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-haldi)'} onMouseLeave={(e) => e.target.style.color = '#fff'}><Linkedin size={20} /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-kumkum)', display: 'inline-block', paddingBottom: '0.5rem' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#hero" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>Home</a></li>
                            <li><a href="#services" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>Services</a></li>
                            <li><a href="#partners" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>Partners</a></li>
                            <li><a href="#contact" style={{ color: '#aaa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-akashat)', display: 'inline-block', paddingBottom: '0.5rem' }}>Newsletter</h3>
                        <p style={{ color: '#aaa', marginBottom: '1rem' }}>Subscribe to get the latest wedding trends and offers.</p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                }}
                            />
                            <button style={{
                                padding: '0.8rem',
                                backgroundColor: 'var(--color-haldi)',
                                color: '#000',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                            }}>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '1.5rem',
                    textAlign: 'center',
                    color: '#777',
                    fontSize: '0.9rem',
                }}>
                    <p>&copy; {new Date().getFullYear()} Shubh Vivah. All rights reserved.</p>
                    <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <a href="#" style={{ color: '#777' }}>Privacy Policy</a>
                        <a href="#" style={{ color: '#777' }}>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
