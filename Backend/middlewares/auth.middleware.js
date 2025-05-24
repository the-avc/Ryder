const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.auth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const blacklistedToken = await BlackListTokenModel.findOne({ token });
    if (blacklistedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}