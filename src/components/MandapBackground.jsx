import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MandapBackground = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Curtain Animation Variants
    const curtainLeft = {
        closed: { x: "0%" },
        open: { x: "-100%", transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] } }
    };

    const curtainRight = {
        closed: { x: "0%" },
        open: { x: "100%", transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className="mandap-container" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            zIndex: 0, overflow: 'hidden'
        }}>
            {/* CURTAIN REVEAL */}
            <motion.div 
                className="curtain-wrapper"
                initial="closed"
                whileInView="open"
                viewport={{ once: true, amount: 0.3 }}
                style={{ position: 'absolute', inset: 0, zIndex: 20, display: 'flex', pointerEvents: 'none' }}
            >
                {/* Left Curtain */}
                <motion.div 
                    variants={curtainLeft}
                    style={{ 
                        flex: 1, 
                        background: 'linear-gradient(90deg, #800000 0%, #5a0000 100%)',
                        boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)',
                        transformOrigin: 'left'
                    }}
                >
                    {/* Silk Folds */}
                    <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 80px)' }}></div>
                </motion.div>

                {/* Right Curtain */}
                <motion.div 
                    variants={curtainRight}
                    style={{ 
                        flex: 1, 
                        background: 'linear-gradient(-90deg, #800000 0%, #5a0000 100%)',
                        boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)',
                        transformOrigin: 'right'
                    }}
                >
                    {/* Silk Folds */}
                    <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(-90deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 80px)' }}></div>
                </motion.div>
            </motion.div>

            {/* MANDAP SCENE REMOVED - ONLY CURTAINS REMAIN */}
        </div>
    );
};

export default MandapBackground;
