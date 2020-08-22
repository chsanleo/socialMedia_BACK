const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    owner: {
        //[username,userid]
        type: Array, required: true
    },
    parentEvent: {
        type: Number, required: true
    },
    parentMessage: {
        type: Number, required: false
    },
    body: {
        type: String, required: true
    },
    likes: {
        //[idUsers,idUsers,...]
        type: Array, required: false
    },
    delete: {
        type: Boolean, required: true
    }
});

const messageModel = mongoose.model('Message', MessageSchema);
module.exports = messageModel;