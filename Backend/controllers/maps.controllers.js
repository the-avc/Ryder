const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinatesFromAddress = async (req, res) => {
    // Validate the request query parameters
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { address } = req.query;
    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const coordinates = await mapsService.getCoordinatesFromAddress(address);
        res.json(coordinates);
    } catch (error) {
        console.error('Error getting coordinates:', error);
        res.status(500).json({ error: 'Failed to get coordinates' });
    }
}

module.exports.getAddressFromCoordinates = async (req, res) => {
    // Validate the request query parameters
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const address = await mapsService.getAddressFromCoordinates(latitude, longitude);
        res.json(address);
    } catch (error) {
        console.error('Error getting address:', error);
        res.status(500).json({ error: 'Failed to get address' });
    }
}

module.exports.getDistanceBetweenCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Handle both singular and plural parameter names
    const origin = req.query.origins;
    const destination = req.query.destinations;
    
    console.log('Query parameters:', req.query);
    console.log('Processed parameters:', { origin, destination });
    
    if (!origin || !destination) {
        return res.status(400).json({ error: 'Origin and destination are required' });
    }
    try{
        const distance = await mapsService.getDistanceBetweenCoordinates(origin, destination);
        res.json(distance);
    }
    catch (error) {
        console.error('Error getting distance:', error);
        res.status(500).json({ error: 'Failed to get distance' });
    }
}

