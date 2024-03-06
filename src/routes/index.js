const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes");
const movieNotes = require("./movieNotes.routes");

routes.use("/users", usersRouter);
routes.use("/notes", movieNotes);

module.exports = routes;