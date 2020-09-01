const router = require('express').Router();
const MessageController = require('../core/controllers/messageController');

router.post('/create', MessageController.create);
router.post('/message', MessageController.get);
router.post('/messages', MessageController.getAll);
router.post('/update', MessageController.update);
router.post('/likeMessage', MessageController.likeMessage);
router.post('/dislikeMessage', MessageController.unLikeMessage);
router.post('/delete', MessageController.delete);

module.exports = router; 