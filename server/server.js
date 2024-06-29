const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mongoDBURL = require('./config.js');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); //Middleware for handling CORS Policy

// app.use(express.static(path.join(__dirname, '../dist')));


app.get('*', (req, res) => {
    console.log('Hit Server');
    res.sendFile(path.join(__dirname, '../client/src/index.html'));
});

// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('Connected to MDB');
//     })
//     .catch((error) => {
//         console.log(error);
//     });
app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    })




    