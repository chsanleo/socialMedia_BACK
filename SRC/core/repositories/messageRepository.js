const Message = require('../../models/message');

const MessageRepository = {
    async create(message) {
        try {
            message.CreateAt = Date.now();
            await Message.create(message);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(_id) {
        try {
            return await Message.findOne({ _id: _id, delete: false });
        } catch (error) {
            console.log(error);
        }
    },
    async findAllByParentId(eventParentId) {
        try {
            return await Message.find({ parentEvent: eventParentId, delete: false }).sort('+createdAt');
        } catch (error) {
            console.log(error);
        }
    },
    async update(message) {
        try {
            message.UpdateAt = Date.now();
            await Message.updateOne({ '_id': message._id }, message,{ upsert: true });
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = MessageRepository;