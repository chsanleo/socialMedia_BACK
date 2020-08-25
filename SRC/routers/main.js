const router = require('express').Router();
const MainController = require('../core/controllers/mainController');

router.post('/register', MainController.register);
router.post('/login', MainController.login);
router.get('/getAllCountries', MainController.getAllCountries);
router.post('/forgotPass', MainController.forgotPass);
router.post('/contactUs',MainController.contactUs);


module.exports = router;