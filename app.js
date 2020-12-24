// Import express, mongoose si dotenv

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

// Import rute din routes folder
const produseRoutes = require('./routes/produse.js');

// Middleware pentru fiecare clasa
app.use(bodyParser.json());
app.use('/produse', produseRoutes);


app.get('/', (req, res) => {
    res.send("We are on home");
})

// Conectare la cluster
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
    console.log("Connected");
})

// Pornire server express
app.listen(3000);