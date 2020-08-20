const router = require('express').Router();
const MainController = require('../core/controllers/mainController');

router.post('/register', MainController.register);
router.post('/login', MainController.login);

module.exports = router;