const {sequelize} = require('../config/mySql');
const {DataTypes} = require('sequelize'); 

const User = sequelize.define(
    'usuarios',
    {
        nombre: { type: DataTypes.STRING, allowNull: false,},
        email: { type: DataTypes.STRING},
        contrasenna: { type: DataTypes.STRING, select: false,},
        tipo_id: { type: DataTypes.INTEGER },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = User;
    