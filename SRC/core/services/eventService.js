const _eventRepository = require('../repositories/eventRepository');
const validations = require('../utils/validations');
const utils = require('../utils/utils');

const EventService = {
    async create(event) {
        try {
            validations.validaEvent(event);
            return await _eventRepository.create(event);
        } catch (error) {
            console.log(error);
        }
    },
    async get(id) {
        try {
            if (utils.isNullOrEmpty(id)) { return null; }
            return await _eventRepository.findById(id);
        } catch (error) {
            console.log(error);
        }
    },
    async getByType(type) {
        try {
            if (utils.isNullOrEmpty(type)) { return []; }
            return await _eventRepository.findAllByType(type);
        } catch (error) {
            console.log(error);
        }
    },
    async update(event) {
        try {
            Validations.validaEvent(event);
            let eventDB = await _eventRepository.findById(event._id);
            //aplica cambios
            return await _eventRepository.update(event);
        } catch (error) {
            console.log(error);
        }
    },
    async joinEvent(user, _id) {
        try {
            if (utils.isNullOrEmpty(id) || user === null) { return null; }
            let event = await _eventRepository.findById(_id);

            event.userJoin = utils.pushUnic(event.userJoin, user);

            return await _eventRepository.update(event);
        } catch (error) {
            console.log(error);
        }
    },
    async likeEvent(user, _id) {
        try {
            if (utils.isNullOrEmpty(id) || user === null) { return null; }
            let event = await _eventRepository.findById(_id);

            event.userLikes = utils.pushUnic(event.userLikes, user);

            return await _eventRepository.update(event);
        } catch (error) {
            console.log(error);
        }
    },
    async unLikeEvent(user, _id) {
        try {
            if (utils.isNullOrEmpty(id) || user === null) { return null; }
            let event = await _eventRepository.findById(_id);
            let posItem = event.userLikes.indexOf(user);
            if (posItem > 0) { event.userLikes.splice(posItem, 1); }

            return await _eventRepository.update(event);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(_id) {
        try {
            if (utils.isNullOrEmpty(_id)) { return null; }
            let event = await _eventRepository.findById(_id);
            event.delete = true;
            await _eventRepository.update(event);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = EventService;