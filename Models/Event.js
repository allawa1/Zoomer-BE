const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = require('./User');

const EventSchema = new Schema({
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
        required: true
    }, 
    location: {
        type: String, 
        required: true
    }, 
    userId: {
        type: String
    }, 
    tag: {
        type: String,
        required: false
    }

}); 




module.exports = mongoose.model('Events', EventSchema); 