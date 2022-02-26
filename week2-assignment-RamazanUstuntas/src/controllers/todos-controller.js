// to call our json data file.
const todos = require("../data/todos");

// it is a necessary Request-Response function to get the all todos and todos by query.
getAllTodos = (req, res) => {
  if (req.query.id) {
    const todo = todos.filter((todo) => todo.id == req.query.id);

    //if the result array is empty, return an error.
    todo.length
      ? res.send(todo)
      : res.status(400).send("Todo item was not found..");
  } else if (req.query.userId) {
    const userTodos = todos.filter(
      (userTodos) => userTodos.userId == req.query.userId
    );

    //if the result array is empty, return an error.
    userTodos.length
      ? res.send(userTodos)
      : res
          .status(400)
          .send("Todos belonging to this user has not been found..");
  } else {
    //if there is no valid query, return all the results.
    res.send(todos);
  }
};

// it is a necessary Request-Response function to get the todos by userId.
getTodosByUserId = (req, res) => {
  const userTodos = todos.filter(
    (userTodos) => userTodos.userId == req.params.userId
  );

  //if the result array is empty, return an error.
  userTodos.length
    ? res.send(userTodos)
    : res.status(400).send("Todos belonging to this user has not been found..");
};

// the export process required to open methods to external sources.
module.exports = { getAllTodos, getTodosByUserId };
