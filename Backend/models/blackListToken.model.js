const mongoose = require('mongoose');

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24 // Token will expire after 24 hours (in seconds)
    }
});
const BlackListTokenModel = mongoose.model('blackListToken', blackListTokenSchema);
module.exports = BlackListTokenModel;
// This model is used to store blacklisted tokens in the database.
