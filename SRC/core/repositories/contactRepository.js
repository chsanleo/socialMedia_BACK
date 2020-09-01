const { ContactUs } = require('../../models');

const ContactRepository = {
    async create(contact) {
        try {
            await ContactUs.create(contact);
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = ContactRepository;