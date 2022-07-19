const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creates a Book class that inherits a bunch of features from the Model class
class Todo extends Model {}

// This will initialize our table for the Todo class
// 1st parameter is an object that contains what our table will look like
// 2nd parameter is a configuration for where this table and how this table will be created
Todo.init(
  {
    todo: {
      type: DataTypes.STRING,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    // this tells sequelize which database this table should be created for
    sequelize,
  // This will create 2 columns "created_at" and "updated_at" that is automatically
  //   managed by the database
    timestamps: true,
    modelName: 'todo',
  }
);

module.exports = Todo;