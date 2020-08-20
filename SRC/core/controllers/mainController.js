const Utils = require('../utils/utils');

const _userService = require('../services/userService');

const MainController = {
    register(req, res) {

        let email = req.body.email;

        if (!Utils.isNullOrEmpty(email)) {
            _userService.register(email)
                .then()
                .catch(error => {
                    console.log(error);
                    res.status(500).send(error);
                });
        }
        res.status(201).send();
    }
};
module.exports = MainController;