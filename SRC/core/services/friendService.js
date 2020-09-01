const _friendRepository = require('../repositories/friendRepository');
const Validations = require('../utils/validations');

//0 delete, 1 pending, 2 accepted, 3 deny
const FriendService = {

    async createFriendRelation(idFriendFrom, idFriendTo) {
        try {
            Validations.validaId(idFriendFrom);
            Validations.validaId(idFriendTo);

            const friendRelation = {
                friend1: idFriendFrom,
                friend2: idFriendTo,
                createdBy: idFriendFrom,
                type: 1
            }

            await _friendRepository.create(friendRelation);
            //mail have a penddin request
        } catch (error) {
            console.log(error);
        }
    },
    async getAllFriendRelations(idFriend) {
        try {
            Validations.validaId(idFriend);

            return await _friendRepository.getAll(idFriend);
        } catch (error) {
            console.log(error);
        }
    },
    async updateFriendRelation(id, type) {
        try {
            Validations.validaId(id);
            Validations.validaTypeFriendRelation(type);

            await _friendRepository.update(id, type);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = FriendService;