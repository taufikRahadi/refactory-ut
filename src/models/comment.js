'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, { as: 'post', foreignKey: 'postId' })
      Comment.belongsTo(models.Author, { as: 'author' ,foreignKey: 'authorId' })
    }
  };
  Comment.init({
    content: DataTypes.TEXT,
    status: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    url: DataTypes.STRING,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};