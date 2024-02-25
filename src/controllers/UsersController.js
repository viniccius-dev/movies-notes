//require bcryptjs
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {

    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExist) {
            throw new AppError("Esse email já está em uso.")
        }

        //Criptografar a senha

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password] //Modificar para senha criptografada
        )

        return response.status(201).json();
    }

}

module.exports = UsersController;