const router = require('express').Router();
const MessageController = require('../core/controllers/messageController');

router.post('/create',MessageController.create);
router.post('/event',MessageController.get);
router.post('/events',MessageController.getAll);
router.post('/update',MessageController.update);
router.post('/likeEvent',MessageController.likeMessage);
router.post('/unlikeEvent',MessageController.unLikeMessage);
router.post('/delete',MessageController.delete);


module.exports = router; 