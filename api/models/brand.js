'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.hasMany(models.item)
    }
  }
  brand.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username must not be empty!"
        }
      }
    },
    image: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (brand, options) {
        brand.image = brand.image || "brand.png"
      }
    },
    sequelize,
    modelName: 'brand',
  });
  return brand;
};