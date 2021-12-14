const express = require("express");
const mongoose = require("mongoose");
const server = express();

const mongo_db_url =
  "mongodb+srv://phiificodes:Z9AJ-h&D(^daTa%@cluster0.broxc.mongodb.net/todos_db?retryWrites=true&w=majority";

server.get("/student", function (req, res) {
  res.status(200).json("You made a GET request to get ALL student");
});

server.post("/student", function (req, res) {
  res.status(200).json("You made a POST request to add a student");
});

server.put("/student", function (req, res) {
  res.status(200).json("You made a PUT request to MODIFY a student");
});

server.delete("/student", function (req, res) {
  res.status(200).json("You made a delete request to remove a studnet");
});

server.patch("/student", function (req, res) {
  res.status(200).json("You made a PATCH request to update a student");
});

server.listen(4000, () => {
  console.log("Server started,running in express...");
});
