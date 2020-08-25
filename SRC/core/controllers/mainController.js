const Utils = require('../utils/utils');

const _userService = require('../services/userService');
const _countryService = require('../services/countryService');
const _contactService = require('../services/contactService');

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
    },
    login(req, res) {
        _userService.login(req.body.email, req.body.password)
            .then(login => { res.status(200).send(login); })
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    getAllCountries(req,res){
        _countryService.getAll()
        .then(countriesList => {res.status(200).send(countriesList);})
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
    },
    forgotPass(req,res){
        _userService.recoveryPass(req.body.email)
        .then()
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
    },
    contactUs(req,res){
        let contactUs = {
            email: req.body.email,
            subject: req.body.subject,
            body: req.body.body
        };
        _contactService.create(contactUs)
        .then()
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        });
    }
};
module.exports = MainController;