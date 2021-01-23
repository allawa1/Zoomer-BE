const mongoose = require('mongoose'); 

const FormSchema = mongoose.Schema({
    Name: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        required: true
    }, 
    location: {
        type: String, 
        required: true
    },
    details: {
        type: String, 
        required: true
    }


}); 

module.exports = mongoose.model('Form', FormSchema); 