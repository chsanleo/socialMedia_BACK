const router = require('express').Router();
const MainController = require('../core/controllers/mainController');

router.post('/register', MainController.register);
router.post('/login', MainController.login);
router.get('/getAllCountries', MainController.getAllCountries);

module.exports = router;