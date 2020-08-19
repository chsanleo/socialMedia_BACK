const jwt = require('jsonwebtoken');
const Utils = require('../utils/utils');
const Properties = require('../../config/properties');


const MainController = {

    async register(req, res) {
        try {
            let email = req.body.email;
            let emailDB = await User.findOne({ where: { email: email } });

            if (!Utils.isNullOrEmpty(emailDB)) { throw Error('The email is already used.'); }

            //create user with email and password
            let password = Utils.randomString(properties.MIN_LENGHT_PASSWORD);

            let user = {
                email  : email,
                password : await bcrypt.hash(password, properties.PASSWORDSALT)
            };

            //enviar email

            //create user
            //await User.create(user);
            res.status(201);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
};