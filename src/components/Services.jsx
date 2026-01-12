import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Users, Truck } from 'lucide-react';

const services = [
    {
        icon: <Heart size={32} />,
        title: 'Partner Matching',
        description: 'Find your soulmate with our advanced AI-driven matching algorithms and personalized assistance.',
        color: 'var(--color-kumkum)',
        gradient: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)',
    },
    {
        icon: <Calendar size={32} />,
        title: 'Wedding Planning',
        description: 'Comprehensive planning services to make your special day flawless, magical, and memorable.',
        color: 'var(--color-haldi)',
        gradient: 'linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)',
    },
    {
        icon: <Users size={32} />,
        title: 'Vendor Coordination',
        description: 'We connect you with trusted, premium vendors for catering, decoration, photography, and more.',
        color: 'var(--color-akashat)',
        gradient: 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)',
    },
    {
        icon: <Truck size={32} />,
        title: 'Event Logistics',
        description: 'Seamless transportation and accommodation management for your guests comfort.',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)',
    },
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '6rem 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700'
                    }}>Our Premium Services</h2>
                    <div style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-haldi)', margin: '0 auto', borderRadius: '2px' }}></div>
                    <p style={{ marginTop: '1.5rem', color: '#666', fontSize: '1.2rem', maxWidth: '600px', marginInline: 'auto' }}>
                        Curated services designed to make your wedding journey as beautiful as the destination.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="glass"
                            style={{
                                padding: '3rem 2rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                transition: 'all 0.4s ease',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                padding: '1.2rem',
                                borderRadius: '50%',
                                background: service.gradient,
                                color: service.color,
                                marginBottom: '2rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.6rem',
                                marginBottom: '1rem',
                                color: 'var(--color-text)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1rem' }}>{service.description}</p>

                            {/* Decorative Circle */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: service.gradient,
                                opacity: 0.2,
                                zIndex: -1,
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
