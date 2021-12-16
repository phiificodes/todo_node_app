const mongoose = require("mongoose");

//model is a structure/blueprint of our database
//using schema we create the structure of our db
const todoschema = mongoose.Schema(
  {
    title: String,
    description: String,
    deadline: Date,
    isCompleted: Boolean,
  },
  { timestamp: true } // keeps track of the data(document) updates
);

//create model and export
const todo = mongoose.model("todo", todoschema);
module.exports = todo;
