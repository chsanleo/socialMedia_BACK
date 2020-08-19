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

        if (utils.isNullOrEmpty(username)) {
            error += ' An username is required. ';
        }
        if (utils.isNullOrEmpty(name) || utils.isNullOrEmpty(surname)) {
            error += ' Name and Surname must be filled. ';
        }
        if (!utils.isNullOrEmpty(email)) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(email).toLowerCase())){
                error += ' Email must have a correct format. ';
            }
        } else {
            error += ' Email must be filled. ';
        }
        if (utils.isNullOrEmpty(birthdate)) {
            error += ' Bith date must be filled. ';
        }
        if (utils.isNullOrEmpty(country)) {
            error += ' Country must be filled. ';
        }
        if (utils.isNullOrEmpty(city)) {
            error += ' City must be filled. ';
        }
        if (utils.isNullOrEmpty(hobbies)) {
            error += ' Must be filled one or more Hobbies. ';
        }

        if (!utils.isNullOrEmpty(error)) { throw Error(error); }
    }
};