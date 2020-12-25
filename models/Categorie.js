const mongoose = require('mongoose');

const CategorieSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categori', CategorieSchema);