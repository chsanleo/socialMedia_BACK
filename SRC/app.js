const express = require('express');
const app = express();

//PropertiesFile
const properties = require('./config/properties');

//Router
const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const friendRouter = require ('./routers/friend');

const cors = require('./middleware/cors');

app.use(express.json());
app.use(cors);

app.use('/main', mainRouter);
app.use('/user', userRouter);
app.use('/friend',friendRouter);

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));