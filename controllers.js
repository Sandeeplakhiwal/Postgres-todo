const pool = require("./db");

module.exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await pool.query("SELECT * from todo");
    res.status(200).json({
      success: true,
      todos: todos.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports.addTodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    await pool.query("INSERT INTO todo (description) values ($1)", [
      description,
    ]);
    res.status(201).json({ message: "Added new todo" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports.getTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(201).json({
      success: true,
      todo: todo.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const todo_id = req.params.id;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [todo_id]);
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateTodo = async (req, res, next) => {
  try {
    const todo_id = req.params.id;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      todo_id,
    ]);
    res.status(200).json({
      success: true,
      message: "Todo Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
