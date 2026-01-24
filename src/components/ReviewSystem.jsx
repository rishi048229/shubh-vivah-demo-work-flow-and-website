import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const ReviewSystem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user is near the bottom of the page (e.g., last 20% or within footer range)
            const scrollPosition = window.scrollY + window.innerHeight;
            const threshold = document.documentElement.scrollHeight - 800; // Adjust based on footer height
            
            setIsVisible(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here (e.g., API call)
        console.log("Review submitted:", reviewText);
        setReviewText('');
        setIsModalOpen(false);
        alert("Thank you for your feedback!");
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {isVisible && !isModalOpen && (
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            left: '30px',
                            zIndex: 99,
                            background: 'var(--color-maroon)',
                            color: 'var(--color-gold)',
                            border: '1px solid var(--color-gold)',
                            borderRadius: '50px',
                            padding: '12px 24px',
                            fontWeight: '600',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        <MessageSquare size={20} /> Review Us
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        {/* Backdrop with Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                            }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{
                                background: '#fff',
                                padding: '2rem',
                                borderRadius: '20px',
                                width: '100%',
                                maxWidth: '500px',
                                position: 'relative',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                border: '1px solid rgba(128, 0, 0, 0.1)'
                            }}
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#666'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <h3 style={{
                                fontFamily: 'var(--font-royal)',
                                color: 'var(--color-maroon)',
                                fontSize: '1.8rem',
                                marginBottom: '0.5rem'
                            }}>
                                We Value Your Feedback
                            </h3>
                            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Help us improve your experience. Tell us what you need or how we can do better.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <textarea
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Write your review or suggestions here..."
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #ddd',
                                        marginBottom: '1.5rem',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '1rem',
                                        resize: 'vertical',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-maroon)'}
                                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    required
                                />

                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'var(--color-maroon)',
                                        color: 'var(--color-gold)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        transition: 'transform 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                >
                                    <Send size={18} /> Submit Review
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ReviewSystem;
