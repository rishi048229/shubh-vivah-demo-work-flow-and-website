import React from 'react';

// Common props for all icons to ensure consistency
const defaultProps = {
    size: 24,
    color: "currentColor",
    strokeWidth: 2,
    className: ""
};

export const MandapIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Roof */}
        <path d="M2 12L12 2L22 12" />
        {/* Pillars */}
        <path d="M4 12V20" />
        <path d="M20 12V20" />
        <path d="M9 12V20" />
        <path d="M15 12V20" />
        {/* Base */}
        <path d="M2 20H22" />
        {/* Decor */}
        <path d="M12 2V5" />
    </svg>
);

export const CoupleIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Groom */}
        <circle cx="8" cy="7" r="3" />
        <path d="M3 18v-2a3 3 0 0 1 3-3h1" />
        {/* Bride */}
        <circle cx="16" cy="7" r="3" />
        <path d="M21 18v-2a3 3 0 0 0-3-3h-1" />
        {/* Connection */}
        <path d="M12 12h0" /> 
    </svg>
);

export const DiyaIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Flame */}
        <path d="M12 2C12 2 10 6 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 6 12 2 12 2Z" />
        {/* Lamp Base */}
        <path d="M4 14C4 14 5 19 12 19C19 19 20 14 20 14" />
        <path d="M2 14H22" />
    </svg>
);

export const KalashIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Pot */}
        <path d="M7 10C7 10 5 15 8 19C11 23 13 23 16 19C19 15 17 10 17 10" />
        {/* Neck */}
        <path d="M9 10H15" />
        {/* Coconut/Leaves */}
        <path d="M12 2C10 4 9 7 9 10" />
        <path d="M12 2C14 4 15 7 15 10" />
        <path d="M12 2V10" />
    </svg>
);

export const UserTilakIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        {/* Head */}
        <circle cx="12" cy="7" r="4" />
        {/* Body */}
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        {/* Tilak */}
        <path d="M12 5v2" strokeWidth={strokeWidth} />
    </svg>
);

// Re-exporting Lucide icons for consistency if needed, or we can use them directly.
// But for the specific requested ones (Chat, Heart, Exit), we can just use Lucide in the components.
