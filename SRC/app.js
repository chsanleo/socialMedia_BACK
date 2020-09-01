const express = require('express');
const app = express();

//#region Properties File
const properties = require('./config/properties');
//#endregion

//#region MongoConectionDB
const dbconnect = require('./config/mongoDb');
dbconnect();
//#endregion

//#region Logger
var winston = require('./config/winston');
var morgan = require('morgan');
app.use(morgan('combined', { stream: winston.stream }));
//#endregion

//#region Router definition
const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const friendRouter = require('./routers/friend');
const eventRouter = require('./routers/event');
const messageRouter = require('./routers/message');

//#region Middleware definition
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');
//#endregion

//#region  Middlewares
app.use(cors);
app.use(express.json());

app.options("/*", (req, res)=> res.send());
//#endregion

//#region Routers
app.use('/main', mainRouter);
app.use('/user'/*, auth*/, userRouter);
app.use('/friend'/*, auth*/, friendRouter);
app.use('/event', auth, eventRouter);
app.use('/msg'/*, auth*/, messageRouter);
//#endregion

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));