const _countryRepository = require('../repositories/countryRespository');


const CountryService = {
    async getAll() {
        try {
            return await _countryRepository.getAll();
        } catch (error) {
            throw Error('An error has occur, please try again later');
        }
    }
};

module.exports = CountryService;