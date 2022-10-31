const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String 
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
