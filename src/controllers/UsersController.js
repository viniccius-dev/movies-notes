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

        return response.status(201).json();
    }

}

module.exports = UsersController;