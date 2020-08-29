const Event = require('../../models/event');

const EventRepository = {
    async create(event) {
        try {
            event.createAt = Date.now();
            await Event.create(event);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(_id) {
        try {
            return await Event.find({ _id: _id, delete: false });
        } catch (error) {
            console.log(error);
        }
    },
    async findAllByType(type) {
        try {
            return await Event.find({ type: type, delete: false }).sort('-CreatedAt');
        } catch (error) {
            console.log(error);
        }
    },
    async update(event) {
        try {
            event.UpdateAt = Date.now();
            await Event.updateOne({ '_id': event._id }, { upsert: true });
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = EventRepository;