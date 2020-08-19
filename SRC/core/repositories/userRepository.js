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
    async create(user) {
        try {
            await User.create(user);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(id) {
        try {
            return await User.findByPk(id);
        } catch (error) {
            console.log(error);
        }
    },
    async update(id, user) {
        try {
            await User.update(user, { where: { id: id } });
        } catch (error) {
            console.log(error);
        }
    },
    async delete(id) {
        try {
            await User.User.delete(id);;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = UserRepository;