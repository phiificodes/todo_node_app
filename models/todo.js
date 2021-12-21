const mongoose = require("mongoose");

//model is a structure/blueprint of our database
//using schema we create the structure of our db
const todoschema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description required"] },
    deadline: { type: Date },
    created: { type: Date, default: Date.now },
    isCompleted: { type: Boolean, required: [true, "is Todo Completed"] },
  },
  { timestamp: true } // keeps track of the data(document) updates
);

//create model and export
const todo = mongoose.model("todo", todoschema);
module.exports = todo;
