const axios = require('axios');

/**
 * Simple maps service for geocoding operations
 */
const mapsService = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    baseUrl: 'https://maps.gomaps.pro/maps/api/geocode/json',

    /**
     * Get coordinates from an address
     */
    async getCoordinatesFromAddress(address) {
        if (!this.apiKey) {
            throw new Error('Google Maps API key is not configured');
        }

        try {
            const response = await axios.get(this.baseUrl, {
                params: { address, key: this.apiKey }
            });

            if (response.data.status === 'OK' && response.data.results.length > 0) {
                const location = response.data.results[0].geometry.location;
                return {
                    latitude: location.lat,
                    longitude: location.lng,
                    formattedAddress: response.data.results[0].formatted_address
                };
            }

            // Handle different API response statuses
            switch (response.data.status) {
                case 'ZERO_RESULTS':
                    throw new Error('No results found for this address');
                case 'OVER_QUERY_LIMIT':
                    throw new Error('API quota exceeded');
                case 'REQUEST_DENIED':
                    throw new Error('API request denied - check your API key');
                case 'INVALID_REQUEST':
                    throw new Error('Invalid request - check the address format');
                default:
                    throw new Error(`Geocoding failed: ${response.data.status}`);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('API Error Response:', error.response.data);
                throw new Error(`API Error: ${error.response.data.error_message || error.response.statusText}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                throw new Error('No response received from Google Maps API');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
                throw error;
            }
        }
    },

    /**
     * Get address from coordinates
     */
    async getAddressFromCoordinates(latitude, longitude) {
        if (!this.apiKey) {
            throw new Error('Google Maps API key is not configured');
        }

        try {
            const response = await axios.get(this.baseUrl, {
                params: { latlng: `${latitude},${longitude}`, key: this.apiKey }
            });

            if (response.data.status === 'OK' && response.data.results.length > 0) {
                return {
                    address: response.data.results[0].formatted_address,
                    addressComponents: response.data.results[0].address_components
                };
            }

            // Handle different API response statuses
            switch (response.data.status) {
                case 'ZERO_RESULTS':
                    throw new Error('No results found for these coordinates');
                case 'OVER_QUERY_LIMIT':
                    throw new Error('API quota exceeded');
                case 'REQUEST_DENIED':
                    throw new Error('API request denied - check your API key');
                case 'INVALID_REQUEST':
                    throw new Error('Invalid request - check the coordinates format');
                default:
                    throw new Error(`Geocoding failed: ${response.data.status}`);
            }
        } catch (error) {
            if (error.response) {
                console.error('API Error Response:', error.response.data);
                throw new Error(`API Error: ${error.response.data.error_message || error.response.statusText}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                throw new Error('No response received from Google Maps API');
            } else {
                console.error('Error setting up request:', error.message);
                throw error;
            }
        }
    },

    /**
     * Get distance between two coordinates
     */
    async getDistanceBetweenCoordinates(origin, destination) {
        if (!this.apiKey) {
            throw new Error('Google Maps API key is not configured');
        }
        try {
            const response = await axios.get('https://maps.gomaps.pro/maps/api/distancematrix/json', {
                params: {
                    destinations: destination,
                    origins: origin,
                    key: this.apiKey
                }
            });

            if (response.data.status === 'OK' && response.data.rows.length > 0) {
                const element = response.data.rows[0].elements[0];
                if (element.status === 'OK') {
                    return {
                        distance: element.distance.text,
                        duration: element.duration.text
                    };
                } else {
                    throw new Error(`Distance calculation failed: ${element.status}`);
                }
            }

            // Handle different API response statuses
            switch (response.data.status) {
                case 'ZERO_RESULTS':
                    throw new Error('No results found for these coordinates');
                case 'OVER_QUERY_LIMIT':
                    throw new Error('API quota exceeded');
                case 'REQUEST_DENIED':
                    throw new Error('API request denied - check your API key');
                case 'INVALID_REQUEST':
                    throw new Error('Invalid request - check the coordinates format');
                default:
                    throw new Error(`Distance calculation failed: ${response.data.status}`);
            }
        } catch (error) {
            if (error.response) {
                console.error('API Error Response:', error.response.data);
                throw new Error(`API Error: ${error.response.data.error_message || error.response.statusText}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                throw new Error('No response received from Google Maps API');
            } else {
                console.error('Error setting up request:', error.message);
                throw error;
            }
        }
    }

};

module.exports = mapsService;
