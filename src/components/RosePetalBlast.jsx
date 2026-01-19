import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const RosePetalBlast = () => {
    // Generate a large number of petals with random properties
    const petals = useMemo(() => {
        return [...Array(40)].map((_, i) => ({
            id: i,
            // Random angle for radial dispersion
            angle: Math.random() * 360,
            // Random distance to travel (enough to cover viewport)
            distance: 800 + Math.random() * 800,
            // Random size
            scale: 0.5 + Math.random() * 1.5,
            // Random rotation
            rotation: Math.random() * 360,
            // Random color variant (Red, Maroon, Darker Maroon)
            color: ['#800000', '#A52A2A', '#500000'][Math.floor(Math.random() * 3)],
            // Random delay for natural feeling
            delay: Math.random() * 0.5
        }));
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 0,
            height: 0,
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    whileInView={{
                        x: Math.cos(petal.angle * Math.PI / 180) * petal.distance,
                        y: Math.sin(petal.angle * Math.PI / 180) * petal.distance,
                        opacity: [0, 1, 1, 0], // Fade in, stay, fade out
                        scale: petal.scale,
                        rotate: petal.rotation + 360 // Spin while moving
                    }}
                    viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
                    transition={{
                        duration: 2 + Math.random(), // 2-3 seconds
                        ease: "easeOut",
                        delay: petal.delay
                    }}
                    style={{
                        position: 'absolute',
                        width: '30px',
                        height: '30px'
                    }}
                >
                    {/* SVG Petal Shape */}
                    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M15 0C15 0 10 10 5 15C0 20 5 30 15 30C25 30 30 20 25 15C20 10 15 0 15 0Z" 
                            fill={petal.color}
                            fillOpacity="0.8"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default RosePetalBlast;
