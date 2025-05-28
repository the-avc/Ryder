const express = require('express');
const router = express.Router();
const mapsService = require('../services/maps.service');
const authMiddleware = require('../middlewares/auth.middleware');
const mapsController = require('../controllers/maps.controllers');

router.get('/get-coordinates', authMiddleware.auth, mapsController.getCoordinatesFromAddress);
router.get('/get-address', authMiddleware.auth, mapsController.getAddressFromCoordinates);
router.get('/get-distance', authMiddleware.auth, mapsController.getDistanceBetweenCoordinates);

module.exports = router;
