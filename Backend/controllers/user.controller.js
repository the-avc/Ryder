const UserModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password } = req.body;
    const hashedPassword = await UserModel.hashPassword(password);
    const user = await userService.createUser({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password: hashedPassword
    });

    const token = user.generateToken();
    res.status(201).json({ user, token });
}

module.exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = user.generateToken();
    res.cookie('token', token);
    res.status(200).json({ user, token });
}

module.exports.getProfile = async (req, res, next) => {
    // const user = await UserModel.findById(req.user._id);
    // if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    // }
    res.status(200).json(req.user);
}

module.exports.logout = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlackListTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}

