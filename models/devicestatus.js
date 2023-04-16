'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devicestatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  devicestatus.init({
    heater: DataTypes.BOOLEAN,
    fan: DataTypes.BOOLEAN,
    watering: DataTypes.BOOLEAN,
    light: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'devicestatus',
  });
  return devicestatus;
};