const mongoose = require('mongoose');

const ReturSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('retur', ReturSchema);