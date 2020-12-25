// Import express, mongoose si dotenv
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

// Import rute din routes folder
const categoriiRoutes = require('./routes/categorii.js');
const produseRoutes = require('./routes/produse.js');
const vanzariRoutes = require('./routes/vanzari.js');
const retururiRoutes = require('./routes/retururi.js');

// Conectare la cluster
try {
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
        console.log("Connected");
    })
} catch (error) {
    console.log({message: error})
}


// Middleware pentru fiecare clasa
app.use('/api/categorii', categoriiRoutes);
app.use('/api/produse', produseRoutes);
app.use('/api/vanzari', vanzariRoutes);
app.use('/api/retururi', retururiRoutes);


app.get('/', (req, res) => {
    res.send("We are on home");
})

// Pornire server express
app.listen(3000);