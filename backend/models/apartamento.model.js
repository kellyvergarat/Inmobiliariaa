const mongoose = require('mongoose');

const ApartamentoSchema = new mongoose.Schema({
    rentPrice: { type: Number, required: true },
    description: { type: String },
    address: { type: String, lowercase: true, required: true, unique: true },
    picture: { type: String },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    location: { type: String, lowercase: true, required: true },
    visits: { type: Number},
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('apartamentos', ApartamentoSchema);