const express = require('express');
const router = express.Router(); 
const Event = require('../Models/Event');


router.get('/', (req, res)=>{
    Event.find({})
    .then(data => res.json(data))
}); 

router.post('/', (req, res)=>{
    const event = new Event({
        eventID: req.body.eventID,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        host: req.body.host
    });
    event.save()
    .then(data => res.json(data))
    .catch(err => {
        res.json({message: err })
    })
}); 



module.exports = router; 