const router = require('express').Router();
const UserController = require('../core/controllers/userController');

router.post('/update', UserController.update);
router.post('/delete', UserController.delete);
router.post('/user', UserController.getUser);
router.post('/logout', UserController.logOut);
router.post('/usersNear', UserController.usersNear);
//router.post('/usersJobs', UserController.usersNear);
//router.post('/usersHobbies', UserController.usersNear);

module.exports = router; 