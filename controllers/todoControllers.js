//import model into contoller
const todo = require("../models/todo");

//controller will perform serveral functions on a model,
function insertTodo(req, res) {
  console.log(req.body);
  todo
    .create(req.body)
    .then(function () {
      res.status(200).json("Data has been created");
    })
    .catch(function (error) {
      res.status(401).json("Not created " + error.message);
    });
}

function updateTodoById(params) {}
function deleteTodoById(params) {}

function getTodoById(req, res) {
  var searchTerm = req.body;
}
function getAllTodos(req, res) {
  res.send(res.body);
}

// exporting multiple fnx
module.exports = {
  insertTodo,
  updateTodoById,
  deleteTodoById,
  getAllTodos,
  getTodoById,
};
