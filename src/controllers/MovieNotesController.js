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

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("movie_notes").where({ id }).first();

        return response.json({
            ...note
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_notes").where({ id }).delete();

        return response.json();
    }
}

module.exports = MovieNotesController;