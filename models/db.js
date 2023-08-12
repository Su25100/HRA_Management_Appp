const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../connect');

const Tasks = sequelize.define('HRA_App', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    basic_sal: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    HRA: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_metro: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    exempt_hra: {

        type: DataTypes.INTEGER,
        allowNull: true

    },

    rent_paid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


});

// Create the table in the database
Tasks.sync()
    .then(() => {
        console.log('HRA_App table created successfully');

    })
    .catch((err) => {
        console.error('Error creating HRA_App table:', err);

    });


module.exports = {
    Tasks,
    sequelize,

};