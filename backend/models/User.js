const mongoose = require('mongoose');

// ne permettre qu'une utilisation unique par adresse mail 
const uniqueValidator = require('mongoose-unique-validator');

// schéma user 
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);