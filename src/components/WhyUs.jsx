import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';

const features = [
    {
        icon: <Award size={50} />,
        title: 'Expert Planning',
        description: 'Years of experience in crafting perfect weddings tailored to your dreams.',
        color: '#FFC107',
        bg: '#FFF8E1',
    },
    {
        icon: <HeartHandshake size={50} />,
        title: 'Budget Friendly',
        description: 'Premium services at prices that respect your budget without compromising quality.',
        color: '#4CAF50',
        bg: '#E8F5E9',
    },
    {
        icon: <ShieldCheck size={50} />,
        title: 'Verified Profiles',
        description: '100% verified profiles ensuring safety and trust in your partner search.',
        color: '#1976D2',
        bg: '#E3F2FD',
    },
    {
        icon: <Clock size={50} />,
        title: '24/7 Support',
        description: 'Dedicated support team available round the clock to assist you.',
        color: '#D32F2F',
        bg: '#FFEBEE',
    },
];

const WhyUs = () => {
    return (
        <section id="why-us" style={{ padding: '6rem 2rem', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}> {/* Right align container */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'right', marginBottom: '4rem', maxWidth: '600px' }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700'
                    }}>Why Choose Us?</h2>
                    <div style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-haldi)', borderRadius: '2px', marginLeft: 'auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '800px', // Limit width to keep it on the left side mostly
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }} // Slide from right
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                padding: '2rem',
                                borderRadius: '20px',
                                backgroundColor: feature.bg,
                                borderLeft: `5px solid ${feature.color}`,
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                textAlign: 'left',
                            }}
                        >
                            <div style={{
                                color: feature.color,
                                padding: '1.5rem',
                                background: '#fff',
                                borderRadius: '50%',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}>
                                {feature.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: feature.color, marginBottom: '0.5rem' }}>{feature.title}</h3>
                                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
