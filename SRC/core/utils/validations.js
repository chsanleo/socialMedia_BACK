const utils = require('./utils');

const MIN_ID = 1;
const EMPTY = '';

const Validations = {
    validaId(id) {
        if (id === undefined || id < MIN_ID || isNaN(id)) {
            throw Error(" Id must be provide. ");
        }
    },
    validaUser(user) {
        let error = EMPTY;

        if (utils.isNullOrEmpty(user.username)) {
            error += ' An username is required. ';
        }
        if (utils.isNullOrEmpty(user.name) || utils.isNullOrEmpty(user.surname)) {
            error += ' Name and Surname must be filled. ';
        }
        if (utils.isNullOrEmpty(user.birthdate)) {
            error += ' Bith date must be filled. ';
        }
        if (utils.isNullOrEmpty(user.country)) {
            error += ' Country must be filled. ';
        }
        if (utils.isNullOrEmpty(user.city)) {
            error += ' City must be filled. ';
        }
        if (utils.isNullOrEmpty(user.hobbies)) {
            error += ' Must be filled one or more hobbies. ';
        }

        if (!utils.isNullOrEmpty(error)) { throw Error(error); }
    },
    isValidEmail(email) {
        if (!utils.isNullOrEmpty(email)) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase())) {
                error += ' Email must have a correct format. ';
            }
        } else {
            error += ' Email must be filled. ';
        }
        if (!utils.isNullOrEmpty(error)) { throw Error(error); }
    },
    validaTypeFriendRelation(typeFriendR) {
        if (utils.isNullOrEmpty(typeFriendR)) { throw Error(" Incorrect type. ") }
    },
    validaEvent(event) {
        let error = EMPTY;

        if (event.owner.length == 0) {
            error += ' User must be provided. ';
        }
        if (utils.isNullOrEmpty(event.title)) {
            error += ' A title must be provided. ';
        }
        if (utils.isNullOrEmpty(event.body)) {
            error += ' A body must be provided. ';
        }
        if (utils.isNullOrEmpty(event.type)) {
            error += ' A type must be provided. ';
        }

        if (!utils.isNullOrEmpty(error)) { throw Error(error); }
    }
};

module.exports = Validations;