const _eventService = require('../services/eventService');

const EventController = {
    create(req, res) {
        let event = {
            owner: req.body.owner,//req.user
            title: req.body.title,
            body: req.body.body,
            pic_path: req.body.pic_path,
            type: req.body.type,
            country: req.body.country,
            date: req.body.date,
            city: req.body.city,
            userLikes: new Array(),
            userJoin: new Array(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
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
        _eventService.get(req.body.id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    //byType and orderbyDate
    getAll(req, res) {
        _eventService.getByType(req.body.type)
            .then(eventList => res.status(200).send(eventList))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },

    update(req, res) {
        let event = {
            _id: req.body._id,
            title: req.body.title,
            body: req.body.body,
            pic_path: req.body.pic_path,
            type: req.body.type,
            country: req.body.country,
            city: req.body.city
        };

        _eventService.update(event)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    joinEvent(req, res) {
        _eventService.joinEvent(req.body.user, req.body._id)//(req.user, req.body._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    likeEvent(req, res) {
        _eventService.likeEvent(req.body.user, req.body._id)//(req.user, req.body._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    unLikeEvent(req, res) {
        _eventService.unLikeEvent(req.body.user, req.body._id)//(req.user, req.body._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    delete(req, res) {
        _eventService.delete(req.body._id)
            .then()
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    }
};

module.exports = EventController;