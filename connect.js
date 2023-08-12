const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Add the hostname here (e.g., 'localhost')
    dialect: 'mysql',
});


// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to MySQL database');
    })
    .catch((err) => {
        console.error('Error connecting to MySQL:', err);
    });


module.exports = sequelize;