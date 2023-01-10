'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.hasMany(models.item)
    }
  }
  category.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username must not be empty!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};