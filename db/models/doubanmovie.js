'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoubanMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DoubanMovie.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoubanMovie',
    timestamps: false
  });
  return DoubanMovie;
};