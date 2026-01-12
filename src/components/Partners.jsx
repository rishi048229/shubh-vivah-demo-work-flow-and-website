import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
    const partners = [
        { name: 'Taj Hotels', color: '#E6B800' },
        { name: 'Sabyasachi', color: '#800000' },
        { name: 'Manyavar', color: '#D32F2F' },
        { name: 'MakeMyTrip', color: '#1976D2' },
        { name: 'Ferns N Petals', color: '#4CAF50' },
        { name: 'Tanishq', color: '#C5A059' },
        { name: 'Anita Dongre', color: '#E91E63' },
    ];

    // Duplicate list for seamless loop
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <section id="partners" style={{ padding: '6rem 0', backgroundColor: 'rgba(255,255,255,0.5)', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)'
                    }}>Trusted by Industry Leaders</h2>
                    <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-akashat)', margin: '0 auto' }}></div>
                </motion.div>
            </div>

            <div style={{
                display: 'flex',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '150px',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
                    zIndex: 2,
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '100%',
                    background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
                    zIndex: 2,
                }}></div>

                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                    style={{
                        display: 'flex',
                        gap: '4rem',
                        padding: '2rem 0',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {marqueePartners.map((partner, index) => (
                        <div
                            key={index}
                            style={{
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: '#888',
                                filter: 'grayscale(100%)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                opacity: 0.7,
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.filter = 'grayscale(0%)';
                                e.target.style.opacity = '1';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'grayscale(100%)';
                                e.target.style.opacity = '0.7';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            <span style={{ color: partner.color, fontFamily: 'var(--font-heading)' }}>{partner.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
