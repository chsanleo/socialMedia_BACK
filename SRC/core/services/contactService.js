const _contactRepository = require('../repositories/contactRespository');
const validations = require('../utils/validations');

const ContactService = {
    async create(contactUs) {
        try {
            validations.validateContact(contactUs);
            return await _contactRepository.create(contactUs);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = ContactService;