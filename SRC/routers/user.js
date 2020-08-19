const router = require('express').Router();
const UserController = require('../core/controllers/userController');

router.post('/update', UserController.update);
router.get('/delete', UserController.delete);
router.get('/usersNear', UserController.usersNear);
//router.get('/usersJobs', UserController.usersNear);
//router.get('/usersHobbies', UserController.usersNear);

module.exports = router; 