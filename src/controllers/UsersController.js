//require bcryptjs
//require apperror
//require sqliteConnection

class UsersController {

    async create(request, response) {
        const { name, email, password } = request.body;

        response.send(`
            User: ${name}.
            Email: ${email}.
            Password: ${password}.
        `);

        response.status(201).json({ name, email, password });
    }

}

module.exports = UsersController;