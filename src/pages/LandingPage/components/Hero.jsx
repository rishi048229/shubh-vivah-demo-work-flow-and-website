
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVid from '../../../assets/Final_hero.mp4';
import logoImg from '../../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleVideoEnd = () => {
        setShowComingSoon(true);
        setTimeout(() => {
            setShowComingSoon(false);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }, 5000);
    };

    return (
        <section id="hero" style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            overflow: 'hidden',
        }}>
            {/* Video Background with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))', // Soft dark gradient
                }}></div>
            </div>

            {/* Coming Soon Intermission Overlay */}
            <AnimatePresence>
                {showComingSoon && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'var(--color-maroon)',
                            zIndex: 50, // Covers everything
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2rem'
                        }}
                    >
                        {/* Logo */}
                        <motion.img
                            src={logoImg}
                            alt="Logo"
                            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1, type: 'spring' }}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                border: '2px solid var(--color-gold)',
                                boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)'
                            }}
                        />

                        {/* Animated Text */}
                        <motion.h2
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%'],
                                textShadow: [
                                    '0 0 10px rgba(212, 175, 55, 0.5)',
                                    '0 0 20px rgba(212, 175, 55, 0.8)',
                                    '0 0 10px rgba(212, 175, 55, 0.5)'
                                ]
                            }}
                            transition={{ 
                                backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                                textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{
                                fontFamily: 'var(--font-cursive)',
                                fontSize: 'clamp(4rem, 10vw, 8rem)',
                                color: 'transparent',
                                background: 'linear-gradient(90deg, #D4AF37, #FFF8E1, #D4AF37)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                margin: 0,
                                padding: '0 1rem',
                                textAlign: 'center'
                            }}
                        >
                            Coming Soon
                        </motion.h2>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content (Hidden during intermission) */}
            <motion.div 
                animate={{ opacity: showComingSoon ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    textAlign: 'center',
                    padding: '0 1rem',
                    maxWidth: '1200px',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        fontWeight: '400',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        fontFamily: 'var(--font-cursive)',
                        color: 'var(--color-ivory)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        Shubh 
                        <motion.img 
                            src={logoImg} 
                            alt="Logo" 
                            style={{ 
                                width: 'clamp(60px, 10vw, 120px)', 
                                height: 'auto',
                                filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
                                borderRadius: '50%' // Make it circular if it's square
                            }}
                            animate={{ 
                                scale: [1, 1.05, 1],
                                filter: [
                                    'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))',
                                    'drop-shadow(0 0 30px rgba(255, 215, 0, 0.9))',
                                    'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))'
                                ]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        Vivah
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        marginBottom: '3rem',
                        letterSpacing: '2px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '300',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
                        color: '#eee'
                    }}>
                        Where Soulmates Meet & Perfect Matches Begin
                    </p>

                    <motion.button
                        onClick={() => navigate('/login')}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '50px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                        }}
                    >
                        Find Your Match
                    </motion.button>
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Hero;
