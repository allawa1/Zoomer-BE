const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//DATABASE CONNECTION
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

//PORT CONFIG
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});