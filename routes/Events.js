const express = require('express');
const router = express.Router(); 
const Event = require('../Models/Event');


router.get('/', (req, res)=>{
    res.send('We are on Events');
}); 

router.post('/', (req, res)=>{
    console.log(req.body)
    
}); 



module.exports = router; 