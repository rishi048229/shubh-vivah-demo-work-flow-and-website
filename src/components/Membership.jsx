import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';
import './Membership.css';

export default function Membership() {
    const plans = [
        {
            id: 1,
            name: "Gold",
            price: "Free",
            period: "Forever",
            icon: <Star size={32} />,
            features: [
                "Create Profile",
                "Browse Matches",
                "Send 5 Interests/day",
                "Basic Privacy Settings"
            ],
            buttonText: "Current Plan",
            recommended: false
        },
        {
            id: 2,
            name: "Diamond",
            price: "₹1,999",
            period: "3 Months",
            icon: <Shield size={32} />,
            features: [
                "All Gold Features",
                "Send Unlimited Interests",
                "View Contact Numbers (50)",
                "Profile Booster (1x/mo)",
                "Priority Support"
            ],
            buttonText: "Upgrade Now",
            recommended: true
        },
        {
            id: 3,
            name: "Platinum",
            price: "₹4,999",
            period: "12 Months",
            icon: <Crown size={32} />,
            features: [
                "All Diamond Features",
                "View Unlimited Contacts",
                "Relationship Manager",
                "Profile Booster (3x/mo)",
                "Highlighted Profile",
                "Verified Seal"
            ],
            buttonText: "Go Platinum",
            recommended: false
        }
    ];

    return (
        <div className="membership-container">
            <div className="membership-header">
                <h1>Invest in Your Future Happiness</h1>
                <p>Choose the plan that brings you closer to your soulmate.</p>
            </div>

            <div className="plans-grid">
                {plans.map((plan) => (
                    <div key={plan.id} className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
                        {plan.recommended && <div className="badge">Most Popular</div>}

                        <div className="plan-icon">
                            {plan.icon}
                        </div>

                        <h2 className="plan-name">{plan.name}</h2>
                        <div className="plan-price">
                            <span className="amount">{plan.price}</span>
                            {plan.period && <span className="period">/ {plan.period}</span>}
                        </div>

                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    <Check size={18} className="check-icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="plan-btn">
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
