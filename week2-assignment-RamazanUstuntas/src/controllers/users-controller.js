// to call our json data file.
const users = require("../data/users");

// it is a necessary Request-Response function to get all the users and users by query.
// unlike others that fetch users can only be queried with the users id.
getAllUsers = (req, res) => {
  if (req.query.id) {
    const user = users.filter((user) => user.id == req.query.id);

    //if the result array is empty, return an error.
    user.length ? res.send(user) : res.status(400).send("User was not found..");
  } else {
    //if there is no valid query, return all the results.
    res.send(users);
  }
};
// it is a necessary Request-Response function to get the user by id.
getUserById = (req, res) => {
  const user = users.filter((user) => user.id == req.params.id);

  //if the result array is empty, return an error.
  user.length ? res.send(user) : res.status(400).send("User was not found..");
};

// the export process required to open methods to external sources.
module.exports = { getAllUsers, getUserById };
