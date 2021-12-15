const mongoose = require("mongoose");

//create database schema using the structure of document(record) in mongoDB
const todoschema = mongoose.Schema(
  {
    title: String,
    description: String,
    deadline: Date,
    isCompleted: Boolean,
  },
  { timestamp: true } // keeps track of the data(document) updates
);

//create model
const todo = mongoose.model("todo", todoschema);
module.exports = todo;
//
