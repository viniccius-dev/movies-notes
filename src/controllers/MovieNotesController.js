const knex = require("../database/knex");

class MovieNotesController {

    async create(request, response) {
        const { title, description, rating } = request.body;
        const { user_id } = request.params;

        await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        });

        response.json();
    }

}

module.exports = MovieNotesController;