const mongoose = require('mongoose');

const ProduseSchema = mongoose.Schema({
    titluProdus: {
        type: String,
        required: true
    },
    descriereProdus: {
        type: String,
        required: true
    },
    categorieProdus: {
        type: Number,
        required: true
    },
    pretProdus: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Produse', ProduseSchema);