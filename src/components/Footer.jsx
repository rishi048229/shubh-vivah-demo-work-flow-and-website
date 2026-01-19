import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-decorative-border"></div>

            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3>Shubh Vivah</h3>
                        <p>
                            Making matches made in heaven a reality on earth. We combine tradition with technology to help you find your perfect life partner.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            {['Home', 'Services', 'Partners', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`}>
                                        <ChevronRight size={14} color="var(--color-haldi)" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="footer-heading">Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div className="contact-item">
                                <Phone size={18} color="var(--color-haldi)" style={{ marginTop: '3px' }} />
                                <span>+91 98765 43210<br/>+91 98765 43211</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} color="var(--color-haldi)" style={{ marginTop: '3px' }} />
                                <span>info@shubhvivah.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} color="var(--color-haldi)" style={{ marginTop: '3px' }} />
                                <span>123 Wedding Street, Juhu,<br/>Mumbai, Maharashtra 400049</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="footer-heading">Newsletter</h4>
                        <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            Subscribe for wedding tips, trends, and exclusive offers.
                        </p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Shubh Vivah. All rights reserved.
                    </p>
                    <div className="social-links">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                            <a key={index} href="#" className="social-icon">
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
