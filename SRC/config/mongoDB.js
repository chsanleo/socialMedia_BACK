const properties = require('./properties');
const dbconnect = () => {

    const mongoose = require("mongoose");
    const uri = `mongodb+srv://${properties.MONGO_USER}:${properties.MONGO_PASS}@${properties.MONGO_CLUSTER}/${properties.MONGO_NAMEDB}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('Connection established.');
        })
        .catch(error => console.log('Error connecting:' + error));}

module.exports = dbconnect;