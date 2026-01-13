import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, Activity, ShieldCheck } from "lucide-react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalMessages: 0,
        recentUsers: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock Stats Calculation
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        // Sort by 'created' if available, else by reverse order
        const sortedUsers = [...users].reverse().slice(0, 5);

        setStats({
            totalUsers: users.length,
            totalMessages: 42, // Mock number
            recentUsers: sortedUsers.map(u => ({ ...u, createdAt: Date.now() })) // Add mock date if missing
        });
        setLoading(false);
    }, []);

    if (loading) return <div className="admin-container">Loading Dashboard...</div>;

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>System Overview & Statistics</p>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <Users className="stat-icon" />
                    <div className="stat-info">
                        <h3>Total Users</h3>
                        <p>{stats.totalUsers}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <MessageSquare className="stat-icon" />
                    <div className="stat-info">
                        <h3>Messages Sent</h3>
                        <p>{stats.totalMessages}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <Activity className="stat-icon" />
                    <div className="stat-info">
                        <h3>System Status</h3>
                        <p className="active-text" style={{ color: 'green', fontSize: '1.2rem' }}>Online</p>
                    </div>
                </div>

                <div className="stat-card">
                    <ShieldCheck className="stat-icon" />
                    <div className="stat-info">
                        <h3>Admin Access</h3>
                        <p style={{ fontSize: '1.2rem' }}>Verified</p>
                    </div>
                </div>
            </div>

            <section className="recent-users-section">
                <h2>Recently Joined Users</h2>
                <div className="table-responsive">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Joined Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.recentUsers.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td><span className="user-status">Active</span></td>
                                </tr>
                            ))}
                            {stats.recentUsers.length === 0 && (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: "center" }}>No users found yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

