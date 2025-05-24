const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
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
        unique: true,
        lowercase: true
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

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [7, 'Plate number must be at least 7 characters long'],
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be at least 1'],
        },
        type: {
            type: String,
            enum: ['car', 'bike', 'truck'],
            required: true
        }
    },
    location:{
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    }
});

captainSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};
const CaptainModel = mongoose.model('captain', captainSchema);
module.exports = CaptainModel;
// This model is used to store captain information in the database.
