var winston = require('winston');
​
// define the custom settings for each transport (file, console)
var options = {
    file: {
        //error, warn, info, verbose, debug, silly
        level: 'info',
        filename: `/logs`,
        handleExceptions: true,
        json: true,
        maxsize: 5, // 5MB
        maxFiles: 1,
        colorize: false,
    },
    console: {
         //error, warn, info, verbose, debug, silly
        level: 'info',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
​
// instantiate a new Winston Logger with the settings defined above
var logger = new winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});
​
// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};
​
module.exports = logger;