const {sequelize, DataTypes, Model} = require('./db');

// Creates a Customer Table in our database
class Customer extends Model {
	//add custom methods for advanced querying
}

// Create attributes (columns) for our model
Customer.init({
	name: DataTypes.STRING, 
	order: DataTypes.STRING
}, {
	sequelize, // database our table is stored in
	timestamps: false
});

module.exports = { Customer }