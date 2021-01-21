require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000
const fetch = require('node-fetch')
const eventRoutes = require('./routes/Events')

const testAPIRouter = require('./routes/testAPI')


const bodyParser = require('body-parser')




const userRoutes = require('./routes/Users')

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/testAPI', testAPIRouter);

app.use(bodyParser.json());

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


// //HEARTBEAT
app.get('/heartbeat', (req, res) => {
    res.json({
        is: "working"
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





