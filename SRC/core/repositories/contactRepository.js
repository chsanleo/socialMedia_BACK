const { ContactUs } = require('../../models');

const ContactRepository = {
    async create(contact) {
        try {
            return await ContactUs.create(contact);
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = ContactRepository;