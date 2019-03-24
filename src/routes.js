const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const UserController = require("./app/controllers/UserController");

routes.use(authMiddleware);

routes.post("/login", UserController.login);

routes.post("/create", UserController.create);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
