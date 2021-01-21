const mongoose = require('mongoose'); 

const UserSchema = mongoose.Schema({
    Name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    }, 
    token: {
        type: String, 
        required: true
    }, 
    Image: {
        data: Buffer, 
        contentType: String
    },
    ProviderId: {
        type: String, 
        required: true
    }


}); 

module.exports = mongoose.model('Users', UserSchema); 