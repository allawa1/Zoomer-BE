require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000
const fetch = require('node-fetch')

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


//HEARTBEAT
app.get('/heartbeat', (req, res) => {
    res.json({
        is: "working"
    })
}) 

app.get('/categories', (req, res) => {
    //console.log(process.env.EB_TOKEN)
    let bearer = 'Bearer ' + process.env.EB_TOKEN; 
    let url = "https://www.eventbriteapi.com/v3/categories/"; 
    fetch(url, {
        method: 'GET', 
        headers: {
            "Authorization" : bearer, 
            'Content-Type': 'application/json',
        }
    })
        .then(result => result.json())
        .then(data => res.json(data))
        .catch(error => res.json({error: error}))
}) 

app.get('/popular-events', (req, res) => {
    res.json({
        data: "popular-events"
    })
}) 

app.get('/ongoing-events', (req, res) => {
    res.json({
        data: "ongoing-events"
    })
}) 

app.get('/popular-organizers', (req, res) => {
    res.json({
        data: "popular-organizers"
    })
}) 

app.get('/search', (req, res) => {
    res.json({
        data: "search"
    })
}) 