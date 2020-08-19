const express = require('express');
const app = express();

//PropertiesFile
const properties = require('./config/properties');

//Router
const mainRouter = require('./routes/main');
const userRouter = require('./routers/user');

const cors = require('./middleware/cors');

app.use(express.json());
app.use(cors);

app.use('/main', mainRouter);
app.use('/user', userRouter);

app.listen(properties.server_PORT, () => console.log('Server running on port ' + properties.server_PORT));