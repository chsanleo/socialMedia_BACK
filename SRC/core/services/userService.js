const bcrypt = require('bcryptjs');

const Validations = require('../utils/validations');
const Utils = require('../utils/utils');
const properties = require('../../config/properties');
const _userRepository = require('../repositories/userRepository');

const UserService = {
    async register(email) {
        try {
            let userByMail = await _userRepository.searchByEmail(email);

            if (!Utils.isNullOrEmpty(userByMail)) {
                throw Error('The email: ' + email + ' is already used.');
            }

            let password = Utils.randomString(properties.MIN_LENGHT_PASSWORD);

            let user = {
                email: email,
                password: await bcrypt.hash(password, properties.PASSWORDSALT)
            };

            //enviar email
            //emailCredentials(email,password);

            _userRepository.create(user);
        } catch (error) {
            console.log(error);
        }
    },
    async update(id, user) {
        try {

            Validations.validaUser(user);

            let userDB = this.existUser(id);

            user.password = userDB.password;
            user.email = userDB.email;

            _userRepository.update(id, user);

        } catch (error) {
            console.log(error);
        }
    },
    async delete(id) {
        try {
            this.existUser(id);
            _userRepository.delete(id);

        } catch (error) {
            console.log(error);
        }
    },

    //PRIVATE METHODS
    existUser(id) {
        Validations.validaId(id);

        let userDB = _userRepository.findById(id)
            .then(user => { return user; })
            .catch(error => { throw error; });

        if (userDB === undefined) { throw error('User error. '); }
        return userDB;
    }
};

module.exports = UserService;