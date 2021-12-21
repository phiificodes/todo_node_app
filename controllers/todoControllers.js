//import model into contoller
const todo = require("../models/todo");

//controller will perform serveral functions on a model,
async function insertTodo(req, res) {
  try {
    await todo.create(req.body).then(function (data) {
      res.status(200).json({ sucess: true });
    });
  } catch {
    (function (error) {
      res.status(401).json("Not created " + error.message);
    });
  }
}

function getAllTodos(req, res) {
  todo
    .find()
    .then(function (data) {
      res.status(200).json({ sucess: true, total: data.length, data });
    })
    .catch(function (error) {
      res.status(404).json({
        sucess: false,
        error: error.message,
      });
    });
}

function updateTodoById(req, res) {
  const _id = req.params.id;
  const { _isCompleted } = req.body;
  console.log(req.body);
  todo
    .findByIdAndUpdate(_id, { isCompleted: _isCompleted })
    .then(function (data) {
      res
        .status(200)
        .json({ success: true, message: data.title + " was updated" });
    });
}

function deleteTodoById(req, res) {
  const _id = req.params.id;
  todo
    .findByIdAndDelete(_id)
    .then(function () {
      res
        .status(200)
        .json({ success: true, message: "Todo is deleted successfully" });
    })
    .catch(function (error) {
      res.status(404).json({ success: false, message: error.message });
    });
}

function getTodoById(req, res) {
  // a request method with parameter is accessed in our fnx as req.params.id, where 'id' is
  // the specified name in our request string
  const id = req.params.id;
  todo
    .findById({ _id: id })
    .then(function (data) {
      res.status(200).json({
        success: true,
        data,
      });
    })
    .catch(function (error) {
      res.status(404).json({ success: false, message: error.message });
    });
}

// exporting multiple fnx
module.exports = {
  insertTodo,
  updateTodoById,
  deleteTodoById,
  getAllTodos,
  getTodoById,
};
