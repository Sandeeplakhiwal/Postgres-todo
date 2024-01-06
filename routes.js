const express = require("express");
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodo,
} = require("./controllers.js");

const router = express.Router();

router.get("/todos", getAllTodos);

router.post("/todo/new", addTodo);

router.get("/todos/:id", getTodo);

router.put("/todo/:id", updateTodo);

router.delete("/todo/:id", deleteTodo);

module.exports = router;
