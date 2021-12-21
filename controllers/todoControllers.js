//import model into contoller
const todo = require("../models/todo");

//controller will perform serveral functions on a model,
async function insertTodo(req, res) {
  try {
    await todo.create(req.body).then(function (data) {
      res
        .status(201)
        .json({ sucess: true, mesaage: data.title + " is created" });
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
//various ways of writing the function
const getTodoById = async (req, res) => {
  // a request method with parameter is accessed in our fnx as req.params.id, where 'id' is
  // the specified name in our request string
  try {
    const _id = req.params.id;
    let data = await todo.findById(_id);

    console.log(data, _id);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

async function updateTodoById(req, res) {
  try {
    const _id = req.params.id;
    const { _isCompleted } = req.body;
    const data = await todo.findByIdAndUpdate(_id, {
      isCompleted: _isCompleted,
    });
    const newData = todo.findById(_id);
    res
      .status(200)
      .json({ success: true, message: newData.title + " was updated" });
  } catch (error) {
    res.status(404).json({
      sucess: false,
      error: error.message,
    });
  }
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

// exporting multiple fnx
module.exports = {
  insertTodo,
  updateTodoById,
  deleteTodoById,
  getAllTodos,
  getTodoById,
};
