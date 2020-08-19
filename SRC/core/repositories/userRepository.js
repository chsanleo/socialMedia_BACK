const { User } = require('../../models');

const UserRepository = {

    async searchByEmail(email) {
        try {
            return await User.findOne({ where: { email: email } });
        } catch (error) { 
            console.log(error);
            return null;
        }
    },

    async create(user){
        try {
            await User.create(user);
        } catch (error) { 
            console.log(error);
        }
    }
};

module.exports = UserRepository;