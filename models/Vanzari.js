const mongoose = require('mongoose');

const VanzareSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('vanzari', VanzareSchema);