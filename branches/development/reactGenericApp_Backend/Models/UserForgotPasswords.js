const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// USER TOKEN SCHEMA:
module.exports = mongoose.model('UserForgotPassword', new Schema({

    UserEmail: {
        type: String,
        unique: true,
    },
    ResetToken: {
        type: String,
        unique: true,
    },
    timestamp: { type: Date, default: Date.now},
    
    updateDate: { type: Date, default: Date.now}
}))
