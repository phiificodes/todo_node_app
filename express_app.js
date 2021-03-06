require("dotenv").config();
const express = require("express"); //import express server package
const mongoose = require("mongoose"); //import mongoDB package
const todoController = require("./controllers/todoControllers"); // import controller into server

const server = express(); //create instance of express server package
const PORT = process.env.PORT || 4000;
// const mongo_db_todos_url = "";

server.use(express.json());

server.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Welcome to phiificodes node.js api",
  });
});
server.get("/todos", todoController.getAllTodos);
server.get("/todo/:id", todoController.getTodoById);
server.post("/todo", todoController.insertTodo);
server.put("/todo/:id", todoController.updateTodoById);
server.delete("/todo/:id", todoController.deleteTodoById);

server.listen(PORT, function () {
  console.log("Server started,running in express...");
  mongoose
    .connect(process.env.MONGO_DB_ATLAS_TODOS_URL)
    .then(function () {
      console.log("DB is connected");
    })
    .catch((error) => {
      console.log("DB is not connected: " + error.message);
    });
});
