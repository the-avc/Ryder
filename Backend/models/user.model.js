const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            minlength: [3, 'First name must be at least 3 characters long'],
            required: true,
        },
        lastName: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    socketId: {
        type: String,
    },
});

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
