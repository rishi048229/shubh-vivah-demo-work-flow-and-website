import React from 'react';
import { motion } from 'framer-motion';

const IconWrapper = ({ children, color, size = 64 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1 }}
        style={{ overflow: 'visible' }}
    >
        {/* Outer Gold Ring */}
        <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.8" />
        <motion.circle 
            cx="50" cy="50" r="45" 
            stroke="#D4AF37" 
            strokeWidth="4" 
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Inner Content */}
        <g transform="translate(20, 20) scale(0.6)" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {children}
        </g>
        
        {/* Subtle Glow */}
        <circle cx="50" cy="50" r="30" fill={color} fillOpacity="0.05" filter="blur(10px)" />
    </motion.svg>
);

export const AriesIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Minimal Ram Horn Spiral */}
        <path d="M10 40 C10 20 30 10 50 40 C70 10 90 20 90 40 C90 60 70 70 50 50" />
        <path d="M50 50 V 90" />
    </IconWrapper>
);

export const TaurusIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Sacred Bull Head Outline */}
        <circle cx="50" cy="65" r="25" />
        <path d="M25 65 C25 30 10 20 10 10" />
        <path d="M75 65 C75 30 90 20 90 10" />
    </IconWrapper>
);

export const GeminiIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Twin Diya Flames */}
        <path d="M30 90 V 30" />
        <path d="M70 90 V 30" />
        <path d="M30 30 Q 10 10 30 0 Q 50 10 30 30" fill={color} fillOpacity="0.2" />
        <path d="M70 30 Q 50 10 70 0 Q 90 10 70 30" fill={color} fillOpacity="0.2" />
        <path d="M20 90 H 80" />
        <path d="M20 10 H 80" />
    </IconWrapper>
);

export const CancerIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Moon-Crab Hybrid */}
        <circle cx="35" cy="50" r="15" />
        <path d="M35 35 C 10 35 10 65 35 65" />
        <circle cx="65" cy="50" r="15" />
        <path d="M65 65 C 90 65 90 35 65 35" />
    </IconWrapper>
);

export const LeoIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Stylized Lion Sun Mane */}
        <circle cx="50" cy="50" r="15" />
        <path d="M50 35 Q 50 10 70 20 Q 90 30 80 50 Q 90 70 70 80 Q 50 90 50 65" />
        <path d="M30 70 Q 10 50 30 30" />
    </IconWrapper>
);

export const VirgoIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Feminine Leaf + Diya */}
        <path d="M30 20 Q 80 20 80 50 Q 80 80 50 80 Q 20 80 20 50" />
        <path d="M50 50 Q 60 40 70 50" />
        <path d="M50 80 V 95 M40 95 H 60" /> {/* Base */}
    </IconWrapper>
);

export const LibraIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Balance Scale with Lotus */}
        <path d="M10 80 H 90" />
        <path d="M30 80 C 30 60 70 60 70 80" />
        <path d="M50 70 V 20" />
        <path d="M20 20 H 80" />
        <path d="M20 20 L 10 40 H 30 L 20 20" />
        <path d="M80 20 L 70 40 H 90 L 80 20" />
    </IconWrapper>
);

export const ScorpioIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Curved Scorpion Tail */}
        <path d="M20 30 V 70" />
        <path d="M40 30 V 70" />
        <path d="M60 30 V 70 Q 60 90 80 80 Q 95 70 85 60 L 90 55" />
        <path d="M20 30 Q 30 10 40 30 Q 50 10 60 30" />
    </IconWrapper>
);

export const SagittariusIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Bow & Arrow Mandala */}
        <path d="M10 90 L 90 10" /> {/* Arrow Shaft */}
        <path d="M90 10 L 70 10 M 90 10 L 90 30" /> {/* Arrow Head */}
        <path d="M20 80 Q 50 50 80 80" /> {/* Bow */}
        <path d="M50 50 L 50 50" /> {/* Center Dot */}
    </IconWrapper>
);

export const CapricornIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Mythical Crocodile-Fish */}
        <path d="M30 30 V 60 Q 30 90 60 90 Q 90 90 90 60" />
        <path d="M30 30 Q 10 10 30 0" />
        <circle cx="70" cy="60" r="10" />
    </IconWrapper>
);

export const AquariusIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Sacred Water Pot Waves */}
        <path d="M10 40 Q 25 20 40 40 Q 55 60 70 40 Q 85 20 100 40" />
        <path d="M10 60 Q 25 40 40 60 Q 55 80 70 60 Q 85 40 100 60" />
    </IconWrapper>
);

export const PiscesIcon = ({ color }) => (
    <IconWrapper color={color}>
        {/* Two Koi-Style Fish Circle */}
        <path d="M30 10 Q 10 50 30 90" />
        <path d="M70 10 Q 90 50 70 90" />
        <path d="M10 50 H 90" />
    </IconWrapper>
);
