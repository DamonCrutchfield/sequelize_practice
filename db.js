const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', // type of sql
	storage : './restaurant.sqlite', //file location for our db
	logging: false
});

 module.exports={sequelize, DataTypes, Model};