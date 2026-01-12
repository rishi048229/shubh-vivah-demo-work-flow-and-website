import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}>
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    src={heroBg}
                    alt="Wedding Background"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                }}></div>
            </div>

            {/* Content */}
            <div style={{
                textAlign: 'center',
                padding: '0 1rem',
                maxWidth: '900px',
                zIndex: 1,
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        <span style={{ color: 'var(--color-haldi)' }}>Shubh</span> Vivah
                    </h1>
                    <div style={{
                        width: '150px',
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent, var(--color-haldi), transparent)',
                        margin: '1rem auto 2rem'
                    }}></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                        marginBottom: '3rem',
                        fontStyle: 'italic',
                        fontWeight: '300',
                        letterSpacing: '1px',
                        fontFamily: 'var(--font-heading)',
                    }}
                >
                    "Where Soulmates Meet & Perfect Matches Begin"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <motion.a
                        href="#services"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 193, 7, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1.2rem 3.5rem',
                            background: 'linear-gradient(45deg, var(--color-kumkum), #b71c1c)',
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '50px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        Find Your Match
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    opacity: 0.8,
                }}
            >
                <a href="#services" style={{ color: '#fff', fontSize: '2rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
