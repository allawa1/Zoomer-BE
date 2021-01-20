const mongoose = require('mongoose'); 

const EventSchema = mongoose.Schema({
    eventID: {
        type: Number,
        required: true
    },
    title: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }, 
    location: {
        type: String, 
        required: true
    }, 
    host: {
        type: String, 
        required: true
    },
    formName: {
        type: String,
        required: true
    },
    formDate: {
        type: Date,
        required: true
    },
    formLocation: {
        type: String,
        required: false
    },
    formDetails: {
        type: String,
        required: true
    }

}); 




module.exports = mongoose.model('Events', EventSchema); 