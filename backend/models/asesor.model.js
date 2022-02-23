const mongoose = require('mongoose');

const AsesorSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, required: true },
    document: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('asesor', AsesorSchema);