import React from 'react';
import { motion } from 'framer-motion';

const ServicesBackground = () => {
    // Animation Variants
    const float = {
        animate: { y: [0, -15, 0] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    };

    const sway = {
        animate: { rotate: [-3, 3, -3] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
    };

    const pulse = {
        animate: { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    };

    return (
        <div className="services-background" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            zIndex: 0, pointerEvents: 'none', overflow: 'hidden'
        }}>
            {/* LEFT SIDE: Photographer, Decorator, Shehnai */}
            <div className="bg-element bg-left" style={{ position: 'absolute', left: '2%', top: '10%', width: '400px', height: '800px' }}>
                
                {/* ISOMETRIC CAMERA (Bigger & Clearer) */}
                <motion.div className="photographer-scene" {...float} style={{ position: 'absolute', top: '5%', left: '10%' }}>
                    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" style={{ transform: 'rotate(-10deg)' }}>
                        <rect x="15" y="30" width="70" height="45" rx="8" fill="#800000" fillOpacity="0.15" stroke="#800000" strokeWidth="2.5" />
                        <circle cx="50" cy="52" r="18" stroke="#D4AF37" strokeWidth="3" fill="rgba(255,255,255,0.2)" />
                        <rect x="60" y="18" width="15" height="12" fill="#800000" fillOpacity="0.2" />
                        <motion.circle 
                            cx="75" cy="25" r="6" fill="#fff" 
                            animate={{ opacity: [0, 1, 0], scale: [1, 2.5, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                        />
                    </svg>
                </motion.div>

                {/* SHEHNAI (New Element) */}
                <motion.div className="shehnai-scene" {...sway} style={{ position: 'absolute', top: '30%', left: '50%', transformOrigin: 'center' }}>
                    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" style={{ transform: 'rotate(45deg)' }}>
                        <path d="M20 80 L80 20 L90 30 L30 90 Z" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="2" />
                        <circle cx="25" cy="85" r="10" fill="#800000" fillOpacity="0.2" />
                        <line x1="30" y1="70" x2="40" y2="60" stroke="#800000" strokeWidth="2" />
                        <line x1="45" y1="55" x2="55" y2="45" stroke="#800000" strokeWidth="2" />
                    </svg>
                </motion.div>

                {/* DRAPES & FLOWERS (Larger) */}
                <motion.div className="decorator-scene" {...sway} style={{ position: 'absolute', top: '55%', left: '0%', transformOrigin: 'top center' }}>
                    <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
                        <path d="M0 0 Q100 120 200 0" stroke="#D4AF37" strokeWidth="3" fill="none" opacity="0.4" />
                        <path d="M20 0 Q100 100 180 0" stroke="#800000" strokeWidth="2" fill="none" opacity="0.3" />
                        
                        {/* Hanging Flowers */}
                        <motion.g animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                            <line x1="100" y1="60" x2="100" y2="180" stroke="#D4AF37" strokeWidth="2" />
                            <circle cx="100" cy="190" r="8" fill="#800000" opacity="0.7" />
                            <circle cx="100" cy="210" r="8" fill="#D4AF37" opacity="0.7" />
                            <circle cx="100" cy="230" r="8" fill="#800000" opacity="0.7" />
                        </motion.g>
                    </svg>
                </motion.div>
            </div>

            {/* RIGHT SIDE: Gifts, Rings, Kalash, Dhol */}
            <div className="bg-element bg-right" style={{ position: 'absolute', right: '2%', top: '10%', width: '400px', height: '800px' }}>
                
                {/* ISOMETRIC GIFT BOX (Bigger) */}
                <motion.div className="gift-scene" {...float} style={{ position: 'absolute', top: '10%', right: '15%' }}>
                    <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
                        <path d="M20 40 L50 25 L80 40 L50 55 Z" fill="#FFF8E1" stroke="#D4AF37" strokeWidth="2" />
                        <path d="M20 40 L20 70 L50 85 L50 55 Z" fill="#FFF5F5" stroke="#D4AF37" strokeWidth="2" />
                        <path d="M80 40 L80 70 L50 85 L50 55 Z" fill="#FFE0E0" stroke="#D4AF37" strokeWidth="2" />
                        <path d="M50 25 L50 55 M20 40 L80 40" stroke="#800000" strokeWidth="2" opacity="0.6" />
                    </svg>
                </motion.div>

                {/* KALASH (New Element) */}
                <motion.div className="kalash-scene" style={{ position: 'absolute', top: '35%', right: '40%' }}>
                    <motion.svg width="100" height="120" viewBox="0 0 100 120" fill="none"
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path d="M30 40 Q50 100 70 40 L30 40 Z" fill="#D4AF37" fillOpacity="0.3" stroke="#D4AF37" strokeWidth="2" />
                        <circle cx="50" cy="30" r="15" fill="#800000" fillOpacity="0.2" />
                        <path d="M35 30 L65 30" stroke="#800000" strokeWidth="2" />
                    </motion.svg>
                </motion.div>

                {/* WEDDING RINGS (Bigger & Pulsing) */}
                <motion.div className="rings-scene" {...pulse} style={{ position: 'absolute', top: '50%', right: '10%' }}>
                    <svg width="90" height="60" viewBox="0 0 60 40" fill="none">
                        <circle cx="20" cy="20" r="18" stroke="#D4AF37" strokeWidth="4" />
                        <circle cx="40" cy="20" r="18" stroke="#D4AF37" strokeWidth="4" />
                        <path d="M20 5 L25 10 M35 10 L40 5" stroke="#fff" strokeWidth="2" opacity="0.8" />
                    </svg>
                </motion.div>

                {/* DHOL (New Element) */}
                <motion.div className="dhol-scene" {...sway} style={{ position: 'absolute', bottom: '15%', right: '20%' }}>
                    <svg width="130" height="100" viewBox="0 0 100 80" fill="none">
                        <ellipse cx="20" cy="40" rx="10" ry="25" fill="#800000" fillOpacity="0.3" stroke="#800000" strokeWidth="2" />
                        <ellipse cx="80" cy="40" rx="10" ry="25" fill="#800000" fillOpacity="0.3" stroke="#800000" strokeWidth="2" />
                        <path d="M20 15 L80 15 M20 65 L80 65" stroke="#D4AF37" strokeWidth="2" />
                        <line x1="25" y1="20" x2="75" y2="60" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                        <line x1="25" y1="60" x2="75" y2="20" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesBackground;
