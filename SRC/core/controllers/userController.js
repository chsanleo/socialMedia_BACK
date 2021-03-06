const _userService = require('../services/userService');
const conversionToReturn = require('../modelsReturn/conversionToReturn');

const UserController = {
    getUser(req, res) {
        return res.status(200).send(conversionToReturn.userToUserReturn(req.user));
    },
    getProfile(req, res) {
        console.log(req.body)
        _userService.existUser(req.body.id)
            .then(profile =>{ res.status(200).send(conversionToReturn.userToUserReturn(profile))})
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    logOut(req, res) {
        _userService.logOut(req.user.id)
            .then(res.status(200).send())
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    update(req, res) {
        const user = {
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            pic_path: req.body.pic_path,
            birthdate: req.body.birthdate,
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            hobbies: req.body.hobbies,
            job: req.body.job,
            password: '',
            email: ''
        };
        _userService.update(req.body.id, user)//req.user.id
            .then(res.status(200).send())
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    },
    delete(req, res) {
        _userService.delete(req.body.user.id)
            .then(res.status(200).send())
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    },
    usersNear(req, res) {
        _userService.usersNear(req.body.user.id)
            .then(userNear => { res.status(200).send(userNear); })
            .catch(error => {
                console.log(error);
                res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
            });
    }
};

module.exports = UserController;