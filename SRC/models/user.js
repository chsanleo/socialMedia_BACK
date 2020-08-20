'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    pic_path: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    job: DataTypes.STRING,
    hobbies: DataTypes.STRING
  }, {
    paranoid: true,
    sequelize,
    modelName: 'User',
  });
  return User;
};