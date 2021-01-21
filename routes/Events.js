const express = require('express');
const router = express.Router(); 
const Event = require('../Models/Event');

var bodyParser = require('body-parser')

router.get('/', (req, res)=>{
    Event.find({})
    .then(data => res.json(data))
}); 

router.get('/categories', (req,res)=>{

})
router.post('/', (req, res)=>{
    const event = new Event({
        eventID: req.body.eventID,
        title: req.body.title,
        description: req.body.description,
        date: new Date(req.body.date).toDateString(),
        location: req.body.location,
        host: req.body.host,
        tag: req.body.tag
    });
    event.save()
    .then(data => res.json(data))
    .catch(err => {
        res.json({message: err })
    })
}); 



module.exports = router; 