const _friendService = require('../services/friendService');

const ConversionObjects = {
    userToUserReturn(user) {
        //0 delete, 1 pending, 2 accepted, 3 deny

        let friends = 0;
        let pendingFriends = 0;

        _friendService.getAllFriendRelations(user.id)
            .then(friendsList => {
                if(friendsList !== null){return;}
                for (let friend of friendsList) {
                    if (friend.type === 1 && friend.createdBy !== user.id) {
                        pendingFriends++;
                        continue;
                    }
                    if (friend.type === 2) {
                        friends++;
                        continue;
                    }
                }
            })
            .catch(error=>{console.log('FriendCount '+error)});

        const userReturn = {
            id: user.id,
            username: user.username,
            name: user.name,
            surname: user.surname,
            email: user.email,
            pic_path: user.pic_path,
            birthdate: user.birthdate,
            address: user.address,
            country: user.country,
            city: user.city,
            hobbies: user.hobbies,
            job: user.job,
            numFriends: friends,
            pendingFriends: pendingFriends
        }
        return userReturn;
    }
};

module.exports = ConversionObjects;