const CaptainModel = require('../models/captain.model');
const CaptainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password, vehicle } = req.body;

    const existingCaptain = await CaptainModel.findOne({ email });
    if (existingCaptain) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await CaptainModel.hashPassword(password);
    const captain = await CaptainService.createCaptain({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            type: vehicle.type
        }
    });
    const token = captain.generateToken();
    res.status(201).json({ captain, token });
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const captain = await CaptainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateToken();
    res.cookie('token', token);
    res.status(200).json({ captain, token });
}

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(400).json({ message: 'Unauthorized' });
    }
    try {
        // Try to insert, but ignore duplicate key error
        await BlackListTokenModel.create({ token });
    } catch (err) {
        if (err.code !== 11000) { // 11000 is duplicate key error code
            return res.status(500).json({ message: 'Internal server error' });
        }
        // If duplicate, just continue
    }
    res.status(200).json({ message: 'Logged out successfully' });
}