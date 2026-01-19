import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';
import cardImg1 from '../assets/carousel-1.jpg';
import cardImg2 from '../assets/carousel-2.jpg';
import cardImg3 from '../assets/carousel-3.jpg';
import cardImg4 from '../assets/carousel-4.jpg';
import cardImg5 from '../assets/carousel-5.jpg';

import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const cards = [
        { img: cardImg1, title: "Dream Weddings" },
        { img: cardImg2, title: "Perfect Matches" },
        { img: cardImg3, title: "Unforgettable Moments" },
        { img: cardImg4, title: "Royal Celebrations" },
        { img: cardImg5, title: "Joyful Beginnings" }
    ];

    // Duplicate cards for seamless loop
    const carouselCards = [...cards, ...cards];

    return (
        <section id="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
            paddingTop: '140px',
            paddingBottom: '20px',
            overflow: 'hidden',
        }}>
            {/* Static Background Image with Overlay */}
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

            {/* Main Content */}
            <div style={{
                textAlign: 'center',
                padding: '0 1rem',
                maxWidth: '1200px',
                zIndex: 1,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(4rem, 8vw, 7.5rem)',
                        fontWeight: '400',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-secondary)',
                    }}>
                        Shubh <span style={{ color: 'var(--color-kumkum)', fontSize: '0.8em', verticalAlign: 'middle' }}>卐</span> Vivah
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        marginBottom: '0.5rem',
                        letterSpacing: '1px',
                        fontFamily: 'var(--font-decorative)',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
                    }}>
                        Where Soulmates Meet & Perfect Matches Begin
                    </p>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        marginBottom: '2.5rem',
                        fontWeight: '300',
                        fontStyle: 'italic',
                        fontFamily: 'var(--font-body)',
                        color: '#eee',
                    }}>
                        We offer best services in town
                    </p>

                    <motion.button
                        onClick={() => navigate('/login')}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 193, 7, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
                            background: 'linear-gradient(45deg, var(--color-primary), #5d332f)',
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            borderRadius: '50px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            marginBottom: '2rem',
                            cursor: 'pointer',
                        }}
                    >
                        Find Your Match
                    </motion.button>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div style={{
                width: '100%',
                overflow: 'hidden',
                padding: '2rem 0',
                zIndex: 2,
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    style={{
                        display: 'flex',
                        gap: '25px',
                        width: 'max-content',
                        paddingLeft: '25px', // Initial offset
                    }}
                >
                    {carouselCards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -15,
                                scale: 1.05,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                zIndex: 10
                            }}
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                                border: '3px solid rgba(255, 255, 255, 0.3)',
                                height: '250px',
                                width: '350px',
                                position: 'relative',
                                cursor: 'pointer',
                                background: '#000',
                                flexShrink: 0, // Prevent shrinking
                                WebkitBoxReflect: 'below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))',
                            }}
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                textAlign: 'left',
                            }}>
                                <p style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-heading)',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    {card.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
