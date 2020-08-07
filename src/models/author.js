'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.hasMany(models.Post, { as: 'posts', foreignKey: 'authorId' })
      Author.hasMany(models.Comment, { as: 'comments', foreignKey: 'authorId' })
    }
  };
  Author.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] }
      }
    }
    // defaultScope: {
    //   attributes: { exclude: ['password'] }
    // }
  });
  return Author;
};