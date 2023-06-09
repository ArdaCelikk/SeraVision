'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notifications.init({
    msgLevel: DataTypes.INTEGER,
    msgHeader: DataTypes.STRING,
    msg: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'notifications',
  });
  return notifications;
};