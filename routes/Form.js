const express = require('express');
const router = express.Router(); 
const Form = require('../Models/Event');



// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/form', (req, res)=>{
    Form.find({})
    .then(data => res.json(data))
}); 

// POST request for creating Genre.
router.post('/form', (req, res)=>{
    const form = new Form({
        EventName: req.body.EventName,
        EventDate: req.body.EventDate,
        EventLocation: req.body.EventLocation,
        EventDetails: req.body.EventDetails
    });
    form.save()
    .then(data => res.json(data))
    .catch(err => {
        res.json({message: err })
    })
}); 


module.exports = router; 