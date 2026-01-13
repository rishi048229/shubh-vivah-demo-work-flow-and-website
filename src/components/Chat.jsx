import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import { Send, Search, Phone, Video, MoreVertical, Paperclip, ArrowLeft } from "lucide-react";
import { MOCK_PROFILES } from "../data";
// Socket removed for Frontend-Only mode

export default function Chat() {
    const navigate = useNavigate();
    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const messagesEndRef = useRef(null);

    // Load User
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    // Load Messages for Selected Contact
    useEffect(() => {
        if (selectedContact && currentUser) {
            const myId = (currentUser.email || "").toString(); // Use email as stable ID for mock
            const otherId = (selectedContact.id || selectedContact.email).toString();

            const allMessages = JSON.parse(localStorage.getItem("chat_messages") || "[]");

            const conversation = allMessages.filter(m =>
                (m.senderId === myId && m.receiverId === otherId) ||
                (m.senderId === otherId && m.receiverId === myId)
            );

            setMessages(conversation);
        }
    }, [selectedContact, currentUser]);

    // Scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim() === "" || !selectedContact || !currentUser) return;

        const myId = (currentUser.email || "").toString();
        const otherId = (selectedContact.id || selectedContact.email).toString();

        const messageData = {
            senderId: myId,
            receiverId: otherId,
            content: inputMessage,
            timestamp: new Date().toISOString(),
        };

        // 1. Update Local State
        setMessages((prev) => [...prev, messageData]);

        // 2. Save to "Database"
        const allMessages = JSON.parse(localStorage.getItem("chat_messages") || "[]");
        localStorage.setItem("chat_messages", JSON.stringify([...allMessages, messageData]));

        setInputMessage("");

        // Simulate Reply (Optional Fun)
        setTimeout(() => {
            const replyData = {
                senderId: otherId,
                receiverId: myId,
                content: "This is an automated mock reply! 👋",
                timestamp: new Date().toISOString(),
            };
            setMessages(prev => [...prev, replyData]);
            const updatedMsgs = JSON.parse(localStorage.getItem("chat_messages") || "[]");
            localStorage.setItem("chat_messages", JSON.stringify([...updatedMsgs, replyData]));
        }, 1500);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSendMessage();
    };

    return (
        <div className="chat-container">
            {/* SIDEBAR */}
            <div className={`chat-sidebar ${selectedContact ? 'mobile-hidden' : ''}`}>
                <div className="sidebar-header">
                    <h2>Messages</h2>
                    <div className="search-bar">
                        <Search size={18} />
                        <input type="text" placeholder="Search chats..." />
                    </div>
                </div>

                <div className="contacts-list">
                    {MOCK_PROFILES.map((profile) => (
                        <div
                            key={profile.id}
                            className={`contact-item ${selectedContact?.id === profile.id ? 'active' : ''}`}
                            onClick={() => setSelectedContact(profile)}
                        >
                            <div className="contact-avatar">
                                <img src={profile.image} alt={profile.name} />
                                <span className="online-status"></span>
                            </div>
                            <div className="contact-info">
                                <h4>{profile.name}</h4>
                                <p>Click to chat...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CHAT WINDOW */}
            <div className={`chat-window ${!selectedContact ? 'mobile-hidden' : ''}`}>
                {selectedContact ? (
                    <>
                        <div className="chat-header">
                            <button className="back-btn-mobile" onClick={() => setSelectedContact(null)}>
                                <ArrowLeft size={24} />
                            </button>
                            <div className="header-user">
                                <img src={selectedContact.image} alt={selectedContact.name} />
                                <div>
                                    <h3>{selectedContact.name}</h3>
                                    <span>Online</span>
                                </div>
                            </div>
                            <div className="header-actions">
                                <Phone size={20} />
                                <Video size={20} />
                                <MoreVertical size={20} />
                            </div>
                        </div>

                        <div className="messages-area">
                            {messages.map((msg, index) => {
                                const myId = (currentUser?.id || currentUser?.email || "").toString();
                                const isMe = msg.senderId === myId;
                                return (
                                    <div key={index} className={`message ${isMe ? "sent" : "received"}`}>
                                        <div className="bubble">
                                            {msg.content}
                                            <span className="time">
                                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="message-input-area">
                            <Paperclip size={24} className="attach-icon" />
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button className="send-btn" onClick={handleSendMessage}>
                                <Send size={20} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="no-chat-selected">
                        <div className="placeholder-content">
                            <h2>Select a user to start chatting</h2>
                            <p>Secure, real-time conversations with your matches.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
