import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Users, Heart, IndianRupee, CheckCircle } from 'lucide-react';

const AnimatedNumber = ({ value }) => {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
};

const Stats = () => {
    const stats = [
        {
            icon: <Heart size={32} />,
            value: 1000,
            suffix: '+',
            label: 'Happy Couples',
            color: 'var(--color-kumkum)',
            gradient: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)',
        },
        {
            icon: <Users size={32} />,
            value: 100000,
            suffix: '+',
            label: 'Verified Users',
            color: 'var(--color-akashat)',
            gradient: 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)',
        },
        {
            icon: <IndianRupee size={32} />,
            value: 0, // Special case for text
            text: 'Low Cost',
            label: 'Best in India',
            color: 'var(--color-haldi)',
            gradient: 'linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)',
        },
        {
            icon: <CheckCircle size={32} />,
            value: 100,
            suffix: '%',
            label: 'Success Rate',
            color: '#4CAF50',
            gradient: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)',
        },
    ];

    return (
        <section id="stats" style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '3rem',
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            style={{
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 0 20px ${stat.color}40`, // 40 is hex opacity
                                border: `4px solid ${stat.color}`,
                                textAlign: 'center',
                                padding: '1rem',
                                cursor: 'default',
                            }}
                        >
                            <div style={{
                                color: stat.color,
                                marginBottom: '0.5rem',
                            }}>
                                {stat.icon}
                            </div>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                color: 'var(--color-text)',
                                fontFamily: 'var(--font-heading)',
                                margin: 0,
                                lineHeight: 1,
                            }}>
                                {stat.text ? (
                                    stat.text
                                ) : (
                                    <>
                                        <AnimatedNumber value={stat.value} />
                                        {stat.suffix}
                                    </>
                                )}
                            </h3>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#666',
                                marginTop: '0.5rem',
                                fontWeight: '500',
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
