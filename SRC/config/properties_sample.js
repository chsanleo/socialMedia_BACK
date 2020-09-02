//Global Variables
const PROPERTIES = {
    server_PORT: 0,
    token_SECRETWORD: 'secretWord',
    token_EXPIRES: '1s',
    PASSWORDSALT: 1,
    MIN_LENGHT_PASSWORD: 1,
    MONGO_USER: 'mongoUser',
    MONGO_PASS: 'mongoPass',
    MONGO_NAMEDB: 'mongodb://localhost:27017/SocialMedia',
    LOG_PATH: `path`,
    LOG_MAXSIZE: 5,// 5MB
    LOG_MAXFILES: 1,
    LOG_LEVELFILE: 'info',//error, warn, info, verbose, debug, silly
    LOG_LEVELCONSOLE: 'debug'//error, warn, info, verbose, debug, silly
};

module.exports = PROPERTIES