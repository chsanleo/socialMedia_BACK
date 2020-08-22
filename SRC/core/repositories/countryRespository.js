const { Country } = require('../../models');

const CountryRepository = {
    async getAll() {
        try {
            return await Country.findAll();
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = CountryRepository;