const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const CaptainController = require('../controllers/captain.controller');
const CaptainModel = require('../models/captain.model');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('Full name must be at least 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 7 }).withMessage('Plate number must be at least 7 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.type').isIn(['car', 'bike', 'truck']).withMessage('Invalid vehicle type'),
], CaptainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], CaptainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain, CaptainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, CaptainController.logoutCaptain);

module.exports = router;