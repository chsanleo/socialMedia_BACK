const _messageRepository = require('../repositories/messageRepository');
const validations = require('../utils/validations');
const utils = require('../utils/utils');

const MessageService = {
    async create(message) {
        try {
            validations.validaMessage(message);
            return await _messageRepository.create(message);
        } catch (error) {
            console.log(error);
        }
    },
    async get(id) {
        try {
            if (utils.isNullOrEmpty(id)) { return null; }
            return await _messageRepository.findById(id);
        } catch (error) {
            console.log(error);
        }
    },
    async getByParent(evetnParentId) {
        try {
            if (utils.isNullOrEmpty(evetnParentId)) { return []; }
            return await _messageRepository.findAllByParentId(evetnParentId);
        } catch (error) {
            console.log(error);
        }
    },
    async likeMessage(user, _id) {
        try {
            if (utils.isNullOrEmpty(id) || user === null) { return null; }
            let message = await _messageRepository.findById(_id);

            if (message.userLikes === undefined || message.userLikes.length === 0) {
                let arr = new Array();
                arr.push(user);
                message.userLikes = arr;
            }
            else {
                message.userLikes = utils.pushUnic(message.userLikes, user);
            }
             await _messageRepository.update(message);
             return await _messageRepository.get(_id);
        } catch (error) {
            console.log(error);
        }
    },
    async unLikeMessage(user, _id) {
        try {
            if (utils.isNullOrEmpty(id) || user === null) { return null; }
            let message = await _messageRepository.findById(_id);
            let posItem = -1;
            let found = false;

            for (let userLike of event.userLikes) {
                posItem++;
                if (userLike.id === user.id) {
                    found = true;
                    break;
                }
            }

            await _messageRepository.update(message);
            return await _messageRepository.get(_id);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(id) {
        try {
            if (utils.isNullOrEmpty(id)) { return null; }
            let message = await _messageRepository.findById(id);
            message.delete = true;
            await _messageRepository.update(message);
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = MessageService;