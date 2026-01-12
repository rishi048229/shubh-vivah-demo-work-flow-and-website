import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Users, Truck, Camera, Palette, Utensils, Plane } from 'lucide-react';

const services = [
    {
        icon: <Heart size={32} />,
        title: 'Partner Matching',
        description: 'Find your soulmate with our advanced AI-driven matching algorithms.',
        color: '#D32F2F', // Kumkum
        gradient: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)',
        neon: '0 0 20px #D32F2F, 0 0 40px #D32F2F',
    },
    {
        icon: <Calendar size={32} />,
        title: 'Wedding Planning',
        description: 'Comprehensive planning to make your special day flawless and magical.',
        color: '#FFC107', // Haldi
        gradient: 'linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)',
        neon: '0 0 20px #FFC107, 0 0 40px #FFC107',
    },
    {
        icon: <Users size={32} />,
        title: 'Vendor Coordination',
        description: 'Connect with trusted, premium vendors for all your wedding needs.',
        color: '#1976D2', // Akashat
        gradient: 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)',
        neon: '0 0 20px #1976D2, 0 0 40px #1976D2',
    },
    {
        icon: <Truck size={32} />,
        title: 'Event Logistics',
        description: 'Seamless transportation and accommodation management for guests.',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)',
        neon: '0 0 20px #2E7D32, 0 0 40px #2E7D32',
    },
    {
        icon: <Camera size={32} />,
        title: 'Photography',
        description: 'Capture every beautiful moment with our expert wedding photographers.',
        color: '#9C27B0',
        gradient: 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)',
        neon: '0 0 20px #9C27B0, 0 0 40px #9C27B0',
    },
    {
        icon: <Palette size={32} />,
        title: 'Decoration',
        description: 'Stunning floral and thematic decorations to set the perfect mood.',
        color: '#E91E63',
        gradient: 'linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%)',
        neon: '0 0 20px #E91E63, 0 0 40px #E91E63',
    },
    {
        icon: <Utensils size={32} />,
        title: 'Catering',
        description: 'Exquisite culinary experiences with diverse menus for your guests.',
        color: '#FF5722',
        gradient: 'linear-gradient(135deg, #ffccbc 0%, #ffab91 100%)',
        neon: '0 0 20px #FF5722, 0 0 40px #FF5722',
    },
    {
        icon: <Plane size={32} />,
        title: 'Honeymoon Packages',
        description: 'Romantic getaways to start your new journey together in paradise.',
        color: '#00BCD4',
        gradient: 'linear-gradient(135deg, #b2ebf2 0%, #80deea 100%)',
        neon: '0 0 20px #00BCD4, 0 0 40px #00BCD4',
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
                        We offer a comprehensive suite of services to handle every detail of your wedding.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2.5rem',
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -15,
                                boxShadow: service.neon,
                                borderColor: service.color,
                            }}
                            className="glass"
                            style={{
                                padding: '2.5rem 1.5rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                transition: 'all 0.4s ease',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.5)',
                            }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                padding: '1.2rem',
                                borderRadius: '50%',
                                background: service.gradient,
                                color: service.color,
                                marginBottom: '1.5rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                marginBottom: '0.8rem',
                                color: 'var(--color-text)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600'
                            }}>
                                {service.title}
                            </h3>
                            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
