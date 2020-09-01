const express = require('express');
const app = express();

//PropertiesFile
const properties = require('./config/properties');

//MongoConectionDB
const dbconnect = require('./config/mongoDb');
dbconnect();

//Router
const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const friendRouter = require('./routers/friend');
const eventRouter = require('./routers/event');
const messageRouter = require('./routers/message');

//Middleware
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');


// Middlewares

app.use(cors);
app.use(express.json());
app.options("/*", (req, res)=> res.send());

app.use('/main', mainRouter);
app.use('/user'/*, auth*/, userRouter);
app.use('/friend'/*, auth*/, friendRouter);
app.use('/event', auth, eventRouter);
app.use('/msg'/*, auth*/, messageRouter);


app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));