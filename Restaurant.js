const {sequelize, DataTypes, Model} = require('./db');

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    theme: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});

module.exports = {
    Restaurant
};