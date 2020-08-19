const _userService = require('../services/userService');

const UserController = {

    update(req, res) {
        const user = {
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            pic_path: req.body.pic_path,
            birthdate: req.body.birthdate,
            address: req.body.adress,
            country: req.body.country,
            city: req.body.city,
            hobbies: req.body.hobbies,
            password: '',
            email: ''
        };
        _userService.update(req.body.id, user)
            .then(res.status(200).send())
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    },
    delete(req, res) {

        _userService.delete(req.body.id)
            .then(res.status(200).send())
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    },
    async usersNear(req, res) {
        _userService.usersNear(req.body.id)
            .then(userNear => res.status(200).send(userNear))
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    }
};

module.exports = UserController;