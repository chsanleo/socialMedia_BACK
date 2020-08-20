const _friendService = require('../services/friendService');


//0 delete, 1 pending, 2 accepted, 3 deny
const FriendController = {

    createFriendRelation(req, res) {
        _friendService.createFriendRelation(req.body.idFriendFrom, req.body.idFriendTo)
            .then(res.status(201).send())
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    getAllFriendRelations(req, res) {
        _friendRepository.getAll(req.body.idFriend)
            .then(listFriends => { res.status(200).send(listFriends); })
            .catch(
                error => {
                    console.log(error);
                    res.status(500).send(error);
                }
            );
    },
    denyFriendRequest(req, res) {
        _friendService.updateFriendRelation(req.body.user.id, 3)
            .then()
            .catch(
                error => {
                    console.log(error);
                    res.status(500).send(error);
                }
            );
    },
    acceptFriendRequest(req, res) {
        _friendService.updateFriendRelation(req.body.user.id, 2)
            .then()
            .catch(
                error => {
                    console.log(error);
                    res.status(500).send(error);
                }
            );
    }

};

module.exports = FriendController;