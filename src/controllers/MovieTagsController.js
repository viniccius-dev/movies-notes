const knex = require('../database/knex');

class MovieTagsController {

    async create(request,response) {
        const { tags } = request.body;
        const { user_id } = request.params;
        const { note_id } = request.query;
        
        //Revisar para tratativa de erro caso não encontre o note_id

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                user_id,
                name
            }
        })

        await knex("movie_tags").insert(tagsInsert);

        response.json();
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("movie_tags").where({ id }).delete();

        return response.json();
    }

}

module.exports = MovieTagsController;