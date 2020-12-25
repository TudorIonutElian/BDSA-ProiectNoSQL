const mongoose = require('mongoose');

const ProduseSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    categorie: {
        type: Number,
        required: true
    },
    pret: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('product', ProduseSchema);