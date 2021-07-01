"use strict";

var winston = require('winston');

require('express-async-errors');

module.exports = function () {
  process.on('uncaughtException', function (ex) {
    winston.error(ex.mesaage, ex);
    process.exit(1);
  });
  process.on('unhandledRejection', function (ex) {
    winston.error(ex.mesaage, ex);
    process.exit(1);
  });
  winston.add(winston.transports.File, {
    filename: 'logfile.log'
  });
}; //var logger = new (winston.Logger)({
// transports: [
//  new (winston.transports.Console)(),
//  new (winston.transports.File)({ filename: 'somefile.log' })
// ]
//});
//logger.log('info', 'Hello distributed log files!');
//logger.info('Hello again distributed logs');
//const logger = winston.createLogger({
//  level:'info',
//  format: winston.format.json(),
// defaultMeta:{service:'user-service'},
// transports:[
//  new winston.transports.File({Filename:'logfile.log', level:'error'}),
// ],
// });
//logger.console.info('information message');
//logger.console.warn('warning mesaage');
//winston.log('info', 'Hello distributed log files!');
//winston.info('Hello again distributed logs');
//winston.level = 'debug';
//winston.log('debug', 'Now my debug messages are written to console!');
// winston.add(winston.transports.File, { filename: 'somefile.log' });
// winston.remove(winston.transports.Console);
//if(process.env.NODE_ENV !== 'production'){
//  logger.add(new winston.transports.Console({
//      format: winston.format.simple()
//  }));
//};