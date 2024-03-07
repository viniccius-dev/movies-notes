const { Router } = require("express");

const tagsRoutes = Router();

const MovieTagsController = require("../controllers/MovieTagsController");

const movieTagsController = new MovieTagsController();

tagsRoutes.post("/:user_id", movieTagsController.create);
tagsRoutes.delete("/:id", movieTagsController.delete);

module.exports = tagsRoutes;