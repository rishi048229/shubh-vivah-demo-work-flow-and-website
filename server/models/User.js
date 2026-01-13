const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "" },

    // Profile Details
    age: { type: String, default: "" },
    height: { type: String, default: "" },
    location: { type: String, default: "" },
    education: { type: String, default: "" },
    occupation: { type: String, default: "" },
    income: { type: String, default: "" },
    religion: { type: String, default: "" },
    caste: { type: String, default: "" },
    familyType: { type: String, default: "Nuclear" },
    bio: { type: String, default: "" },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
