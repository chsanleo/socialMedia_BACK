const { Friend } = require('../../models');

//0 delete, 1 pending, 2 accepted, 3 deny
const UserRepository = {
    async create(friendRelation) {
        try {
            await Friend.create(friendRelation);
        } catch (error) {
            console.log(error);
        }
    },
    async getAll(id){
        let idFriend = parseInt(id);
        try {
            let friends = await Friend.findAll({where: {friend1:idFriend}});
            friends.concat(await Friend.findAll({where: {friend2:idFriend}}));
            return friends;
        } catch (error) {
            console.log(error);
        }
    },
    async update(id, type) {
        try {
           await Friend.update({type:type},{where:{id:id}});
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = UserRepository;