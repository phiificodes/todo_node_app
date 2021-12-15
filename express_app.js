const express = require("express");
const server = express();
const mongoose = require("mongoose");
const todoController = require("./controllers/todoControllers");

const mongo_db_url =
  "mongodb+srv://phiificodes:ann-GtL4Ev@cluster0.broxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

todoController.server.get("/todos", todoController.getAllTodos);

server.post("/todos", todoController.insertTodo);

server.put("/todos", todoController.updateTodoById);

server.delete("/todos", todoController.deleteTodoById);

server.listen(4000, () => {
  console.log("Server started,running in express...");
  mongoose
    .connect(mongo_db_url)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((error) => {
      console.log(error);
    });
});
