const path = require("path");

module.exports = {
    development: {
        client: 'sqlite3', //Banco de dados utilizado
        connection: {
            filename: path.resolve(__dirname, "src", "database", "database.db") //Local do banco de dados
        },
        pool: {
            afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) //Linha para que funcione o 'CASCADE' na exclusão de uma nota
        },
        migrations: {
            directory: path.resolve(__dirname, "src", "database", "knex", "migrations") //Local dos migrations (knex)
        },
        useNullAsDefault: true
    }
};