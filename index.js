const {sequelize, DataTypes, Model} = require('./db');

const { Restaurant } = require('./Restaurant');
const { Customer } = require('./Customer');


//Create our Association!
Customer.belongsTo(Restaurant) //adds a foreign key on the customer table, for the Rstaurant they belong to
Restaurant.hasMany(Customer) //gives us Sequelize magic methods

module.exports = { Restaurant, Customer }; // make sure we export our models with the associations added!
