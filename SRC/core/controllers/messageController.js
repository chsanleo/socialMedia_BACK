const _messageService = require('../services/messageService');
const conversionToModel = require('../modelsReturn/conversionToModel');

const MessageController = {
    create(req, res) {
        let message = {
            owner: conversionToModel.userReturnToUser(req.body.owner),//req.user,
            parentEvent: req.body.parentEvent,
            parentMessage: req.body.parentMessage,
            body: req.body.body,
            likes: new Array(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            delete: false
        };
        
       _messageService.create(message)
            .then(message =>  res.status(201).send(message))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    get(req, res) {
        _messageService.get(req.body.id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    //byParentEvent and orderbyDate
    getAll(req, res) {
        _messageService.getByParent(req.body.parentEvent)
            .then(messagesList => res.status(200).send(messagesList))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },//
    update(req, res) {
        let event = {
            _id: req.body._id,
            title: req.body.title,
            body: req.body.body,
            pic_path: req.body.pic_path,
            type: req.body.type,
        };
        _eventService.update(event)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    likeMessage(req, res) {
        _messageService.likeMessage(conversionToModel.userReturnToUser(req.body.user), req.body._id)//(req.user, req.body._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    unLikeMessage(req, res) {
        _messageService.unLikeMessage(conversionToModel.userReturnToUser(req.body.user), req.body._id)//(req.user, req.body._id)
            .then(event => res.status(200).send(event))
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    },
    delete(req, res) {
        _messageService.delete(req.body._id)
            .then()
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            });
    }
};

module.exports = MessageController;