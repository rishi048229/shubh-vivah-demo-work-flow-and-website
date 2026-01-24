import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const AvailableSoon = () => {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'var(--color-ivory)',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ 
                    fontSize: '3rem', 
                    color: 'var(--color-maroon)', 
                    fontFamily: 'var(--font-cursive)',
                    marginBottom: '1rem'
                }}>
                    Available Soon
                </h1>
                <p style={{ 
                    fontSize: '1.2rem', 
                    color: 'var(--color-text-light)',
                    marginBottom: '2rem',
                    maxWidth: '600px'
                }}>
                    We are currently working on this feature. Please check back later!
                </p>
                
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    background: 'var(--color-maroon)',
                    color: 'var(--color-gold)',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(128,0,0,0.2)'
                }}>
                    <Home size={20} /> Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default AvailableSoon;
