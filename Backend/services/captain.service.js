const CaptainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    fullName, email, password, vehicle
}) => {
    if (!fullName || !email || !password || !vehicle) {
        throw new Error('All fields are required');
    }
    const captain = await CaptainModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            type: vehicle.type
        }
    });

    return captain;
}