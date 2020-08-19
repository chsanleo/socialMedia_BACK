const utils = require('./utils');

const MIN_ID = 1;

const Validations = {
    validaId(id) {
        if (id === undefined || id < MIN_ID || isNaN(id)) {
            throw Error(" Id must be provide. ");
        }
    }
};