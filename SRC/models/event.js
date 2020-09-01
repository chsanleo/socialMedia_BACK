const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    owner: {
        //[user]
        type: Array, required: true
    },
    title: {
        type: String, required: true
    },
    body: {
        type: String, required: true
    },
    pic_path: {
        type: String, required: false
    },
    type: {
        type: String, required: true
    },
    date:{
        type: Date, required: true
    },
    city:{
        type: String, required: true
    },
    country:{
        type: String, required: true
    },
    createdAt:{
        type: Date, required: true
    },
    updatedAt:{
        type: Date, required: false
    },
    userLikes: {
        //[Users,Users,...]
        type: Array, required: false
    },
    userJoin: {
        //[Users,Users,...]
        type: Array, required: false
    },
    delete: {
        type: Boolean, required: true
    }
});

const eventModel = mongoose.model('Event', EventSchema);
module.exports = eventModel;
