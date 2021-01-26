const express = require('express');
const router = express.Router(); 
const Event = require('../Models/Event');

var bodyParser = require('body-parser')





router.get('/', (req, res)=>{
    Event.find({})
    .then(data => res.json(data))
}); 

router.get('/categories', (req,res)=>{
    res.send("categories")
})
router.post('/', (req, res)=>{
    const event = new Event({
        eventID: req.body.eventID,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date.toString(),
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


router.get('/art', (req, res)=>{
    Event.find({tag: "Art"})
    .then(data => res.json(data))
}); 

router.get('/volunteer', (req, res)=>{
    Event.find({tag: "Volunteer"})
    .then(data => res.json(data))
}); 

router.get('/education', (req, res)=>{
    Event.find({tag: "Education" })
    .then(data => res.json(data))
}); 

router.get('/career', (req, res)=>{
    Event.find({tag: "Career"}) 
    
    .then(data => res.json(data))
}); 

router.get('/today', (req, res)=>{
    function dateDisplayed(timestamp) {
        var date = new Date(timestamp);
        return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
    }
    Event.find({date: dateDisplayed(req.body.date)}) 
    
    .then(data => res.json(data))
    
}); 



module.exports = router; 