import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            paddingTop: '100px', // Space for navbar
            paddingBottom: '50px',
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
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
                }}></div>
            </div>

            {/* Content */}
            <div style={{
                textAlign: 'center',
                padding: '0 1rem',
                maxWidth: '1200px',
                zIndex: 1,
                width: '100%',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        <span style={{ color: 'var(--color-haldi)' }}>Shubh</span> Vivah
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        marginBottom: '2rem',
                        fontStyle: 'italic',
                        fontWeight: '300',
                        letterSpacing: '1px',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        "Where Soulmates Meet & Perfect Matches Begin"
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        marginTop: '2rem',
                    }}
                >
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            border: '2px solid rgba(255, 193, 7, 0.3)',
                            height: '500px', // Fixed height for consistency
                            width: '280px', // Fixed width for consistency
                        }}>
                            <iframe
                                src="https://assets.pinterest.com/ext/embed.html?id=773985885976824586"
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                scrolling="no"
                                title={`Wedding Video ${index + 1}`}
                                style={{ pointerEvents: 'none' }} // Prevent interaction if desired, or remove to allow
                            ></iframe>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ marginTop: '3rem' }}
                >
                    <motion.a
                        href="#services"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 193, 7, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
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
        </section>
    );
};

export default Hero;
