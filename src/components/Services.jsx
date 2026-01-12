

import React from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Heart, Calendar, Users, Truck, Camera, Palette, Utensils, Plane, Flower } from 'lucide-react';

const services = [
    { icon: <Heart size={24} />, title: 'Matching', color: 'var(--color-primary)' },
    { icon: <Calendar size={24} />, title: 'Planning', color: 'var(--color-secondary)' },
    { icon: <Users size={24} />, title: 'Vendors', color: 'var(--color-accent)' },
    { icon: <Truck size={24} />, title: 'Logistics', color: 'var(--color-primary)' },
    { icon: <Camera size={24} />, title: 'Photo', color: 'var(--color-secondary)' },
    { icon: <Palette size={24} />, title: 'Decor', color: 'var(--color-accent)' },
    { icon: <Utensils size={24} />, title: 'Food', color: 'var(--color-primary)' },
    { icon: <Plane size={24} />, title: 'Travel', color: 'var(--color-secondary)' },
];

const Services = () => {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = React.useState(0);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // Update active index based on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.floor(latest * services.length),
            services.length - 1
        );
        setActiveIndex(index);
    });

    return (
        <section ref={targetRef} id="services" style={{
            height: '300vh', // Tall track for scrolling
            position: 'relative',
            background: '#fff9c4'
        }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '1400px', width: '100%', position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>

                    {/* Rangoli Semicircle Container - LEFT SIDE */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: '-350px', // More visible
                            width: '900px',
                            height: '900px',
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, var(--color-kumkum), var(--color-haldi), var(--color-akashat), var(--color-kumkum), var(--color-haldi), var(--color-akashat), var(--color-kumkum))',
                            border: '15px solid var(--color-haldi)',
                            boxShadow: '0 0 80px rgba(0,0,0,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rotate: rotate,
                            zIndex: 1
                        }}
                    >
                        {/* Inner Decorative Layers */}
                        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', border: '4px dashed #fff', opacity: 0.6 }}></div>
                        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', border: '20px double var(--color-haldi)', opacity: 0.8 }}></div>
                        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, var(--color-haldi), var(--color-kumkum))', border: '5px dotted #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-decorative)',
                                color: '#fff',
                                fontSize: '3rem',
                                textAlign: 'center',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                Shubh<br />Vivah
                            </h2>
                        </div>

                        {/* Flower Decorations */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={`flower-${i}`}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    width: '40px',
                                    height: '40px',
                                    marginLeft: '-20px',
                                    marginTop: '-20px',
                                    transform: `rotate(${i * 30}deg) translate(250px) rotate(-${i * 30}deg)`,
                                }}
                            >
                                <Flower size={40} color="#fff" fill="var(--color-haldi)" />
                            </motion.div>
                        ))}

                        {/* Service Icons on Arc */}
                        {services.map((service, index) => {
                            const total = services.length;
                            const angleStep = 360 / total;
                            const angle = index * angleStep;
                            const radius = 380; // Distance from center

                            return (
                                <motion.div
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '80px',
                                        height: '80px',
                                        marginLeft: '-40px',
                                        marginTop: '-40px',
                                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            scale: activeIndex === index ? 1.5 : 1,
                                            borderColor: activeIndex === index ? '#fff' : service.color,
                                            backgroundColor: activeIndex === index ? service.color : '#fff',
                                            color: activeIndex === index ? '#fff' : service.color
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                            border: `3px solid`,
                                            rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
                                        }}
                                    >
                                        <div>{service.icon}</div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Content - RIGHT SIDE */}
                    <div style={{
                        marginLeft: 'auto',
                        width: '50%',
                        paddingLeft: '6rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 2
                    }}>
                        <motion.h2
                            style={{
                                fontSize: '4rem',
                                color: '#D32F2F',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '700',
                            }}
                        >
                            Our Services
                        </motion.h2>

                        {/* Dynamic Content Switching */}
                        <div style={{ height: '200px', position: 'relative' }}>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
                            >
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    color: services[activeIndex].color,
                                    marginBottom: '1rem',
                                    fontFamily: 'var(--font-decorative)'
                                }}>
                                    {services[activeIndex].title}
                                </h3>
                                <p style={{ fontSize: '1.4rem', color: '#555', lineHeight: '1.6' }}>
                                    We provide exceptional <strong>{services[activeIndex].title}</strong> services to make your special day perfect.
                                    Let us handle the details while you enjoy the moment.
                                </p>
                            </motion.div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <button style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                background: 'var(--color-kumkum)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(211, 47, 47, 0.4)',
                                fontWeight: 'bold',
                            }}>
                                Book {services[activeIndex].title}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
