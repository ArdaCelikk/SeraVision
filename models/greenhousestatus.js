'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class greenhousestatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  greenhousestatus.init({
    temperature: DataTypes.FLOAT,
    light: DataTypes.FLOAT,
    humadity: DataTypes.FLOAT,
    soilhumadity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'greenhousestatus',
  });
  return greenhousestatus;
};