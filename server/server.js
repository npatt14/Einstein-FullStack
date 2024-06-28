const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mongoDBURL = require('./config.js');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5006;

app.use(express.json());
app.use(cors()); //Middleware for handling CORS Policy
app.use(express.static(path.join(__dirname, '../client/src')));


app.use('*', (req, res) => {
    return res.status(200).send('Welcome to Einstein');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MDB');
        app.listen(PORT, () => {
            console.log(`app is listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });