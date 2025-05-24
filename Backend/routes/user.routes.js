const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('Full name must be at least 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], userController.register);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], userController.login);

router.get('/profile', authMiddleware.auth, userController.getProfile);

router.get('/logout', authMiddleware.auth, userController.logout);

module.exports = router;