const express = require('express');
const router = express.Router(); 
const User = require('../Models/User');


router.get('/', (req, res)=>{
}); 

router.post('/', (req, res) => {
    const user = new User({
        Name: req.body.Name,
        email: req.body.email,
        token: req.body.token,
        Image: req.body.Image,
        ProviderId: req.body.ProviderId
    });
    user.save()
    .then(data => res.json(data))
    .catch(err => {
        res.json({message: err })
    })
}) 

module.exports = router; 