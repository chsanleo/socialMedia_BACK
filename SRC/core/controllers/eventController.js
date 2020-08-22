const _eventService = require('../services/eventService');

const EventController = {
    create(req, res) {
        let event = {
            owner: req.user,
            title: req.title,
            body: req.body,
            pic_path: req.pic_path,
            type: req.type,
            userLikes: null,
            userJoin: null,
            createdAt: null,
            updatedAt: null,
            delete: false
        };
        _eventService.create(event)
            .then(event => res.status(201).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    get(req, res) {
        _eventService.get(req.id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    //byType and orderbyDate
    getAll(req, res) {
        _eventService.getByType(req.type)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    update(req, res) {
        let event = {
            _id: req._id,
            title: req.title,
            body: req.body,
            pic_path: req.pic_path,
            type: req.type,
        };
        _eventService.update(event)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    joinEvent(req, res) {
        _eventService.joinEvent(req.user, req._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    likeEvent(req, res) {
        _eventService.likeEvent(req.user, req._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    delete(req, res) {
        _eventService.delete(req._id)
            .then()
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    }
};

module.exports = EventController;