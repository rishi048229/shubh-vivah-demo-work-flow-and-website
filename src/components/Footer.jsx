import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2c0b0e 100%)', // Dark theme base
            color: '#fff',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative Top Border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'linear-gradient(90deg, var(--color-haldi), var(--color-kumkum), var(--color-akashat))',
            }}></div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-decorative)',
                            color: 'var(--color-haldi)'
                        }}>
                            Shubh Vivah
                        </h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            Making matches made in heaven a reality on earth. Your journey to a beautiful forever starts here.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['Home', 'Services', 'Partners', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} style={{ color: '#ccc', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-haldi)'} onMouseOut={(e) => e.target.style.color = '#ccc'}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                                <Phone size={18} color="var(--color-haldi)" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                                <Mail size={18} color="var(--color-haldi)" />
                                <span>info@shubhvivah.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                                <MapPin size={18} color="var(--color-haldi)" />
                                <span>123 Wedding Street, Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Newsletter</h4>
                        <p style={{ color: '#ccc', marginBottom: '1rem' }}>Subscribe for wedding tips and updates.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: 'none',
                                    outline: 'none',
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                }}
                            />
                            <button style={{
                                padding: '0.8rem 1.2rem',
                                borderRadius: '5px',
                                background: 'var(--color-kumkum)',
                                color: '#fff',
                                fontWeight: 'bold',
                            }}>
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }} />

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Shubh Vivah. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                            <a key={index} href="#" style={{ color: '#fff', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
