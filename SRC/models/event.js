const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    owner: {
        //[username,userid]
        type: Array, required: true
    },
    title: {
        type: String, required: true
    },
    body: {
        type: String, required: true
    },
    pic_path: {
        type: String, required: true
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
        //[idUsers,idUsers,...]
        type: Array, required: false
    },
    userJoin: {
        //[idUsers,idUsers,...]
        type: Array, required: false
    },
    delete: {
        type: Boolean, required: true
    }
});

const eventModel = mongoose.model('Event', EventSchema);
module.exports = eventModel;
