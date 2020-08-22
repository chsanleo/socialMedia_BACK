const _countryRepository = require('../repositories/countryRespository');


const CountryService = {
    async getAll() {
        try {
            return await _countryRepository.getAll();
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = CountryService;