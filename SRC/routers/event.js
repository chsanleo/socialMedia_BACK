const router = require('express').Router();
const EventController = require('../core/controllers/eventController');

router.post('/create',EventController.create);
router.post('/event',EventController.get);
router.post('/events',EventController.getAll);
router.post('/update',EventController.update);
router.post('/joinEvent',EventController.joinEvent);
router.post('/likeEvent',EventController.likeEvent);
router.post('/delete',EventController.delete);


module.exports = router; 