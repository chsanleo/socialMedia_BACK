const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Validations = require('../utils/validations');
const Utils = require('../utils/utils');
const properties = require('../../config/properties');
const _userRepository = require('../repositories/userRepository');
const _emailService = require('../services/mailService');
const conversion = require('../modelsReturn/conversionToReturn');

const UserService = {
    async register(email) {
        try {
            if (Utils.isNullOrEmpty(email)) { return; }

            let userByMail = await _userRepository.searchByEmail(email);

            if (!Utils.isNullOrEmpty(userByMail)) {
                throw Error('The email: ' + email + ' is already used.');
            }

            let password = Utils.randomString(properties.MIN_LENGHT_PASSWORD);

            let user = {
                email: email,
                password: await bcrypt.hash(password, properties.PASSWORDSALT),
                pic_path: ''
            };
            _userRepository.create(user);

            _emailService.emailCredentials(email, password);

        } catch (error) {
            console.log(error);
        }
    },
    async recoveryPass(email) {
        try {
            if (Utils.isNullOrEmpty(email)) { return; }

            let userByMail = await _userRepository.searchByEmail(email);
            let password = Utils.randomString(properties.MIN_LENGHT_PASSWORD);

            userByMail.password = password;
            _userRepository.update(userByMail.id, userByMail);

            _emailService.emailCredentials(email, password);

        } catch (error) {
            console.log(error);
        }
    },

    async login(email, password) {
        try {
            if (Utils.isNullOrEmpty(email) || Utils.isNullOrEmpty(password)) { return null; }

            let user = await _userRepository.searchByEmail(email);
            if (Utils.isNullOrEmpty(user)) {
                throw Error(' Not registered. ');
            }
            if (!await bcrypt.compare(password, user.password)) {
                throw new Error({ message: 'Wrong Credentials' });
            }

            let token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: properties.token_EXPIRES });

            await _userRepository.updateToken(user.id, token);

            let loginObj = {
                user: conversion.userToUserReturn(user),
                token: token
            }

            return loginObj;
        } catch (error) {
            console.log(error);
            throw Error(error);
        }
    },
    async logOut(id) {
        try {
            Validations.validaId(id);
            await _userRepository.updateToken(id, null);
        } catch (error) {
            throw Error ('An error has occur, please try again later');
        }
    },
    async usersNear(id) {
        try {
            let userDB = await this.existUser(id);
            return _userRepository.searchByCity(userDB.city);

        } catch (error) {
            console.log(error);
        }
    },
    async update(id, user) {
        try {
            Validations.validaUser(user);

            let userDB = await this.existUser(id);

            user.password = userDB.password;
            user.email = userDB.email;

            await _userRepository.update(id, user);

        } catch (error) {
            console.log(error);
        }
    },
    async delete(id) {
        try {

            this.existUser(id);
            await _userRepository.delete(id);

        } catch (error) {
            console.log(error);
        }
    },

    async existUser(id) {
        try {
            Validations.validaId(id);

            let userDB = await _userRepository.findById(id);

            if (userDB === undefined) { throw error(' User error. '); }
            return userDB;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = UserService;