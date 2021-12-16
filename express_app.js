const express = require("express"); //import express server package
const mongoose = require("mongoose"); //import mongoDB package
const todoController = require("./controllers/todoControllers"); // import controller into server

const server = express(); //create instance of express server package
const mongo_db_todos_url =
  "mongodb+srv://phiificodes:ann-GtL4Ev@cluster0.broxc.mongodb.net/todos_db?retryWrites=true&w=majority";

server.use(express.json());
server.listen(4000, function () {
  console.log("Server started,running in express...");
  mongoose
    .connect(mongo_db_todos_url)
    .then(function () {
      console.log("DB is connected");
      // server.get("/todos", todoController.getAllTodos);
      server.get("/todo", todoController.getTodoById);
      server.post("/todo", todoController.insertTodo);
      server.put("/todo", todoController.updateTodoById);
      server.delete("/todo", todoController.deleteTodoById);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
