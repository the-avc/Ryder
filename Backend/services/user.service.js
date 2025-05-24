const UserModel = require('../models/user.model');

module.exports.createUser = async ({
    fullName, email, password
}) => {
    if (!fullName || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = UserModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName
        },
        email,
        password
    })

    return user;
}
