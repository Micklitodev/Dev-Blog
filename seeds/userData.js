const { User } = require('../models')

const userData = [
    {
        username: 'sample122',
        email: 'sampleemail@gmail.com',
        password: 'password1212'
    }
]; 

const seedUser = () => User.bulkCreate(userData); 

module.exports = seedUser; 