// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// npm install express
const express = require("express");

//Definitions required for controller file calls.
const usersController = require("./src/controllers/users-controller");
const albumsController = require("./src/controllers/albums-controller");
const todosController = require("./src/controllers/todos-controller");
/* 
 Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application).
 It's something like you are creating an object of a class. Where "express()" is just like class and app is it's newly created object. 
*/
const app = express();

//Application Middlewares
app.get("/users", usersController.getAllUsers);
app.get("/users/:id", usersController.getUserById);
app.get("/albums", albumsController.getAllAlbums);
app.get("/albums/:userId", albumsController.getAlbumsByUserId);
app.get("/todos", todosController.getAllTodos);
app.get("/todos/:userId", todosController.getTodosByUserId);

/*
The app.listen() function is used to bind and listen the connections on the specified host and port. 
This method is identical to Node’s http.Server.listen() method.
*/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
