import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#f0f4f8' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Get in Touch</h2>
                    <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-kumkum)', margin: '0 auto' }}></div>
                    <p style={{ marginTop: '1rem', color: '#666', fontSize: '1.1rem' }}>We'd love to hear from you</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-text)' }}>Contact Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '50%', color: 'var(--color-akashat)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', color: '#555' }}>Phone</p>
                                <p style={{ color: '#777' }}>+91 98765 43210</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '50%', color: 'var(--color-kumkum)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', color: '#555' }}>Email</p>
                                <p style={{ color: '#777' }}>info@shubhvivah.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '50%', color: 'var(--color-haldi)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bold', color: '#555' }}>Address</p>
                                <p style={{ color: '#777' }}>123, Wedding Avenue, Mumbai, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: '#fff',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        }}
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: '1px solid #eee',
                                        backgroundColor: '#f9f9f9',
                                        outline: 'none',
                                        transition: 'border-color 0.3s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-akashat)'}
                                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: '1px solid #eee',
                                        backgroundColor: '#f9f9f9',
                                        outline: 'none',
                                        transition: 'border-color 0.3s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-akashat)'}
                                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#555', fontWeight: '500' }}>Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        border: '1px solid #eee',
                                        backgroundColor: '#f9f9f9',
                                        outline: 'none',
                                        resize: 'none',
                                        transition: 'border-color 0.3s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-akashat)'}
                                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-kumkum)',
                                    color: '#fff',
                                    fontWeight: '600',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#b71c1c'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-kumkum)'}
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
