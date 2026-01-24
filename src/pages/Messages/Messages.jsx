import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, Video, MoreVertical, Paperclip, Smile, Send, CheckCheck, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Messages.css';
import { MOCK_PROFILES } from "../../data";

export default function Messages() {
    const [selectedChat, setSelectedChat] = useState(MOCK_PROFILES[0]);
    const [messageInput, setMessageInput] = useState("");
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [showChatArea, setShowChatArea] = useState(false);
    
    // Dummy messages state
    const [messages, setMessages] = useState([
        { id: 1, sender: 'them', text: "Namaste! I saw your profile and found it very interesting.", time: "10:30 AM", read: true },
        { id: 2, sender: 'me', text: "Namaste! Thank you. I liked your profile as well. What do you do?", time: "10:32 AM", read: true },
        { id: 3, sender: 'them', text: "I am a Software Engineer at Google. I love traveling and reading.", time: "10:35 AM", read: true },
        { id: 4, sender: 'me', text: "That's wonderful! I am an Architect. I enjoy painting in my free time.", time: "10:38 AM", read: true },
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const handleResize = () => setIsMobileView(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChatSelect = (profile) => {
        setSelectedChat(profile);
        if (isMobileView) setShowChatArea(true);
    };

    const handleBackToSidebar = () => {
        setShowChatArea(false);
    };

    const handleSend = () => {
        if (messageInput.trim()) {
            const newMsg = { 
                id: Date.now(), 
                sender: 'me', 
                text: messageInput, 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                read: false
            };
            setMessages([...messages, newMsg]);
            setMessageInput("");
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const bubbleVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <div className="messages-page-wrapper">
            <div className="messages-container">
                {/* SIDEBAR */}
                <aside className={`chat-sidebar ${isMobileView && showChatArea ? 'hidden' : ''}`}>
                    <div className="sidebar-header">
                        <h2>Messages</h2>
                        <button className="action-btn"><MoreVertical size={20} /></button>
                    </div>

                    <div className="search-bar">
                        <div className="search-input-wrapper">
                            <Search size={18} color="#888" />
                            <input type="text" placeholder="Search matches..." />
                        </div>
                    </div>

                    <motion.div 
                        className="chat-list"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {MOCK_PROFILES.slice(0, 8).map((profile, index) => (
                            <motion.div
                                key={profile.id}
                                variants={itemVariants}
                                className={`chat-item ${selectedChat?.id === profile.id ? 'active' : ''}`}
                                onClick={() => handleChatSelect(profile)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="chat-avatar">
                                    <img src={profile.image} alt={profile.name} />
                                    <span className="online-status"></span>
                                </div>
                                <div className="chat-info">
                                    <div className="chat-top">
                                        <span className="chat-name">{profile.name}</span>
                                        <span className="chat-time">10:30 AM</span>
                                    </div>
                                    <div className="chat-bottom">
                                        <p className="last-message">
                                            {index === 0 ? "That's wonderful! I am..." : "Hi! I liked your profile."}
                                        </p>
                                        {index === 1 && <span className="unread-badge">2</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </aside>

                {/* MAIN CHAT AREA */}
                <AnimatePresence mode="wait">
                    {selectedChat && (
                        <motion.main 
                            className={`chat-area ${showChatArea ? 'active' : ''}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <header className="chat-header">
                                <div className="chat-header-user">
                                    {isMobileView && (
                                        <button onClick={handleBackToSidebar} className="action-btn" style={{marginRight: '10px'}}>
                                            <ArrowLeft size={24} />
                                        </button>
                                    )}
                                    <div className="chat-avatar" style={{margin: 0}}>
                                        <img src={selectedChat.image} alt={selectedChat.name} style={{width: '45px', height: '45px'}} />
                                        <span className="online-status" style={{width: '10px', height: '10px'}}></span>
                                    </div>
                                    <div className="chat-header-info">
                                        <h3>{selectedChat.name}</h3>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <div className="chat-header-actions">
                                    <button className="action-btn"><Phone size={20} /></button>
                                    <button className="action-btn"><Video size={20} /></button>
                                    <button className="action-btn"><MoreVertical size={20} /></button>
                                </div>
                            </header>

                            <div className="messages-display">
                                {messages.map((msg) => (
                                    <motion.div 
                                        key={msg.id} 
                                        className={`message-bubble ${msg.sender}`}
                                        variants={bubbleVariants}
                                        initial="hidden"
                                        animate="visible"
                                        layout
                                    >
                                        <p>{msg.text}</p>
                                        <span className="msg-time">
                                            {msg.time}
                                            {msg.sender === 'me' && <CheckCheck size={14} color={msg.read ? "#53bdeb" : "#ccc"} />}
                                        </span>
                                    </motion.div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="message-input-area">
                                <button className="action-btn"><Smile size={24} /></button>
                                <button className="action-btn"><Paperclip size={24} /></button>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    />
                                    <button className="action-btn"><ImageIcon size={20} /></button>
                                </div>
                                <motion.button 
                                    className="send-btn" 
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </motion.main>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
