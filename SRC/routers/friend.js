const router = require('express').Router();
const FriendController = require('../core/controllers/friendController');

router.post('/friendrequest', FriendController.createFriendRelation);
router.post('/allfriends', FriendController.getAllFriendRelations);
router.post('/denyRequest', FriendController.denyFriendRequest);   
router.post('/acceptRequesst', FriendController.acceptFriendRequest);

module.exports = router; 