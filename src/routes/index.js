const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes");
const movieNotes = require("./movieNotes.routes");
const movieTags = require("./tags.routes");


routes.use("/users", usersRouter);
routes.use("/notes", movieNotes);
routes.use("/tags", movieTags);

module.exports = routes;